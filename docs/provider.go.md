# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-databricks.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksProvider <a name="DatabricksProvider" id="@cdktf/provider-databricks.provider.DatabricksProvider"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs databricks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/provider"

provider.NewDatabricksProvider(scope Construct, id *string, config DatabricksProviderConfig) DatabricksProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig">DatabricksProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig">DatabricksProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAuthType">ResetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientId">ResetAzureClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientSecret">ResetAzureClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureEnvironment">ResetAzureEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureLoginAppId">ResetAzureLoginAppId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureTenantId">ResetAzureTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureUseMsi">ResetAzureUseMsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureWorkspaceResourceId">ResetAzureWorkspaceResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetConfigFile">ResetConfigFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetDatabricksCliPath">ResetDatabricksCliPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugHeaders">ResetDebugHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugTruncateBytes">ResetDebugTruncateBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleCredentials">ResetGoogleCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleServiceAccount">ResetGoogleServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetHttpTimeoutSeconds">ResetHttpTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetMetadataServiceUrl">ResetMetadataServiceUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetRateLimit">ResetRateLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetRetryTimeoutSeconds">ResetRetryTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetSkipVerify">ResetSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.provider.DatabricksProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.provider.DatabricksProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.provider.DatabricksProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.provider.DatabricksProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.provider.DatabricksProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.provider.DatabricksProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.provider.DatabricksProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.provider.DatabricksProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.provider.DatabricksProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAuthType"></a>

```go
func ResetAuthType()
```

##### `ResetAzureClientId` <a name="ResetAzureClientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientId"></a>

```go
func ResetAzureClientId()
```

##### `ResetAzureClientSecret` <a name="ResetAzureClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientSecret"></a>

```go
func ResetAzureClientSecret()
```

##### `ResetAzureEnvironment` <a name="ResetAzureEnvironment" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureEnvironment"></a>

```go
func ResetAzureEnvironment()
```

##### `ResetAzureLoginAppId` <a name="ResetAzureLoginAppId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureLoginAppId"></a>

```go
func ResetAzureLoginAppId()
```

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureTenantId"></a>

```go
func ResetAzureTenantId()
```

##### `ResetAzureUseMsi` <a name="ResetAzureUseMsi" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureUseMsi"></a>

```go
func ResetAzureUseMsi()
```

##### `ResetAzureWorkspaceResourceId` <a name="ResetAzureWorkspaceResourceId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureWorkspaceResourceId"></a>

```go
func ResetAzureWorkspaceResourceId()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetConfigFile` <a name="ResetConfigFile" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetConfigFile"></a>

```go
func ResetConfigFile()
```

##### `ResetDatabricksCliPath` <a name="ResetDatabricksCliPath" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetDatabricksCliPath"></a>

```go
func ResetDatabricksCliPath()
```

##### `ResetDebugHeaders` <a name="ResetDebugHeaders" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugHeaders"></a>

```go
func ResetDebugHeaders()
```

##### `ResetDebugTruncateBytes` <a name="ResetDebugTruncateBytes" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugTruncateBytes"></a>

```go
func ResetDebugTruncateBytes()
```

##### `ResetGoogleCredentials` <a name="ResetGoogleCredentials" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleCredentials"></a>

```go
func ResetGoogleCredentials()
```

##### `ResetGoogleServiceAccount` <a name="ResetGoogleServiceAccount" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleServiceAccount"></a>

```go
func ResetGoogleServiceAccount()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetHost"></a>

```go
func ResetHost()
```

##### `ResetHttpTimeoutSeconds` <a name="ResetHttpTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetHttpTimeoutSeconds"></a>

```go
func ResetHttpTimeoutSeconds()
```

##### `ResetMetadataServiceUrl` <a name="ResetMetadataServiceUrl" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetMetadataServiceUrl"></a>

```go
func ResetMetadataServiceUrl()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetProfile"></a>

```go
func ResetProfile()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetRateLimit"></a>

```go
func ResetRateLimit()
```

##### `ResetRetryTimeoutSeconds` <a name="ResetRetryTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetRetryTimeoutSeconds"></a>

```go
func ResetRetryTimeoutSeconds()
```

##### `ResetSkipVerify` <a name="ResetSkipVerify" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetSkipVerify"></a>

```go
func ResetSkipVerify()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetToken"></a>

```go
func ResetToken()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetWarehouseId"></a>

```go
func ResetWarehouseId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabricksProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.provider.DatabricksProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/provider"

provider.DatabricksProvider_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/provider"

provider.DatabricksProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/provider"

provider.DatabricksProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/provider"

provider.DatabricksProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DatabricksProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatabricksProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatabricksProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DatabricksProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.authTypeInput">AuthTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientIdInput">AzureClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecretInput">AzureClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironmentInput">AzureEnvironmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppIdInput">AzureLoginAppIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsiInput">AzureUseMsiInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceIdInput">AzureWorkspaceResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.configFileInput">ConfigFileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.databricksCliPathInput">DatabricksCliPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeadersInput">DebugHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytesInput">DebugTruncateBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentialsInput">GoogleCredentialsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccountInput">GoogleServiceAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSecondsInput">HttpTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrlInput">MetadataServiceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimitInput">RateLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSecondsInput">RetryTimeoutSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerifyInput">SkipVerifyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.authType">AuthType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientId">AzureClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecret">AzureClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironment">AzureEnvironment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppId">AzureLoginAppId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsi">AzureUseMsi</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceId">AzureWorkspaceResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.configFile">ConfigFile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.databricksCliPath">DatabricksCliPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeaders">DebugHeaders</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytes">DebugTruncateBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentials">GoogleCredentials</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSeconds">HttpTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrl">MetadataServiceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimit">RateLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSeconds">RetryTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerify">SkipVerify</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.authTypeInput"></a>

```go
func AuthTypeInput() *string
```

- *Type:* *string

---

##### `AzureClientIdInput`<sup>Optional</sup> <a name="AzureClientIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientIdInput"></a>

```go
func AzureClientIdInput() *string
```

- *Type:* *string

---

##### `AzureClientSecretInput`<sup>Optional</sup> <a name="AzureClientSecretInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecretInput"></a>

```go
func AzureClientSecretInput() *string
```

- *Type:* *string

---

##### `AzureEnvironmentInput`<sup>Optional</sup> <a name="AzureEnvironmentInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironmentInput"></a>

```go
func AzureEnvironmentInput() *string
```

- *Type:* *string

---

##### `AzureLoginAppIdInput`<sup>Optional</sup> <a name="AzureLoginAppIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppIdInput"></a>

```go
func AzureLoginAppIdInput() *string
```

- *Type:* *string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantIdInput"></a>

```go
func AzureTenantIdInput() *string
```

- *Type:* *string

---

##### `AzureUseMsiInput`<sup>Optional</sup> <a name="AzureUseMsiInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsiInput"></a>

```go
func AzureUseMsiInput() interface{}
```

- *Type:* interface{}

---

##### `AzureWorkspaceResourceIdInput`<sup>Optional</sup> <a name="AzureWorkspaceResourceIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceIdInput"></a>

```go
func AzureWorkspaceResourceIdInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ConfigFileInput`<sup>Optional</sup> <a name="ConfigFileInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.configFileInput"></a>

```go
func ConfigFileInput() *string
```

- *Type:* *string

---

##### `DatabricksCliPathInput`<sup>Optional</sup> <a name="DatabricksCliPathInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.databricksCliPathInput"></a>

```go
func DatabricksCliPathInput() *string
```

- *Type:* *string

---

##### `DebugHeadersInput`<sup>Optional</sup> <a name="DebugHeadersInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeadersInput"></a>

```go
func DebugHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `DebugTruncateBytesInput`<sup>Optional</sup> <a name="DebugTruncateBytesInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytesInput"></a>

```go
func DebugTruncateBytesInput() *f64
```

- *Type:* *f64

---

##### `GoogleCredentialsInput`<sup>Optional</sup> <a name="GoogleCredentialsInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentialsInput"></a>

```go
func GoogleCredentialsInput() *string
```

- *Type:* *string

---

##### `GoogleServiceAccountInput`<sup>Optional</sup> <a name="GoogleServiceAccountInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccountInput"></a>

```go
func GoogleServiceAccountInput() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `HttpTimeoutSecondsInput`<sup>Optional</sup> <a name="HttpTimeoutSecondsInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSecondsInput"></a>

```go
func HttpTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `MetadataServiceUrlInput`<sup>Optional</sup> <a name="MetadataServiceUrlInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrlInput"></a>

```go
func MetadataServiceUrlInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimitInput"></a>

```go
func RateLimitInput() *f64
```

- *Type:* *f64

---

##### `RetryTimeoutSecondsInput`<sup>Optional</sup> <a name="RetryTimeoutSecondsInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSecondsInput"></a>

```go
func RetryTimeoutSecondsInput() *f64
```

- *Type:* *f64

---

##### `SkipVerifyInput`<sup>Optional</sup> <a name="SkipVerifyInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerifyInput"></a>

```go
func SkipVerifyInput() interface{}
```

- *Type:* interface{}

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.warehouseIdInput"></a>

```go
func WarehouseIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.authType"></a>

```go
func AuthType() *string
```

- *Type:* *string

---

##### `AzureClientId`<sup>Optional</sup> <a name="AzureClientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientId"></a>

```go
func AzureClientId() *string
```

- *Type:* *string

---

##### `AzureClientSecret`<sup>Optional</sup> <a name="AzureClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecret"></a>

```go
func AzureClientSecret() *string
```

- *Type:* *string

---

##### `AzureEnvironment`<sup>Optional</sup> <a name="AzureEnvironment" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironment"></a>

```go
func AzureEnvironment() *string
```

- *Type:* *string

---

##### `AzureLoginAppId`<sup>Optional</sup> <a name="AzureLoginAppId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppId"></a>

```go
func AzureLoginAppId() *string
```

- *Type:* *string

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantId"></a>

```go
func AzureTenantId() *string
```

- *Type:* *string

---

##### `AzureUseMsi`<sup>Optional</sup> <a name="AzureUseMsi" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsi"></a>

```go
func AzureUseMsi() interface{}
```

- *Type:* interface{}

---

##### `AzureWorkspaceResourceId`<sup>Optional</sup> <a name="AzureWorkspaceResourceId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceId"></a>

```go
func AzureWorkspaceResourceId() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ConfigFile`<sup>Optional</sup> <a name="ConfigFile" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.configFile"></a>

```go
func ConfigFile() *string
```

- *Type:* *string

---

##### `DatabricksCliPath`<sup>Optional</sup> <a name="DatabricksCliPath" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.databricksCliPath"></a>

```go
func DatabricksCliPath() *string
```

- *Type:* *string

---

##### `DebugHeaders`<sup>Optional</sup> <a name="DebugHeaders" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeaders"></a>

```go
func DebugHeaders() interface{}
```

- *Type:* interface{}

---

##### `DebugTruncateBytes`<sup>Optional</sup> <a name="DebugTruncateBytes" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytes"></a>

```go
func DebugTruncateBytes() *f64
```

- *Type:* *f64

---

##### `GoogleCredentials`<sup>Optional</sup> <a name="GoogleCredentials" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentials"></a>

```go
func GoogleCredentials() *string
```

- *Type:* *string

---

##### `GoogleServiceAccount`<sup>Optional</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccount"></a>

```go
func GoogleServiceAccount() *string
```

- *Type:* *string

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `HttpTimeoutSeconds`<sup>Optional</sup> <a name="HttpTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSeconds"></a>

```go
func HttpTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `MetadataServiceUrl`<sup>Optional</sup> <a name="MetadataServiceUrl" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrl"></a>

```go
func MetadataServiceUrl() *string
```

- *Type:* *string

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimit"></a>

```go
func RateLimit() *f64
```

- *Type:* *f64

---

##### `RetryTimeoutSeconds`<sup>Optional</sup> <a name="RetryTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSeconds"></a>

```go
func RetryTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `SkipVerify`<sup>Optional</sup> <a name="SkipVerify" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerify"></a>

```go
func SkipVerify() interface{}
```

- *Type:* interface{}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.warehouseId"></a>

```go
func WarehouseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksProviderConfig <a name="DatabricksProviderConfig" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/provider"

&provider.DatabricksProviderConfig {
	AccountId: *string,
	Alias: *string,
	AuthType: *string,
	AzureClientId: *string,
	AzureClientSecret: *string,
	AzureEnvironment: *string,
	AzureLoginAppId: *string,
	AzureTenantId: *string,
	AzureUseMsi: interface{},
	AzureWorkspaceResourceId: *string,
	ClientId: *string,
	ClientSecret: *string,
	ClusterId: *string,
	ConfigFile: *string,
	DatabricksCliPath: *string,
	DebugHeaders: interface{},
	DebugTruncateBytes: *f64,
	GoogleCredentials: *string,
	GoogleServiceAccount: *string,
	Host: *string,
	HttpTimeoutSeconds: *f64,
	MetadataServiceUrl: *string,
	Password: *string,
	Profile: *string,
	RateLimit: *f64,
	RetryTimeoutSeconds: *f64,
	SkipVerify: interface{},
	Token: *string,
	Username: *string,
	WarehouseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#account_id DatabricksProvider#account_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.authType">AuthType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#auth_type DatabricksProvider#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientId">AzureClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_client_id DatabricksProvider#azure_client_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientSecret">AzureClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_client_secret DatabricksProvider#azure_client_secret}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureEnvironment">AzureEnvironment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_environment DatabricksProvider#azure_environment}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureLoginAppId">AzureLoginAppId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_login_app_id DatabricksProvider#azure_login_app_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureTenantId">AzureTenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_tenant_id DatabricksProvider#azure_tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureUseMsi">AzureUseMsi</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_use_msi DatabricksProvider#azure_use_msi}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureWorkspaceResourceId">AzureWorkspaceResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#client_id DatabricksProvider#client_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#client_secret DatabricksProvider#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#cluster_id DatabricksProvider#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.configFile">ConfigFile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#config_file DatabricksProvider#config_file}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.databricksCliPath">DatabricksCliPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#databricks_cli_path DatabricksProvider#databricks_cli_path}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugHeaders">DebugHeaders</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#debug_headers DatabricksProvider#debug_headers}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugTruncateBytes">DebugTruncateBytes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleCredentials">GoogleCredentials</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#google_credentials DatabricksProvider#google_credentials}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#google_service_account DatabricksProvider#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.host">Host</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#host DatabricksProvider#host}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.httpTimeoutSeconds">HttpTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#http_timeout_seconds DatabricksProvider#http_timeout_seconds}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.metadataServiceUrl">MetadataServiceUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#metadata_service_url DatabricksProvider#metadata_service_url}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#password DatabricksProvider#password}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.profile">Profile</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#profile DatabricksProvider#profile}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.rateLimit">RateLimit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#rate_limit DatabricksProvider#rate_limit}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.retryTimeoutSeconds">RetryTimeoutSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.skipVerify">SkipVerify</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#skip_verify DatabricksProvider#skip_verify}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.token">Token</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#token DatabricksProvider#token}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#username DatabricksProvider#username}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.warehouseId">WarehouseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#warehouse_id DatabricksProvider#warehouse_id}. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#account_id DatabricksProvider#account_id}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#alias DatabricksProvider#alias}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.authType"></a>

```go
AuthType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#auth_type DatabricksProvider#auth_type}.

---

##### `AzureClientId`<sup>Optional</sup> <a name="AzureClientId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientId"></a>

```go
AzureClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_client_id DatabricksProvider#azure_client_id}.

---

##### `AzureClientSecret`<sup>Optional</sup> <a name="AzureClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientSecret"></a>

```go
AzureClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_client_secret DatabricksProvider#azure_client_secret}.

---

##### `AzureEnvironment`<sup>Optional</sup> <a name="AzureEnvironment" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureEnvironment"></a>

```go
AzureEnvironment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_environment DatabricksProvider#azure_environment}.

---

##### `AzureLoginAppId`<sup>Optional</sup> <a name="AzureLoginAppId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureLoginAppId"></a>

```go
AzureLoginAppId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_login_app_id DatabricksProvider#azure_login_app_id}.

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureTenantId"></a>

```go
AzureTenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_tenant_id DatabricksProvider#azure_tenant_id}.

---

##### `AzureUseMsi`<sup>Optional</sup> <a name="AzureUseMsi" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureUseMsi"></a>

```go
AzureUseMsi interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_use_msi DatabricksProvider#azure_use_msi}.

---

##### `AzureWorkspaceResourceId`<sup>Optional</sup> <a name="AzureWorkspaceResourceId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureWorkspaceResourceId"></a>

```go
AzureWorkspaceResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#client_id DatabricksProvider#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#client_secret DatabricksProvider#client_secret}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#cluster_id DatabricksProvider#cluster_id}.

---

##### `ConfigFile`<sup>Optional</sup> <a name="ConfigFile" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.configFile"></a>

```go
ConfigFile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#config_file DatabricksProvider#config_file}.

---

##### `DatabricksCliPath`<sup>Optional</sup> <a name="DatabricksCliPath" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.databricksCliPath"></a>

```go
DatabricksCliPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#databricks_cli_path DatabricksProvider#databricks_cli_path}.

---

##### `DebugHeaders`<sup>Optional</sup> <a name="DebugHeaders" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugHeaders"></a>

```go
DebugHeaders interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#debug_headers DatabricksProvider#debug_headers}.

---

##### `DebugTruncateBytes`<sup>Optional</sup> <a name="DebugTruncateBytes" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugTruncateBytes"></a>

```go
DebugTruncateBytes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}.

---

##### `GoogleCredentials`<sup>Optional</sup> <a name="GoogleCredentials" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleCredentials"></a>

```go
GoogleCredentials *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#google_credentials DatabricksProvider#google_credentials}.

---

##### `GoogleServiceAccount`<sup>Optional</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleServiceAccount"></a>

```go
GoogleServiceAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#google_service_account DatabricksProvider#google_service_account}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#host DatabricksProvider#host}.

---

##### `HttpTimeoutSeconds`<sup>Optional</sup> <a name="HttpTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.httpTimeoutSeconds"></a>

```go
HttpTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#http_timeout_seconds DatabricksProvider#http_timeout_seconds}.

---

##### `MetadataServiceUrl`<sup>Optional</sup> <a name="MetadataServiceUrl" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.metadataServiceUrl"></a>

```go
MetadataServiceUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#metadata_service_url DatabricksProvider#metadata_service_url}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#password DatabricksProvider#password}.

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#profile DatabricksProvider#profile}.

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.rateLimit"></a>

```go
RateLimit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#rate_limit DatabricksProvider#rate_limit}.

---

##### `RetryTimeoutSeconds`<sup>Optional</sup> <a name="RetryTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.retryTimeoutSeconds"></a>

```go
RetryTimeoutSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}.

---

##### `SkipVerify`<sup>Optional</sup> <a name="SkipVerify" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.skipVerify"></a>

```go
SkipVerify interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#skip_verify DatabricksProvider#skip_verify}.

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#token DatabricksProvider#token}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#username DatabricksProvider#username}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.warehouseId"></a>

```go
WarehouseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs#warehouse_id DatabricksProvider#warehouse_id}.

---



