// https://www.terraform.io/docs/providers/databricks
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabricksProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#account_id DatabricksProvider#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#auth_type DatabricksProvider#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_client_id DatabricksProvider#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_client_secret DatabricksProvider#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_environment DatabricksProvider#azure_environment}
  */
  readonly azureEnvironment?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_login_app_id DatabricksProvider#azure_login_app_id}
  */
  readonly azureLoginAppId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_tenant_id DatabricksProvider#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_use_msi DatabricksProvider#azure_use_msi}
  */
  readonly azureUseMsi?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}
  */
  readonly azureWorkspaceResourceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#bricks_cli_path DatabricksProvider#bricks_cli_path}
  */
  readonly bricksCliPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#client_id DatabricksProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#client_secret DatabricksProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#config_file DatabricksProvider#config_file}
  */
  readonly configFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#debug_headers DatabricksProvider#debug_headers}
  */
  readonly debugHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}
  */
  readonly debugTruncateBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#google_credentials DatabricksProvider#google_credentials}
  */
  readonly googleCredentials?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#google_service_account DatabricksProvider#google_service_account}
  */
  readonly googleServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#host DatabricksProvider#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#http_timeout_seconds DatabricksProvider#http_timeout_seconds}
  */
  readonly httpTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#metadata_service_url DatabricksProvider#metadata_service_url}
  */
  readonly metadataServiceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#password DatabricksProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#profile DatabricksProvider#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#rate_limit DatabricksProvider#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}
  */
  readonly retryTimeoutSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#skip_verify DatabricksProvider#skip_verify}
  */
  readonly skipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#token DatabricksProvider#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#username DatabricksProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks#alias DatabricksProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/databricks databricks}
*/
export class DatabricksProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "databricks";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/databricks databricks} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabricksProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DatabricksProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'databricks',
      terraformGeneratorMetadata: {
        providerName: 'databricks',
        providerVersion: '1.14.3',
        providerVersionConstraint: '~> 1.0'
      },
      terraformProviderSource: 'databricks/databricks'
    });
    this._accountId = config.accountId;
    this._authType = config.authType;
    this._azureClientId = config.azureClientId;
    this._azureClientSecret = config.azureClientSecret;
    this._azureEnvironment = config.azureEnvironment;
    this._azureLoginAppId = config.azureLoginAppId;
    this._azureTenantId = config.azureTenantId;
    this._azureUseMsi = config.azureUseMsi;
    this._azureWorkspaceResourceId = config.azureWorkspaceResourceId;
    this._bricksCliPath = config.bricksCliPath;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._configFile = config.configFile;
    this._debugHeaders = config.debugHeaders;
    this._debugTruncateBytes = config.debugTruncateBytes;
    this._googleCredentials = config.googleCredentials;
    this._googleServiceAccount = config.googleServiceAccount;
    this._host = config.host;
    this._httpTimeoutSeconds = config.httpTimeoutSeconds;
    this._metadataServiceUrl = config.metadataServiceUrl;
    this._password = config.password;
    this._profile = config.profile;
    this._rateLimit = config.rateLimit;
    this._retryTimeoutSeconds = config.retryTimeoutSeconds;
    this._skipVerify = config.skipVerify;
    this._token = config.token;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this._accountId;
  }
  public set accountId(value: string | undefined) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this._authType;
  }
  public set authType(value: string | undefined) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // azure_client_id - computed: false, optional: true, required: false
  private _azureClientId?: string; 
  public get azureClientId() {
    return this._azureClientId;
  }
  public set azureClientId(value: string | undefined) {
    this._azureClientId = value;
  }
  public resetAzureClientId() {
    this._azureClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientIdInput() {
    return this._azureClientId;
  }

  // azure_client_secret - computed: false, optional: true, required: false
  private _azureClientSecret?: string; 
  public get azureClientSecret() {
    return this._azureClientSecret;
  }
  public set azureClientSecret(value: string | undefined) {
    this._azureClientSecret = value;
  }
  public resetAzureClientSecret() {
    this._azureClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret;
  }

  // azure_environment - computed: false, optional: true, required: false
  private _azureEnvironment?: string; 
  public get azureEnvironment() {
    return this._azureEnvironment;
  }
  public set azureEnvironment(value: string | undefined) {
    this._azureEnvironment = value;
  }
  public resetAzureEnvironment() {
    this._azureEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEnvironmentInput() {
    return this._azureEnvironment;
  }

  // azure_login_app_id - computed: false, optional: true, required: false
  private _azureLoginAppId?: string; 
  public get azureLoginAppId() {
    return this._azureLoginAppId;
  }
  public set azureLoginAppId(value: string | undefined) {
    this._azureLoginAppId = value;
  }
  public resetAzureLoginAppId() {
    this._azureLoginAppId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureLoginAppIdInput() {
    return this._azureLoginAppId;
  }

  // azure_tenant_id - computed: false, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this._azureTenantId;
  }
  public set azureTenantId(value: string | undefined) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // azure_use_msi - computed: false, optional: true, required: false
  private _azureUseMsi?: boolean | cdktf.IResolvable; 
  public get azureUseMsi() {
    return this._azureUseMsi;
  }
  public set azureUseMsi(value: boolean | cdktf.IResolvable | undefined) {
    this._azureUseMsi = value;
  }
  public resetAzureUseMsi() {
    this._azureUseMsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureUseMsiInput() {
    return this._azureUseMsi;
  }

  // azure_workspace_resource_id - computed: false, optional: true, required: false
  private _azureWorkspaceResourceId?: string; 
  public get azureWorkspaceResourceId() {
    return this._azureWorkspaceResourceId;
  }
  public set azureWorkspaceResourceId(value: string | undefined) {
    this._azureWorkspaceResourceId = value;
  }
  public resetAzureWorkspaceResourceId() {
    this._azureWorkspaceResourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureWorkspaceResourceIdInput() {
    return this._azureWorkspaceResourceId;
  }

  // bricks_cli_path - computed: false, optional: true, required: false
  private _bricksCliPath?: string; 
  public get bricksCliPath() {
    return this._bricksCliPath;
  }
  public set bricksCliPath(value: string | undefined) {
    this._bricksCliPath = value;
  }
  public resetBricksCliPath() {
    this._bricksCliPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bricksCliPathInput() {
    return this._bricksCliPath;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // config_file - computed: false, optional: true, required: false
  private _configFile?: string; 
  public get configFile() {
    return this._configFile;
  }
  public set configFile(value: string | undefined) {
    this._configFile = value;
  }
  public resetConfigFile() {
    this._configFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configFileInput() {
    return this._configFile;
  }

  // debug_headers - computed: false, optional: true, required: false
  private _debugHeaders?: boolean | cdktf.IResolvable; 
  public get debugHeaders() {
    return this._debugHeaders;
  }
  public set debugHeaders(value: boolean | cdktf.IResolvable | undefined) {
    this._debugHeaders = value;
  }
  public resetDebugHeaders() {
    this._debugHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugHeadersInput() {
    return this._debugHeaders;
  }

  // debug_truncate_bytes - computed: false, optional: true, required: false
  private _debugTruncateBytes?: number; 
  public get debugTruncateBytes() {
    return this._debugTruncateBytes;
  }
  public set debugTruncateBytes(value: number | undefined) {
    this._debugTruncateBytes = value;
  }
  public resetDebugTruncateBytes() {
    this._debugTruncateBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugTruncateBytesInput() {
    return this._debugTruncateBytes;
  }

  // google_credentials - computed: false, optional: true, required: false
  private _googleCredentials?: string; 
  public get googleCredentials() {
    return this._googleCredentials;
  }
  public set googleCredentials(value: string | undefined) {
    this._googleCredentials = value;
  }
  public resetGoogleCredentials() {
    this._googleCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCredentialsInput() {
    return this._googleCredentials;
  }

  // google_service_account - computed: false, optional: true, required: false
  private _googleServiceAccount?: string; 
  public get googleServiceAccount() {
    return this._googleServiceAccount;
  }
  public set googleServiceAccount(value: string | undefined) {
    this._googleServiceAccount = value;
  }
  public resetGoogleServiceAccount() {
    this._googleServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountInput() {
    return this._googleServiceAccount;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // http_timeout_seconds - computed: false, optional: true, required: false
  private _httpTimeoutSeconds?: number; 
  public get httpTimeoutSeconds() {
    return this._httpTimeoutSeconds;
  }
  public set httpTimeoutSeconds(value: number | undefined) {
    this._httpTimeoutSeconds = value;
  }
  public resetHttpTimeoutSeconds() {
    this._httpTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTimeoutSecondsInput() {
    return this._httpTimeoutSeconds;
  }

  // metadata_service_url - computed: false, optional: true, required: false
  private _metadataServiceUrl?: string; 
  public get metadataServiceUrl() {
    return this._metadataServiceUrl;
  }
  public set metadataServiceUrl(value: string | undefined) {
    this._metadataServiceUrl = value;
  }
  public resetMetadataServiceUrl() {
    this._metadataServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataServiceUrlInput() {
    return this._metadataServiceUrl;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this._profile;
  }
  public set profile(value: string | undefined) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this._rateLimit;
  }
  public set rateLimit(value: number | undefined) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // retry_timeout_seconds - computed: false, optional: true, required: false
  private _retryTimeoutSeconds?: number; 
  public get retryTimeoutSeconds() {
    return this._retryTimeoutSeconds;
  }
  public set retryTimeoutSeconds(value: number | undefined) {
    this._retryTimeoutSeconds = value;
  }
  public resetRetryTimeoutSeconds() {
    this._retryTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimeoutSecondsInput() {
    return this._retryTimeoutSeconds;
  }

  // skip_verify - computed: false, optional: true, required: false
  private _skipVerify?: boolean | cdktf.IResolvable; 
  public get skipVerify() {
    return this._skipVerify;
  }
  public set skipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._skipVerify = value;
  }
  public resetSkipVerify() {
    this._skipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipVerifyInput() {
    return this._skipVerify;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      auth_type: cdktf.stringToTerraform(this._authType),
      azure_client_id: cdktf.stringToTerraform(this._azureClientId),
      azure_client_secret: cdktf.stringToTerraform(this._azureClientSecret),
      azure_environment: cdktf.stringToTerraform(this._azureEnvironment),
      azure_login_app_id: cdktf.stringToTerraform(this._azureLoginAppId),
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      azure_use_msi: cdktf.booleanToTerraform(this._azureUseMsi),
      azure_workspace_resource_id: cdktf.stringToTerraform(this._azureWorkspaceResourceId),
      bricks_cli_path: cdktf.stringToTerraform(this._bricksCliPath),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      config_file: cdktf.stringToTerraform(this._configFile),
      debug_headers: cdktf.booleanToTerraform(this._debugHeaders),
      debug_truncate_bytes: cdktf.numberToTerraform(this._debugTruncateBytes),
      google_credentials: cdktf.stringToTerraform(this._googleCredentials),
      google_service_account: cdktf.stringToTerraform(this._googleServiceAccount),
      host: cdktf.stringToTerraform(this._host),
      http_timeout_seconds: cdktf.numberToTerraform(this._httpTimeoutSeconds),
      metadata_service_url: cdktf.stringToTerraform(this._metadataServiceUrl),
      password: cdktf.stringToTerraform(this._password),
      profile: cdktf.stringToTerraform(this._profile),
      rate_limit: cdktf.numberToTerraform(this._rateLimit),
      retry_timeout_seconds: cdktf.numberToTerraform(this._retryTimeoutSeconds),
      skip_verify: cdktf.booleanToTerraform(this._skipVerify),
      token: cdktf.stringToTerraform(this._token),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
