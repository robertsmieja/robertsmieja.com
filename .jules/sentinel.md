## 2024-05-18 - Missing Target and Rel Attributes on External Links
**Vulnerability:** External links were missing the `target="_blank"` and `rel="noopener noreferrer"` attributes.
**Learning:** Opening external links in the same tab is poor UX, and typically external links are opened in a new tab using `target="_blank"`. When using `target="_blank"`, it is a security vulnerability (Reverse Tabnabbing) to omit `rel="noopener noreferrer"`. The newly opened tab can gain access to the `window.opener` object and could potentially redirect the original page to a malicious site. Even if `target="_blank"` isn't currently used, adding it to external links along with the secure `rel` attribute is a good security enhancement and best practice.
**Prevention:** Always add `target="_blank" rel="noopener noreferrer"` to external links.

## 2025-02-17 - AWS Credentials Exposure in Dockerfile
**Vulnerability:** AWS credentials were being passed into the Docker build process using `ARG` and persisted in the image via `aws configure`. Build arguments are stored in the image history and metadata, and `aws configure` writes secrets to the filesystem in a layer.
**Learning:** `ARG` is not suitable for secrets as they are baked into the image's config and history. Using `RUN aws configure` further persists secrets in the image's filesystem layers. Docker BuildKit's `--mount=type=secret` allows passing secrets during build time without them being stored in the final image or its history.
**Prevention:** Never use `ARG` or environment variables for secrets in Dockerfiles. Use Docker BuildKit's secret mounts (`--mount=type=secret`) to securely handle sensitive information during the build process.
