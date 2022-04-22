<?php

namespace MatthiasWeb\RealMediaLibrary\Vendor;

if (!\class_exists('MatthiasWeb\\RealMediaLibrary\\Vendor\\Puc_v4p11_Vcs_GitLabApi', \false)) {
    class Puc_v4p11_Vcs_GitLabApi extends \MatthiasWeb\RealMediaLibrary\Vendor\Puc_v4p11_Vcs_Api
    {
        /**
         * @var string GitLab username.
         */
        protected $userName;
        /**
         * @var string GitLab server host.
         */
        protected $repositoryHost;
        /**
         * @var string Protocol used by this GitLab server: "http" or "https".
         */
        protected $repositoryProtocol = 'https';
        /**
         * @var string GitLab repository name.
         */
        protected $repositoryName;
        /**
         * @var string GitLab authentication token. Optional.
         */
        protected $accessToken;
        /**
         * @var bool Whether to download release assets instead of the auto-generated source code archives.
         */
        protected $releaseAssetsEnabled = \false;
        /**
         * @var bool Whether to download release asset package rather than release asset source.
         */
        protected $releasePackageEnabled = \false;
        public function __construct($repositoryUrl, $accessToken = null, $subgroup = null)
        {
            //Parse the repository host to support custom hosts.
            $port = \parse_url($repositoryUrl, \PHP_URL_PORT);
            if (!empty($port)) {
                $port = ':' . $port;
            }
            $this->repositoryHost = \parse_url($repositoryUrl, \PHP_URL_HOST) . $port;
            if ($this->repositoryHost !== 'gitlab.com') {
                $this->repositoryProtocol = \parse_url($repositoryUrl, \PHP_URL_SCHEME);
            }
            //Find the repository information
            $path = \parse_url($repositoryUrl, \PHP_URL_PATH);
            if (\preg_match('@^/?(?P<username>[^/]+?)/(?P<repository>[^/#?&]+?)/?$@', $path, $matches)) {
                $this->userName = $matches['username'];
                $this->repositoryName = $matches['repository'];
            } elseif ($this->repositoryHost === 'gitlab.com') {
                //This is probably a repository in a subgroup, e.g. "/organization/category/repo".
                $parts = \explode('/', \trim($path, '/'));
                if (\count($parts) < 3) {
                    throw new \InvalidArgumentException('Invalid GitLab.com repository URL: "' . $repositoryUrl . '"');
                }
                $lastPart = \array_pop($parts);
                $this->userName = \implode('/', $parts);
                $this->repositoryName = $lastPart;
            } else {
                //There could be subgroups in the URL:  gitlab.domain.com/group/subgroup/subgroup2/repository
                if ($subgroup !== null) {
                    $path = \str_replace(\trailingslashit($subgroup), '', $path);
                }
                //This is not a traditional url, it could be gitlab is in a deeper subdirectory.
                //Get the path segments.
                $segments = \explode('/', \untrailingslashit(\ltrim($path, '/')));
                //We need at least /user-name/repository-name/
                if (\count($segments) < 2) {
                    throw new \InvalidArgumentException('Invalid GitLab repository URL: "' . $repositoryUrl . '"');
                }
                //Get the username and repository name.
                $usernameRepo = \array_splice($segments, -2, 2);
                $this->userName = $usernameRepo[0];
                $this->repositoryName = $usernameRepo[1];
                //Append the remaining segments to the host if there are segments left.
                if (\count($segments) > 0) {
                    $this->repositoryHost = \trailingslashit($this->repositoryHost) . \implode('/', $segments);
                }
                //Add subgroups to username.
                if ($subgroup !== null) {
                    $this->userName = $usernameRepo[0] . '/' . \untrailingslashit($subgroup);
                }
            }
            parent::__construct($repositoryUrl, $accessToken);
        }
        /**
         * Get the latest release from GitLab.
         *
         * @return Puc_v4p11_Vcs_Reference|null
         */
        public function getLatestRelease()
        {
            $releases = $this->api('/:id/releases');
            if (\is_wp_error($releases) || empty($releases) || !\is_array($releases)) {
                return null;
            }
            foreach ($releases as $release) {
                if (\true !== $release->upcoming_release) {
                    break 1;
                    //Break the loop on the first release we find that isn't an upcoming release
                }
            }
            if (\is_wp_error($release) || !\is_object($release) || !isset($release->tag_name)) {
                return null;
            }
            $reference = new \MatthiasWeb\RealMediaLibrary\Vendor\Puc_v4p11_Vcs_Reference(array(
                'name' => $release->tag_name,
                'version' => \ltrim($release->tag_name, 'v'),
                //Remove the "v" prefix from "v1.2.3".
                'downloadUrl' => '',
                'updated' => $release->released_at,
                'apiResponse' => $release,
            ));
            $download_url = \false;
            if ($this->releasePackageEnabled && isset($release->assets, $release->assets->links)) {
                /**
                 * Use the first asset LINK that is a zip format file generated by a Gitlab Release Pipeline
                 *
                 * @link https://gist.github.com/timwiel/9dfd3526c768efad4973254085e065ce
                 */
                foreach ($release->assets->links as $link) {
                    if ('zip' === \substr($link->url, -3)) {
                        $download_url = $link->url;
                        break 1;
                    }
                }
                if (empty($download_url)) {
                    return null;
                }
                if (!empty($this->accessToken)) {
                    $download_url = \add_query_arg('private_token', $this->accessToken, $download_url);
                }
                $reference->downloadUrl = $download_url;
                return $reference;
            } elseif (isset($release->assets)) {
                /**
                 * Use the first asset SOURCE file that is a zip format from a Gitlab Release which should be a zip file
                 */
                foreach ($release->assets->sources as $source) {
                    if ('zip' === $source->format) {
                        $download_url = $source->url;
                        break 1;
                    }
                }
                if (empty($download_url)) {
                    return null;
                }
                if (!empty($this->accessToken)) {
                    $download_url = \add_query_arg('private_token', $this->accessToken, $download_url);
                }
                $reference->downloadUrl = $download_url;
                return $reference;
            }
            //If we get this far without a return then obviosuly noi release download urls were found
            return null;
        }
        /**
         * Get the tag that looks like the highest version number.
         *
         * @return Puc_v4p11_Vcs_Reference|null
         */
        public function getLatestTag()
        {
            $tags = $this->api('/:id/repository/tags');
            if (\is_wp_error($tags) || empty($tags) || !\is_array($tags)) {
                return null;
            }
            $versionTags = $this->sortTagsByVersion($tags);
            if (empty($versionTags)) {
                return null;
            }
            $tag = $versionTags[0];
            return new \MatthiasWeb\RealMediaLibrary\Vendor\Puc_v4p11_Vcs_Reference(array('name' => $tag->name, 'version' => \ltrim($tag->name, 'v'), 'downloadUrl' => $this->buildArchiveDownloadUrl($tag->name), 'apiResponse' => $tag));
        }
        /**
         * Get a branch by name.
         *
         * @param string $branchName
         * @return null|Puc_v4p11_Vcs_Reference
         */
        public function getBranch($branchName)
        {
            $branch = $this->api('/:id/repository/branches/' . $branchName);
            if (\is_wp_error($branch) || empty($branch)) {
                return null;
            }
            $reference = new \MatthiasWeb\RealMediaLibrary\Vendor\Puc_v4p11_Vcs_Reference(array('name' => $branch->name, 'downloadUrl' => $this->buildArchiveDownloadUrl($branch->name), 'apiResponse' => $branch));
            if (isset($branch->commit, $branch->commit->committed_date)) {
                $reference->updated = $branch->commit->committed_date;
            }
            return $reference;
        }
        /**
         * Get the timestamp of the latest commit that changed the specified branch or tag.
         *
         * @param string $ref Reference name (e.g. branch or tag).
         * @return string|null
         */
        public function getLatestCommitTime($ref)
        {
            $commits = $this->api('/:id/repository/commits/', array('ref_name' => $ref));
            if (\is_wp_error($commits) || !\is_array($commits) || !isset($commits[0])) {
                return null;
            }
            return $commits[0]->committed_date;
        }
        /**
         * Perform a GitLab API request.
         *
         * @param string $url
         * @param array $queryParams
         * @return mixed|WP_Error
         */
        protected function api($url, $queryParams = array())
        {
            $baseUrl = $url;
            $url = $this->buildApiUrl($url, $queryParams);
            $options = array('timeout' => 10);
            if (!empty($this->httpFilterName)) {
                $options = \apply_filters($this->httpFilterName, $options);
            }
            $response = \wp_remote_get($url, $options);
            if (\is_wp_error($response)) {
                \do_action('puc_api_error', $response, null, $url, $this->slug);
                return $response;
            }
            $code = \wp_remote_retrieve_response_code($response);
            $body = \wp_remote_retrieve_body($response);
            if ($code === 200) {
                return \json_decode($body);
            }
            $error = new \WP_Error('puc-gitlab-http-error', \sprintf('GitLab API error. URL: "%s",  HTTP status code: %d.', $baseUrl, $code));
            \do_action('puc_api_error', $error, $response, $url, $this->slug);
            return $error;
        }
        /**
         * Build a fully qualified URL for an API request.
         *
         * @param string $url
         * @param array $queryParams
         * @return string
         */
        protected function buildApiUrl($url, $queryParams)
        {
            $variables = array('user' => $this->userName, 'repo' => $this->repositoryName, 'id' => $this->userName . '/' . $this->repositoryName);
            foreach ($variables as $name => $value) {
                $url = \str_replace("/:{$name}", '/' . \urlencode($value), $url);
            }
            $url = \substr($url, 1);
            $url = \sprintf('%1$s://%2$s/api/v4/projects/%3$s', $this->repositoryProtocol, $this->repositoryHost, $url);
            if (!empty($this->accessToken)) {
                $queryParams['private_token'] = $this->accessToken;
            }
            if (!empty($queryParams)) {
                $url = \add_query_arg($queryParams, $url);
            }
            return $url;
        }
        /**
         * Get the contents of a file from a specific branch or tag.
         *
         * @param string $path File name.
         * @param string $ref
         * @return null|string Either the contents of the file, or null if the file doesn't exist or there's an error.
         */
        public function getRemoteFile($path, $ref = 'master')
        {
            $response = $this->api('/:id/repository/files/' . $path, array('ref' => $ref));
            if (\is_wp_error($response) || !isset($response->content) || $response->encoding !== 'base64') {
                return null;
            }
            return \base64_decode($response->content);
        }
        /**
         * Generate a URL to download a ZIP archive of the specified branch/tag/etc.
         *
         * @param string $ref
         * @return string
         */
        public function buildArchiveDownloadUrl($ref = 'master')
        {
            $url = \sprintf('%1$s://%2$s/api/v4/projects/%3$s/repository/archive.zip', $this->repositoryProtocol, $this->repositoryHost, \urlencode($this->userName . '/' . $this->repositoryName));
            $url = \add_query_arg('sha', \urlencode($ref), $url);
            if (!empty($this->accessToken)) {
                $url = \add_query_arg('private_token', $this->accessToken, $url);
            }
            return $url;
        }
        /**
         * Get a specific tag.
         *
         * @param string $tagName
         * @return void
         */
        public function getTag($tagName)
        {
            throw new \LogicException('The ' . __METHOD__ . ' method is not implemented and should not be used.');
        }
        /**
         * Figure out which reference (i.e tag or branch) contains the latest version.
         *
         * @param string $configBranch Start looking in this branch.
         * @return null|Puc_v4p11_Vcs_Reference
         */
        public function chooseReference($configBranch)
        {
            if ($configBranch === 'main' || $configBranch === 'master') {
                //Use the latest release.
                $updateSource = $this->getLatestRelease();
                if ($updateSource === null) {
                    //Failing that, use the tag with the highest version number.
                    $updateSource = $this->getLatestTag();
                }
            }
            //Alternatively, just use the branch itself.
            if (empty($updateSource)) {
                $updateSource = $this->getBranch($configBranch);
            }
            return $updateSource;
        }
        public function setAuthentication($credentials)
        {
            parent::setAuthentication($credentials);
            $this->accessToken = \is_string($credentials) ? $credentials : null;
        }
        public function enableReleaseAssets()
        {
            $this->releaseAssetsEnabled = \true;
            $this->releasePackageEnabled = \false;
        }
        public function enableReleasePackages()
        {
            $this->releaseAssetsEnabled = \false;
            $this->releasePackageEnabled = \true;
        }
    }
}
