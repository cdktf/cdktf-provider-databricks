# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-databricks.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksProvider <a name="DatabricksProvider" id="@cdktf/provider-databricks.provider.DatabricksProvider"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs databricks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import provider

provider.DatabricksProvider(
  scope: Construct,
  id: str,
  account_id: str = None,
  alias: str = None,
  auth_type: str = None,
  azure_client_id: str = None,
  azure_client_secret: str = None,
  azure_environment: str = None,
  azure_login_app_id: str = None,
  azure_tenant_id: str = None,
  azure_use_msi: typing.Union[bool, IResolvable] = None,
  azure_workspace_resource_id: str = None,
  client_id: str = None,
  client_secret: str = None,
  cluster_id: str = None,
  config_file: str = None,
  databricks_cli_path: str = None,
  debug_headers: typing.Union[bool, IResolvable] = None,
  debug_truncate_bytes: typing.Union[int, float] = None,
  google_credentials: str = None,
  google_service_account: str = None,
  host: str = None,
  http_timeout_seconds: typing.Union[int, float] = None,
  metadata_service_url: str = None,
  password: str = None,
  profile: str = None,
  rate_limit: typing.Union[int, float] = None,
  retry_timeout_seconds: typing.Union[int, float] = None,
  skip_verify: typing.Union[bool, IResolvable] = None,
  token: str = None,
  username: str = None,
  warehouse_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#account_id DatabricksProvider#account_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#auth_type DatabricksProvider#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureClientId">azure_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_client_id DatabricksProvider#azure_client_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureClientSecret">azure_client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_client_secret DatabricksProvider#azure_client_secret}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureEnvironment">azure_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_environment DatabricksProvider#azure_environment}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureLoginAppId">azure_login_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_login_app_id DatabricksProvider#azure_login_app_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_tenant_id DatabricksProvider#azure_tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureUseMsi">azure_use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_use_msi DatabricksProvider#azure_use_msi}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureWorkspaceResourceId">azure_workspace_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#client_id DatabricksProvider#client_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#client_secret DatabricksProvider#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#cluster_id DatabricksProvider#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.configFile">config_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#config_file DatabricksProvider#config_file}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.databricksCliPath">databricks_cli_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#databricks_cli_path DatabricksProvider#databricks_cli_path}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.debugHeaders">debug_headers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#debug_headers DatabricksProvider#debug_headers}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.debugTruncateBytes">debug_truncate_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.googleCredentials">google_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#google_credentials DatabricksProvider#google_credentials}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.googleServiceAccount">google_service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#google_service_account DatabricksProvider#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#host DatabricksProvider#host}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.httpTimeoutSeconds">http_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#http_timeout_seconds DatabricksProvider#http_timeout_seconds}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.metadataServiceUrl">metadata_service_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#metadata_service_url DatabricksProvider#metadata_service_url}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#password DatabricksProvider#password}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.profile">profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#profile DatabricksProvider#profile}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#rate_limit DatabricksProvider#rate_limit}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.retryTimeoutSeconds">retry_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.skipVerify">skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#skip_verify DatabricksProvider#skip_verify}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#token DatabricksProvider#token}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#username DatabricksProvider#username}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#warehouse_id DatabricksProvider#warehouse_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#account_id DatabricksProvider#account_id}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#alias DatabricksProvider#alias}

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.authType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#auth_type DatabricksProvider#auth_type}.

---

##### `azure_client_id`<sup>Optional</sup> <a name="azure_client_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureClientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_client_id DatabricksProvider#azure_client_id}.

---

##### `azure_client_secret`<sup>Optional</sup> <a name="azure_client_secret" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureClientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_client_secret DatabricksProvider#azure_client_secret}.

---

##### `azure_environment`<sup>Optional</sup> <a name="azure_environment" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureEnvironment"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_environment DatabricksProvider#azure_environment}.

---

##### `azure_login_app_id`<sup>Optional</sup> <a name="azure_login_app_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureLoginAppId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_login_app_id DatabricksProvider#azure_login_app_id}.

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureTenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_tenant_id DatabricksProvider#azure_tenant_id}.

---

##### `azure_use_msi`<sup>Optional</sup> <a name="azure_use_msi" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureUseMsi"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_use_msi DatabricksProvider#azure_use_msi}.

---

##### `azure_workspace_resource_id`<sup>Optional</sup> <a name="azure_workspace_resource_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.azureWorkspaceResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#client_id DatabricksProvider#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.clientSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#client_secret DatabricksProvider#client_secret}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#cluster_id DatabricksProvider#cluster_id}.

---

##### `config_file`<sup>Optional</sup> <a name="config_file" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.configFile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#config_file DatabricksProvider#config_file}.

---

##### `databricks_cli_path`<sup>Optional</sup> <a name="databricks_cli_path" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.databricksCliPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#databricks_cli_path DatabricksProvider#databricks_cli_path}.

---

##### `debug_headers`<sup>Optional</sup> <a name="debug_headers" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.debugHeaders"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#debug_headers DatabricksProvider#debug_headers}.

---

##### `debug_truncate_bytes`<sup>Optional</sup> <a name="debug_truncate_bytes" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.debugTruncateBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}.

---

##### `google_credentials`<sup>Optional</sup> <a name="google_credentials" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.googleCredentials"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#google_credentials DatabricksProvider#google_credentials}.

---

##### `google_service_account`<sup>Optional</sup> <a name="google_service_account" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.googleServiceAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#google_service_account DatabricksProvider#google_service_account}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.host"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#host DatabricksProvider#host}.

---

##### `http_timeout_seconds`<sup>Optional</sup> <a name="http_timeout_seconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.httpTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#http_timeout_seconds DatabricksProvider#http_timeout_seconds}.

---

##### `metadata_service_url`<sup>Optional</sup> <a name="metadata_service_url" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.metadataServiceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#metadata_service_url DatabricksProvider#metadata_service_url}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#password DatabricksProvider#password}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.profile"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#profile DatabricksProvider#profile}.

---

##### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.rateLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#rate_limit DatabricksProvider#rate_limit}.

---

##### `retry_timeout_seconds`<sup>Optional</sup> <a name="retry_timeout_seconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.retryTimeoutSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}.

---

##### `skip_verify`<sup>Optional</sup> <a name="skip_verify" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.skipVerify"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#skip_verify DatabricksProvider#skip_verify}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.token"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#token DatabricksProvider#token}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.username"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#username DatabricksProvider#username}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.warehouseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#warehouse_id DatabricksProvider#warehouse_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAccountId">reset_account_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAuthType">reset_auth_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientId">reset_azure_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientSecret">reset_azure_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureEnvironment">reset_azure_environment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureLoginAppId">reset_azure_login_app_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureTenantId">reset_azure_tenant_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureUseMsi">reset_azure_use_msi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureWorkspaceResourceId">reset_azure_workspace_resource_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetClientId">reset_client_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetClientSecret">reset_client_secret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetConfigFile">reset_config_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetDatabricksCliPath">reset_databricks_cli_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugHeaders">reset_debug_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugTruncateBytes">reset_debug_truncate_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleCredentials">reset_google_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleServiceAccount">reset_google_service_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetHost">reset_host</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetHttpTimeoutSeconds">reset_http_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetMetadataServiceUrl">reset_metadata_service_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetPassword">reset_password</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetProfile">reset_profile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetRateLimit">reset_rate_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetRetryTimeoutSeconds">reset_retry_timeout_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetSkipVerify">reset_skip_verify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetToken">reset_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetUsername">reset_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetWarehouseId">reset_warehouse_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-databricks.provider.DatabricksProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-databricks.provider.DatabricksProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.provider.DatabricksProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.provider.DatabricksProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-databricks.provider.DatabricksProvider.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-databricks.provider.DatabricksProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-databricks.provider.DatabricksProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_account_id` <a name="reset_account_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAccountId"></a>

```python
def reset_account_id() -> None
```

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_auth_type` <a name="reset_auth_type" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAuthType"></a>

```python
def reset_auth_type() -> None
```

##### `reset_azure_client_id` <a name="reset_azure_client_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientId"></a>

```python
def reset_azure_client_id() -> None
```

##### `reset_azure_client_secret` <a name="reset_azure_client_secret" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientSecret"></a>

```python
def reset_azure_client_secret() -> None
```

##### `reset_azure_environment` <a name="reset_azure_environment" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureEnvironment"></a>

```python
def reset_azure_environment() -> None
```

##### `reset_azure_login_app_id` <a name="reset_azure_login_app_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureLoginAppId"></a>

```python
def reset_azure_login_app_id() -> None
```

##### `reset_azure_tenant_id` <a name="reset_azure_tenant_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureTenantId"></a>

```python
def reset_azure_tenant_id() -> None
```

##### `reset_azure_use_msi` <a name="reset_azure_use_msi" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureUseMsi"></a>

```python
def reset_azure_use_msi() -> None
```

##### `reset_azure_workspace_resource_id` <a name="reset_azure_workspace_resource_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureWorkspaceResourceId"></a>

```python
def reset_azure_workspace_resource_id() -> None
```

##### `reset_client_id` <a name="reset_client_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetClientId"></a>

```python
def reset_client_id() -> None
```

##### `reset_client_secret` <a name="reset_client_secret" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetClientSecret"></a>

```python
def reset_client_secret() -> None
```

##### `reset_cluster_id` <a name="reset_cluster_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_config_file` <a name="reset_config_file" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetConfigFile"></a>

```python
def reset_config_file() -> None
```

##### `reset_databricks_cli_path` <a name="reset_databricks_cli_path" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetDatabricksCliPath"></a>

```python
def reset_databricks_cli_path() -> None
```

##### `reset_debug_headers` <a name="reset_debug_headers" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugHeaders"></a>

```python
def reset_debug_headers() -> None
```

##### `reset_debug_truncate_bytes` <a name="reset_debug_truncate_bytes" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugTruncateBytes"></a>

```python
def reset_debug_truncate_bytes() -> None
```

##### `reset_google_credentials` <a name="reset_google_credentials" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleCredentials"></a>

```python
def reset_google_credentials() -> None
```

##### `reset_google_service_account` <a name="reset_google_service_account" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleServiceAccount"></a>

```python
def reset_google_service_account() -> None
```

##### `reset_host` <a name="reset_host" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetHost"></a>

```python
def reset_host() -> None
```

##### `reset_http_timeout_seconds` <a name="reset_http_timeout_seconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetHttpTimeoutSeconds"></a>

```python
def reset_http_timeout_seconds() -> None
```

##### `reset_metadata_service_url` <a name="reset_metadata_service_url" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetMetadataServiceUrl"></a>

```python
def reset_metadata_service_url() -> None
```

##### `reset_password` <a name="reset_password" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetPassword"></a>

```python
def reset_password() -> None
```

##### `reset_profile` <a name="reset_profile" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetProfile"></a>

```python
def reset_profile() -> None
```

##### `reset_rate_limit` <a name="reset_rate_limit" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetRateLimit"></a>

```python
def reset_rate_limit() -> None
```

##### `reset_retry_timeout_seconds` <a name="reset_retry_timeout_seconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetRetryTimeoutSeconds"></a>

```python
def reset_retry_timeout_seconds() -> None
```

##### `reset_skip_verify` <a name="reset_skip_verify" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetSkipVerify"></a>

```python
def reset_skip_verify() -> None
```

##### `reset_token` <a name="reset_token" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetToken"></a>

```python
def reset_token() -> None
```

##### `reset_username` <a name="reset_username" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetUsername"></a>

```python
def reset_username() -> None
```

##### `reset_warehouse_id` <a name="reset_warehouse_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetWarehouseId"></a>

```python
def reset_warehouse_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabricksProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-databricks.provider.DatabricksProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_databricks import provider

provider.DatabricksProvider.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.provider.DatabricksProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_databricks import provider

provider.DatabricksProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_databricks import provider

provider.DatabricksProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_databricks import provider

provider.DatabricksProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabricksProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabricksProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabricksProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabricksProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.authTypeInput">auth_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientIdInput">azure_client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecretInput">azure_client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironmentInput">azure_environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppIdInput">azure_login_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantIdInput">azure_tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsiInput">azure_use_msi_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceIdInput">azure_workspace_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecretInput">client_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.configFileInput">config_file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.databricksCliPathInput">databricks_cli_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeadersInput">debug_headers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytesInput">debug_truncate_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentialsInput">google_credentials_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccountInput">google_service_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.hostInput">host_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSecondsInput">http_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrlInput">metadata_service_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.profileInput">profile_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimitInput">rate_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSecondsInput">retry_timeout_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerifyInput">skip_verify_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.tokenInput">token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.warehouseIdInput">warehouse_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.authType">auth_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientId">azure_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecret">azure_client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironment">azure_environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppId">azure_login_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsi">azure_use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceId">azure_workspace_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.configFile">config_file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.databricksCliPath">databricks_cli_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeaders">debug_headers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytes">debug_truncate_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentials">google_credentials</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccount">google_service_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSeconds">http_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrl">metadata_service_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.profile">profile</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSeconds">retry_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerify">skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.token">token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.warehouseId">warehouse_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `auth_type_input`<sup>Optional</sup> <a name="auth_type_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.authTypeInput"></a>

```python
auth_type_input: str
```

- *Type:* str

---

##### `azure_client_id_input`<sup>Optional</sup> <a name="azure_client_id_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientIdInput"></a>

```python
azure_client_id_input: str
```

- *Type:* str

---

##### `azure_client_secret_input`<sup>Optional</sup> <a name="azure_client_secret_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecretInput"></a>

```python
azure_client_secret_input: str
```

- *Type:* str

---

##### `azure_environment_input`<sup>Optional</sup> <a name="azure_environment_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironmentInput"></a>

```python
azure_environment_input: str
```

- *Type:* str

---

##### `azure_login_app_id_input`<sup>Optional</sup> <a name="azure_login_app_id_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppIdInput"></a>

```python
azure_login_app_id_input: str
```

- *Type:* str

---

##### `azure_tenant_id_input`<sup>Optional</sup> <a name="azure_tenant_id_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantIdInput"></a>

```python
azure_tenant_id_input: str
```

- *Type:* str

---

##### `azure_use_msi_input`<sup>Optional</sup> <a name="azure_use_msi_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsiInput"></a>

```python
azure_use_msi_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `azure_workspace_resource_id_input`<sup>Optional</sup> <a name="azure_workspace_resource_id_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceIdInput"></a>

```python
azure_workspace_resource_id_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `client_secret_input`<sup>Optional</sup> <a name="client_secret_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecretInput"></a>

```python
client_secret_input: str
```

- *Type:* str

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `config_file_input`<sup>Optional</sup> <a name="config_file_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.configFileInput"></a>

```python
config_file_input: str
```

- *Type:* str

---

##### `databricks_cli_path_input`<sup>Optional</sup> <a name="databricks_cli_path_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.databricksCliPathInput"></a>

```python
databricks_cli_path_input: str
```

- *Type:* str

---

##### `debug_headers_input`<sup>Optional</sup> <a name="debug_headers_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeadersInput"></a>

```python
debug_headers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `debug_truncate_bytes_input`<sup>Optional</sup> <a name="debug_truncate_bytes_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytesInput"></a>

```python
debug_truncate_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `google_credentials_input`<sup>Optional</sup> <a name="google_credentials_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentialsInput"></a>

```python
google_credentials_input: str
```

- *Type:* str

---

##### `google_service_account_input`<sup>Optional</sup> <a name="google_service_account_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccountInput"></a>

```python
google_service_account_input: str
```

- *Type:* str

---

##### `host_input`<sup>Optional</sup> <a name="host_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.hostInput"></a>

```python
host_input: str
```

- *Type:* str

---

##### `http_timeout_seconds_input`<sup>Optional</sup> <a name="http_timeout_seconds_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSecondsInput"></a>

```python
http_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_service_url_input`<sup>Optional</sup> <a name="metadata_service_url_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrlInput"></a>

```python
metadata_service_url_input: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `profile_input`<sup>Optional</sup> <a name="profile_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.profileInput"></a>

```python
profile_input: str
```

- *Type:* str

---

##### `rate_limit_input`<sup>Optional</sup> <a name="rate_limit_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimitInput"></a>

```python
rate_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_timeout_seconds_input`<sup>Optional</sup> <a name="retry_timeout_seconds_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSecondsInput"></a>

```python
retry_timeout_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_verify_input`<sup>Optional</sup> <a name="skip_verify_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerifyInput"></a>

```python
skip_verify_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token_input`<sup>Optional</sup> <a name="token_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.tokenInput"></a>

```python
token_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `warehouse_id_input`<sup>Optional</sup> <a name="warehouse_id_input" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.warehouseIdInput"></a>

```python
warehouse_id_input: str
```

- *Type:* str

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

---

##### `azure_client_id`<sup>Optional</sup> <a name="azure_client_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientId"></a>

```python
azure_client_id: str
```

- *Type:* str

---

##### `azure_client_secret`<sup>Optional</sup> <a name="azure_client_secret" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecret"></a>

```python
azure_client_secret: str
```

- *Type:* str

---

##### `azure_environment`<sup>Optional</sup> <a name="azure_environment" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironment"></a>

```python
azure_environment: str
```

- *Type:* str

---

##### `azure_login_app_id`<sup>Optional</sup> <a name="azure_login_app_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppId"></a>

```python
azure_login_app_id: str
```

- *Type:* str

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

---

##### `azure_use_msi`<sup>Optional</sup> <a name="azure_use_msi" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsi"></a>

```python
azure_use_msi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `azure_workspace_resource_id`<sup>Optional</sup> <a name="azure_workspace_resource_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceId"></a>

```python
azure_workspace_resource_id: str
```

- *Type:* str

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `config_file`<sup>Optional</sup> <a name="config_file" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.configFile"></a>

```python
config_file: str
```

- *Type:* str

---

##### `databricks_cli_path`<sup>Optional</sup> <a name="databricks_cli_path" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.databricksCliPath"></a>

```python
databricks_cli_path: str
```

- *Type:* str

---

##### `debug_headers`<sup>Optional</sup> <a name="debug_headers" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeaders"></a>

```python
debug_headers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `debug_truncate_bytes`<sup>Optional</sup> <a name="debug_truncate_bytes" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytes"></a>

```python
debug_truncate_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `google_credentials`<sup>Optional</sup> <a name="google_credentials" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentials"></a>

```python
google_credentials: str
```

- *Type:* str

---

##### `google_service_account`<sup>Optional</sup> <a name="google_service_account" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccount"></a>

```python
google_service_account: str
```

- *Type:* str

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `http_timeout_seconds`<sup>Optional</sup> <a name="http_timeout_seconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSeconds"></a>

```python
http_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_service_url`<sup>Optional</sup> <a name="metadata_service_url" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrl"></a>

```python
metadata_service_url: str
```

- *Type:* str

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.profile"></a>

```python
profile: str
```

- *Type:* str

---

##### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_timeout_seconds`<sup>Optional</sup> <a name="retry_timeout_seconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSeconds"></a>

```python
retry_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `skip_verify`<sup>Optional</sup> <a name="skip_verify" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerify"></a>

```python
skip_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.token"></a>

```python
token: str
```

- *Type:* str

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksProviderConfig <a name="DatabricksProviderConfig" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_databricks import provider

provider.DatabricksProviderConfig(
  account_id: str = None,
  alias: str = None,
  auth_type: str = None,
  azure_client_id: str = None,
  azure_client_secret: str = None,
  azure_environment: str = None,
  azure_login_app_id: str = None,
  azure_tenant_id: str = None,
  azure_use_msi: typing.Union[bool, IResolvable] = None,
  azure_workspace_resource_id: str = None,
  client_id: str = None,
  client_secret: str = None,
  cluster_id: str = None,
  config_file: str = None,
  databricks_cli_path: str = None,
  debug_headers: typing.Union[bool, IResolvable] = None,
  debug_truncate_bytes: typing.Union[int, float] = None,
  google_credentials: str = None,
  google_service_account: str = None,
  host: str = None,
  http_timeout_seconds: typing.Union[int, float] = None,
  metadata_service_url: str = None,
  password: str = None,
  profile: str = None,
  rate_limit: typing.Union[int, float] = None,
  retry_timeout_seconds: typing.Union[int, float] = None,
  skip_verify: typing.Union[bool, IResolvable] = None,
  token: str = None,
  username: str = None,
  warehouse_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#account_id DatabricksProvider#account_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.authType">auth_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#auth_type DatabricksProvider#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientId">azure_client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_client_id DatabricksProvider#azure_client_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientSecret">azure_client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_client_secret DatabricksProvider#azure_client_secret}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureEnvironment">azure_environment</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_environment DatabricksProvider#azure_environment}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureLoginAppId">azure_login_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_login_app_id DatabricksProvider#azure_login_app_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureTenantId">azure_tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_tenant_id DatabricksProvider#azure_tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureUseMsi">azure_use_msi</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_use_msi DatabricksProvider#azure_use_msi}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureWorkspaceResourceId">azure_workspace_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#client_id DatabricksProvider#client_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientSecret">client_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#client_secret DatabricksProvider#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#cluster_id DatabricksProvider#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.configFile">config_file</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#config_file DatabricksProvider#config_file}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.databricksCliPath">databricks_cli_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#databricks_cli_path DatabricksProvider#databricks_cli_path}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugHeaders">debug_headers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#debug_headers DatabricksProvider#debug_headers}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugTruncateBytes">debug_truncate_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleCredentials">google_credentials</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#google_credentials DatabricksProvider#google_credentials}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleServiceAccount">google_service_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#google_service_account DatabricksProvider#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.host">host</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#host DatabricksProvider#host}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.httpTimeoutSeconds">http_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#http_timeout_seconds DatabricksProvider#http_timeout_seconds}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.metadataServiceUrl">metadata_service_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#metadata_service_url DatabricksProvider#metadata_service_url}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#password DatabricksProvider#password}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.profile">profile</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#profile DatabricksProvider#profile}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.rateLimit">rate_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#rate_limit DatabricksProvider#rate_limit}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.retryTimeoutSeconds">retry_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.skipVerify">skip_verify</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#skip_verify DatabricksProvider#skip_verify}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.token">token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#token DatabricksProvider#token}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.username">username</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#username DatabricksProvider#username}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.warehouseId">warehouse_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#warehouse_id DatabricksProvider#warehouse_id}. |

---

##### `account_id`<sup>Optional</sup> <a name="account_id" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#account_id DatabricksProvider#account_id}.

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#alias DatabricksProvider#alias}

---

##### `auth_type`<sup>Optional</sup> <a name="auth_type" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.authType"></a>

```python
auth_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#auth_type DatabricksProvider#auth_type}.

---

##### `azure_client_id`<sup>Optional</sup> <a name="azure_client_id" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientId"></a>

```python
azure_client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_client_id DatabricksProvider#azure_client_id}.

---

##### `azure_client_secret`<sup>Optional</sup> <a name="azure_client_secret" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientSecret"></a>

```python
azure_client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_client_secret DatabricksProvider#azure_client_secret}.

---

##### `azure_environment`<sup>Optional</sup> <a name="azure_environment" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureEnvironment"></a>

```python
azure_environment: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_environment DatabricksProvider#azure_environment}.

---

##### `azure_login_app_id`<sup>Optional</sup> <a name="azure_login_app_id" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureLoginAppId"></a>

```python
azure_login_app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_login_app_id DatabricksProvider#azure_login_app_id}.

---

##### `azure_tenant_id`<sup>Optional</sup> <a name="azure_tenant_id" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureTenantId"></a>

```python
azure_tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_tenant_id DatabricksProvider#azure_tenant_id}.

---

##### `azure_use_msi`<sup>Optional</sup> <a name="azure_use_msi" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureUseMsi"></a>

```python
azure_use_msi: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_use_msi DatabricksProvider#azure_use_msi}.

---

##### `azure_workspace_resource_id`<sup>Optional</sup> <a name="azure_workspace_resource_id" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureWorkspaceResourceId"></a>

```python
azure_workspace_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}.

---

##### `client_id`<sup>Optional</sup> <a name="client_id" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#client_id DatabricksProvider#client_id}.

---

##### `client_secret`<sup>Optional</sup> <a name="client_secret" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#client_secret DatabricksProvider#client_secret}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#cluster_id DatabricksProvider#cluster_id}.

---

##### `config_file`<sup>Optional</sup> <a name="config_file" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.configFile"></a>

```python
config_file: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#config_file DatabricksProvider#config_file}.

---

##### `databricks_cli_path`<sup>Optional</sup> <a name="databricks_cli_path" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.databricksCliPath"></a>

```python
databricks_cli_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#databricks_cli_path DatabricksProvider#databricks_cli_path}.

---

##### `debug_headers`<sup>Optional</sup> <a name="debug_headers" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugHeaders"></a>

```python
debug_headers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#debug_headers DatabricksProvider#debug_headers}.

---

##### `debug_truncate_bytes`<sup>Optional</sup> <a name="debug_truncate_bytes" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugTruncateBytes"></a>

```python
debug_truncate_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}.

---

##### `google_credentials`<sup>Optional</sup> <a name="google_credentials" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleCredentials"></a>

```python
google_credentials: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#google_credentials DatabricksProvider#google_credentials}.

---

##### `google_service_account`<sup>Optional</sup> <a name="google_service_account" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleServiceAccount"></a>

```python
google_service_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#google_service_account DatabricksProvider#google_service_account}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.host"></a>

```python
host: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#host DatabricksProvider#host}.

---

##### `http_timeout_seconds`<sup>Optional</sup> <a name="http_timeout_seconds" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.httpTimeoutSeconds"></a>

```python
http_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#http_timeout_seconds DatabricksProvider#http_timeout_seconds}.

---

##### `metadata_service_url`<sup>Optional</sup> <a name="metadata_service_url" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.metadataServiceUrl"></a>

```python
metadata_service_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#metadata_service_url DatabricksProvider#metadata_service_url}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#password DatabricksProvider#password}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.profile"></a>

```python
profile: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#profile DatabricksProvider#profile}.

---

##### `rate_limit`<sup>Optional</sup> <a name="rate_limit" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.rateLimit"></a>

```python
rate_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#rate_limit DatabricksProvider#rate_limit}.

---

##### `retry_timeout_seconds`<sup>Optional</sup> <a name="retry_timeout_seconds" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.retryTimeoutSeconds"></a>

```python
retry_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}.

---

##### `skip_verify`<sup>Optional</sup> <a name="skip_verify" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.skipVerify"></a>

```python
skip_verify: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#skip_verify DatabricksProvider#skip_verify}.

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.token"></a>

```python
token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#token DatabricksProvider#token}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.username"></a>

```python
username: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#username DatabricksProvider#username}.

---

##### `warehouse_id`<sup>Optional</sup> <a name="warehouse_id" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.warehouseId"></a>

```python
warehouse_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.37.0/docs#warehouse_id DatabricksProvider#warehouse_id}.

---



