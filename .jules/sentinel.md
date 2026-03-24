## 2024-05-18 - Missing Target and Rel Attributes on External Links
**Vulnerability:** External links were missing the `target="_blank"` and `rel="noopener noreferrer"` attributes.
**Learning:** Opening external links in the same tab is poor UX, and typically external links are opened in a new tab using `target="_blank"`. When using `target="_blank"`, it is a security vulnerability (Reverse Tabnabbing) to omit `rel="noopener noreferrer"`. The newly opened tab can gain access to the `window.opener` object and could potentially redirect the original page to a malicious site. Even if `target="_blank"` isn't currently used, adding it to external links along with the secure `rel` attribute is a good security enhancement and best practice.
**Prevention:** Always add `target="_blank" rel="noopener noreferrer"` to external links.

## 2025-02-17 - AWS Credentials Exposure in Dockerfile
**Vulnerability:** AWS credentials were being passed into the Docker build process using `ARG` and persisted in the image via `aws configure`. Build arguments are stored in the image history and metadata, and `aws configure` writes secrets to the filesystem in a layer.
**Learning:** `ARG` is not suitable for secrets as they are baked into the image's config and history. Using `RUN aws configure` further persists secrets in the image's filesystem layers. Docker BuildKit's `--mount=type=secret` allows passing secrets during build time without them being stored in the final image or its history.
**Prevention:** Never use `ARG` or environment variables for secrets in Dockerfiles. Use Docker BuildKit's secret mounts (`--mount=type=secret`) to securely handle sensitive information during the build process.
## 2024-05-30 - Override Vulnerable Dependencies
**Vulnerability:** Found 2 high severity vulnerabilities in transitive dependencies using `pnpm audit --prod`: `serialize-javascript` (RCE via RegExp.flags and Date.prototype.toISOString()) and `immutable` (Prototype Pollution).
**Learning:** Legacy projects often accumulate vulnerable dependencies via old toolchains (like Gatsby 5's indirect dependencies on older webpack plugins/compilers) that aren't easily patchable via direct dependency upgrades.
**Prevention:** Use package manager overrides (`pnpm.overrides` in `package.json`) to enforce safer versions of transitive dependencies without having to fork or refactor the top-level tools.
## 2024-05-24 - [socket.io-parser vulnerable version override]
**Vulnerability:** A "high" severity vulnerability in `socket.io-parser` (<4.2.6) which allowed an unbounded number of binary attachments. This dependency was brought in as a transitive dependency through `gatsby`.
**Learning:** `gatsby` and related packages may bring in older transitive dependencies with known CVEs. Using `pnpm.overrides` provides a simple way to force resolution to a patched version across the monorepo without needing to fork or upgrade the top-level parent packages if they are slow to update.
**Prevention:** Regularly run `pnpm audit` and utilize `pnpm.overrides` for transitive dependency vulnerabilities that cannot be resolved through direct updates, taking care to choose compatible semver bumps (usually patches or minor updates).

## 2025-02-17 - Correct Meta Tags for Security Headers
**Vulnerability:** Attempted to use `<meta http-equiv="...">` for security headers like `X-Content-Type-Options` and `X-XSS-Protection`.
**Learning:** Modern web browsers do not support setting `X-Content-Type-Options` or `X-XSS-Protection` via `<meta>` tags; these must be delivered as standard HTTP response headers to have any effect. Setting them via `<meta>` tags is non-functional security theater. Furthermore, the correct syntax for a referrer policy via a meta tag is `<meta name="referrer" content="...">`, rather than using `http-equiv="Referrer-Policy"`.
**Prevention:** Only use `<meta>` tags for security policies that explicitly support them (like `Content-Security-Policy` and `referrer`). For other security headers, ensure they are configured at the server/hosting level.

## 2025-02-17 - Prevent XSS in Dynamically Passed React Prop hrefs
**Vulnerability:** The `<ExternalLink>` component accepted an unrestrained string via its `href` prop. This allowed any parent component to dynamically pass `javascript:` URIs, opening up the risk of Cross-Site Scripting (XSS). While the current usages of `<ExternalLink>` in the codebase passed static, safe URLs, this component is designed for reuse.
**Learning:** Even internal, reusable components must sanitize their inputs to prevent misuse by other developers. React protects against XSS when rendering raw text within standard elements (e.g., `<div>{data}</div>`), but it does NOT protect against malicious payloads placed inside element attributes like `href`, `src`, or `action`. A component accepting a dynamic URL must strictly validate its schema.
**Prevention:** Implement an allowlist approach for dynamically injected URLs, ensuring the string starts with known, safe prefixes like `http://`, `https://`, or `/`. Fallback to a safe link (like `#`) if the validation fails.
