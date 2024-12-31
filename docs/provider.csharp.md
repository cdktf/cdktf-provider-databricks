# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-databricks.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabricksProvider <a name="DatabricksProvider" id="@cdktf/provider-databricks.provider.DatabricksProvider"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs databricks}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabricksProvider(Construct Scope, string Id, DatabricksProviderConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig">DatabricksProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.provider.DatabricksProvider.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetActionsIdTokenRequestToken">ResetActionsIdTokenRequestToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetActionsIdTokenRequestUrl">ResetActionsIdTokenRequestUrl</a></code> | *No description.* |
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
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetServerlessComputeId">ResetServerlessComputeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetSkipVerify">ResetSkipVerify</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.provider.DatabricksProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.provider.DatabricksProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.provider.DatabricksProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.provider.DatabricksProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.provider.DatabricksProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.provider.DatabricksProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.provider.DatabricksProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.provider.DatabricksProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.provider.DatabricksProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetActionsIdTokenRequestToken` <a name="ResetActionsIdTokenRequestToken" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetActionsIdTokenRequestToken"></a>

```csharp
private void ResetActionsIdTokenRequestToken()
```

##### `ResetActionsIdTokenRequestUrl` <a name="ResetActionsIdTokenRequestUrl" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetActionsIdTokenRequestUrl"></a>

```csharp
private void ResetActionsIdTokenRequestUrl()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetAuthType` <a name="ResetAuthType" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAuthType"></a>

```csharp
private void ResetAuthType()
```

##### `ResetAzureClientId` <a name="ResetAzureClientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientId"></a>

```csharp
private void ResetAzureClientId()
```

##### `ResetAzureClientSecret` <a name="ResetAzureClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureClientSecret"></a>

```csharp
private void ResetAzureClientSecret()
```

##### `ResetAzureEnvironment` <a name="ResetAzureEnvironment" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureEnvironment"></a>

```csharp
private void ResetAzureEnvironment()
```

##### `ResetAzureLoginAppId` <a name="ResetAzureLoginAppId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureLoginAppId"></a>

```csharp
private void ResetAzureLoginAppId()
```

##### `ResetAzureTenantId` <a name="ResetAzureTenantId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureTenantId"></a>

```csharp
private void ResetAzureTenantId()
```

##### `ResetAzureUseMsi` <a name="ResetAzureUseMsi" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureUseMsi"></a>

```csharp
private void ResetAzureUseMsi()
```

##### `ResetAzureWorkspaceResourceId` <a name="ResetAzureWorkspaceResourceId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetAzureWorkspaceResourceId"></a>

```csharp
private void ResetAzureWorkspaceResourceId()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClusterId` <a name="ResetClusterId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetClusterId"></a>

```csharp
private void ResetClusterId()
```

##### `ResetConfigFile` <a name="ResetConfigFile" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetConfigFile"></a>

```csharp
private void ResetConfigFile()
```

##### `ResetDatabricksCliPath` <a name="ResetDatabricksCliPath" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetDatabricksCliPath"></a>

```csharp
private void ResetDatabricksCliPath()
```

##### `ResetDebugHeaders` <a name="ResetDebugHeaders" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugHeaders"></a>

```csharp
private void ResetDebugHeaders()
```

##### `ResetDebugTruncateBytes` <a name="ResetDebugTruncateBytes" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetDebugTruncateBytes"></a>

```csharp
private void ResetDebugTruncateBytes()
```

##### `ResetGoogleCredentials` <a name="ResetGoogleCredentials" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleCredentials"></a>

```csharp
private void ResetGoogleCredentials()
```

##### `ResetGoogleServiceAccount` <a name="ResetGoogleServiceAccount" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetGoogleServiceAccount"></a>

```csharp
private void ResetGoogleServiceAccount()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetHttpTimeoutSeconds` <a name="ResetHttpTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetHttpTimeoutSeconds"></a>

```csharp
private void ResetHttpTimeoutSeconds()
```

##### `ResetMetadataServiceUrl` <a name="ResetMetadataServiceUrl" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetMetadataServiceUrl"></a>

```csharp
private void ResetMetadataServiceUrl()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetProfile"></a>

```csharp
private void ResetProfile()
```

##### `ResetRateLimit` <a name="ResetRateLimit" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetRateLimit"></a>

```csharp
private void ResetRateLimit()
```

##### `ResetRetryTimeoutSeconds` <a name="ResetRetryTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetRetryTimeoutSeconds"></a>

```csharp
private void ResetRetryTimeoutSeconds()
```

##### `ResetServerlessComputeId` <a name="ResetServerlessComputeId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetServerlessComputeId"></a>

```csharp
private void ResetServerlessComputeId()
```

##### `ResetSkipVerify` <a name="ResetSkipVerify" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetSkipVerify"></a>

```csharp
private void ResetSkipVerify()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetToken"></a>

```csharp
private void ResetToken()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktf/provider-databricks.provider.DatabricksProvider.resetWarehouseId"></a>

```csharp
private void ResetWarehouseId()
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

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DatabricksProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.provider.DatabricksProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DatabricksProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DatabricksProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.provider.DatabricksProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DatabricksProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabricksProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabricksProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabricksProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.provider.DatabricksProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabricksProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestTokenInput">ActionsIdTokenRequestTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestUrlInput">ActionsIdTokenRequestUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.authTypeInput">AuthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientIdInput">AzureClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecretInput">AzureClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironmentInput">AzureEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppIdInput">AzureLoginAppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantIdInput">AzureTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsiInput">AzureUseMsiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceIdInput">AzureWorkspaceResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.configFileInput">ConfigFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.databricksCliPathInput">DatabricksCliPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeadersInput">DebugHeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytesInput">DebugTruncateBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentialsInput">GoogleCredentialsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccountInput">GoogleServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSecondsInput">HttpTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrlInput">MetadataServiceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.profileInput">ProfileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimitInput">RateLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSecondsInput">RetryTimeoutSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.serverlessComputeIdInput">ServerlessComputeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerifyInput">SkipVerifyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestToken">ActionsIdTokenRequestToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestUrl">ActionsIdTokenRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.authType">AuthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientId">AzureClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecret">AzureClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironment">AzureEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppId">AzureLoginAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsi">AzureUseMsi</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceId">AzureWorkspaceResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.configFile">ConfigFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.databricksCliPath">DatabricksCliPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeaders">DebugHeaders</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytes">DebugTruncateBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentials">GoogleCredentials</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSeconds">HttpTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrl">MetadataServiceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimit">RateLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSeconds">RetryTimeoutSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.serverlessComputeId">ServerlessComputeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerify">SkipVerify</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ActionsIdTokenRequestTokenInput`<sup>Optional</sup> <a name="ActionsIdTokenRequestTokenInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestTokenInput"></a>

```csharp
public string ActionsIdTokenRequestTokenInput { get; }
```

- *Type:* string

---

##### `ActionsIdTokenRequestUrlInput`<sup>Optional</sup> <a name="ActionsIdTokenRequestUrlInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestUrlInput"></a>

```csharp
public string ActionsIdTokenRequestUrlInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `AuthTypeInput`<sup>Optional</sup> <a name="AuthTypeInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.authTypeInput"></a>

```csharp
public string AuthTypeInput { get; }
```

- *Type:* string

---

##### `AzureClientIdInput`<sup>Optional</sup> <a name="AzureClientIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientIdInput"></a>

```csharp
public string AzureClientIdInput { get; }
```

- *Type:* string

---

##### `AzureClientSecretInput`<sup>Optional</sup> <a name="AzureClientSecretInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecretInput"></a>

```csharp
public string AzureClientSecretInput { get; }
```

- *Type:* string

---

##### `AzureEnvironmentInput`<sup>Optional</sup> <a name="AzureEnvironmentInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironmentInput"></a>

```csharp
public string AzureEnvironmentInput { get; }
```

- *Type:* string

---

##### `AzureLoginAppIdInput`<sup>Optional</sup> <a name="AzureLoginAppIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppIdInput"></a>

```csharp
public string AzureLoginAppIdInput { get; }
```

- *Type:* string

---

##### `AzureTenantIdInput`<sup>Optional</sup> <a name="AzureTenantIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantIdInput"></a>

```csharp
public string AzureTenantIdInput { get; }
```

- *Type:* string

---

##### `AzureUseMsiInput`<sup>Optional</sup> <a name="AzureUseMsiInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsiInput"></a>

```csharp
public object AzureUseMsiInput { get; }
```

- *Type:* object

---

##### `AzureWorkspaceResourceIdInput`<sup>Optional</sup> <a name="AzureWorkspaceResourceIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceIdInput"></a>

```csharp
public string AzureWorkspaceResourceIdInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `ConfigFileInput`<sup>Optional</sup> <a name="ConfigFileInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.configFileInput"></a>

```csharp
public string ConfigFileInput { get; }
```

- *Type:* string

---

##### `DatabricksCliPathInput`<sup>Optional</sup> <a name="DatabricksCliPathInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.databricksCliPathInput"></a>

```csharp
public string DatabricksCliPathInput { get; }
```

- *Type:* string

---

##### `DebugHeadersInput`<sup>Optional</sup> <a name="DebugHeadersInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeadersInput"></a>

```csharp
public object DebugHeadersInput { get; }
```

- *Type:* object

---

##### `DebugTruncateBytesInput`<sup>Optional</sup> <a name="DebugTruncateBytesInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytesInput"></a>

```csharp
public double DebugTruncateBytesInput { get; }
```

- *Type:* double

---

##### `GoogleCredentialsInput`<sup>Optional</sup> <a name="GoogleCredentialsInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentialsInput"></a>

```csharp
public string GoogleCredentialsInput { get; }
```

- *Type:* string

---

##### `GoogleServiceAccountInput`<sup>Optional</sup> <a name="GoogleServiceAccountInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccountInput"></a>

```csharp
public string GoogleServiceAccountInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `HttpTimeoutSecondsInput`<sup>Optional</sup> <a name="HttpTimeoutSecondsInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSecondsInput"></a>

```csharp
public double HttpTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `MetadataServiceUrlInput`<sup>Optional</sup> <a name="MetadataServiceUrlInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrlInput"></a>

```csharp
public string MetadataServiceUrlInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.profileInput"></a>

```csharp
public string ProfileInput { get; }
```

- *Type:* string

---

##### `RateLimitInput`<sup>Optional</sup> <a name="RateLimitInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimitInput"></a>

```csharp
public double RateLimitInput { get; }
```

- *Type:* double

---

##### `RetryTimeoutSecondsInput`<sup>Optional</sup> <a name="RetryTimeoutSecondsInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSecondsInput"></a>

```csharp
public double RetryTimeoutSecondsInput { get; }
```

- *Type:* double

---

##### `ServerlessComputeIdInput`<sup>Optional</sup> <a name="ServerlessComputeIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.serverlessComputeIdInput"></a>

```csharp
public string ServerlessComputeIdInput { get; }
```

- *Type:* string

---

##### `SkipVerifyInput`<sup>Optional</sup> <a name="SkipVerifyInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerifyInput"></a>

```csharp
public object SkipVerifyInput { get; }
```

- *Type:* object

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.warehouseIdInput"></a>

```csharp
public string WarehouseIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `ActionsIdTokenRequestToken`<sup>Optional</sup> <a name="ActionsIdTokenRequestToken" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestToken"></a>

```csharp
public string ActionsIdTokenRequestToken { get; }
```

- *Type:* string

---

##### `ActionsIdTokenRequestUrl`<sup>Optional</sup> <a name="ActionsIdTokenRequestUrl" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.actionsIdTokenRequestUrl"></a>

```csharp
public string ActionsIdTokenRequestUrl { get; }
```

- *Type:* string

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.authType"></a>

```csharp
public string AuthType { get; }
```

- *Type:* string

---

##### `AzureClientId`<sup>Optional</sup> <a name="AzureClientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientId"></a>

```csharp
public string AzureClientId { get; }
```

- *Type:* string

---

##### `AzureClientSecret`<sup>Optional</sup> <a name="AzureClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureClientSecret"></a>

```csharp
public string AzureClientSecret { get; }
```

- *Type:* string

---

##### `AzureEnvironment`<sup>Optional</sup> <a name="AzureEnvironment" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureEnvironment"></a>

```csharp
public string AzureEnvironment { get; }
```

- *Type:* string

---

##### `AzureLoginAppId`<sup>Optional</sup> <a name="AzureLoginAppId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureLoginAppId"></a>

```csharp
public string AzureLoginAppId { get; }
```

- *Type:* string

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; }
```

- *Type:* string

---

##### `AzureUseMsi`<sup>Optional</sup> <a name="AzureUseMsi" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureUseMsi"></a>

```csharp
public object AzureUseMsi { get; }
```

- *Type:* object

---

##### `AzureWorkspaceResourceId`<sup>Optional</sup> <a name="AzureWorkspaceResourceId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.azureWorkspaceResourceId"></a>

```csharp
public string AzureWorkspaceResourceId { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `ConfigFile`<sup>Optional</sup> <a name="ConfigFile" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.configFile"></a>

```csharp
public string ConfigFile { get; }
```

- *Type:* string

---

##### `DatabricksCliPath`<sup>Optional</sup> <a name="DatabricksCliPath" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.databricksCliPath"></a>

```csharp
public string DatabricksCliPath { get; }
```

- *Type:* string

---

##### `DebugHeaders`<sup>Optional</sup> <a name="DebugHeaders" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugHeaders"></a>

```csharp
public object DebugHeaders { get; }
```

- *Type:* object

---

##### `DebugTruncateBytes`<sup>Optional</sup> <a name="DebugTruncateBytes" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.debugTruncateBytes"></a>

```csharp
public double DebugTruncateBytes { get; }
```

- *Type:* double

---

##### `GoogleCredentials`<sup>Optional</sup> <a name="GoogleCredentials" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleCredentials"></a>

```csharp
public string GoogleCredentials { get; }
```

- *Type:* string

---

##### `GoogleServiceAccount`<sup>Optional</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.googleServiceAccount"></a>

```csharp
public string GoogleServiceAccount { get; }
```

- *Type:* string

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `HttpTimeoutSeconds`<sup>Optional</sup> <a name="HttpTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.httpTimeoutSeconds"></a>

```csharp
public double HttpTimeoutSeconds { get; }
```

- *Type:* double

---

##### `MetadataServiceUrl`<sup>Optional</sup> <a name="MetadataServiceUrl" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.metadataServiceUrl"></a>

```csharp
public string MetadataServiceUrl { get; }
```

- *Type:* string

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.rateLimit"></a>

```csharp
public double RateLimit { get; }
```

- *Type:* double

---

##### `RetryTimeoutSeconds`<sup>Optional</sup> <a name="RetryTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.retryTimeoutSeconds"></a>

```csharp
public double RetryTimeoutSeconds { get; }
```

- *Type:* double

---

##### `ServerlessComputeId`<sup>Optional</sup> <a name="ServerlessComputeId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.serverlessComputeId"></a>

```csharp
public string ServerlessComputeId { get; }
```

- *Type:* string

---

##### `SkipVerify`<sup>Optional</sup> <a name="SkipVerify" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.skipVerify"></a>

```csharp
public object SkipVerify { get; }
```

- *Type:* object

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.provider.DatabricksProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabricksProviderConfig <a name="DatabricksProviderConfig" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabricksProviderConfig {
    string AccountId = null,
    string ActionsIdTokenRequestToken = null,
    string ActionsIdTokenRequestUrl = null,
    string Alias = null,
    string AuthType = null,
    string AzureClientId = null,
    string AzureClientSecret = null,
    string AzureEnvironment = null,
    string AzureLoginAppId = null,
    string AzureTenantId = null,
    object AzureUseMsi = null,
    string AzureWorkspaceResourceId = null,
    string ClientId = null,
    string ClientSecret = null,
    string ClusterId = null,
    string ConfigFile = null,
    string DatabricksCliPath = null,
    object DebugHeaders = null,
    double DebugTruncateBytes = null,
    string GoogleCredentials = null,
    string GoogleServiceAccount = null,
    string Host = null,
    double HttpTimeoutSeconds = null,
    string MetadataServiceUrl = null,
    string Password = null,
    string Profile = null,
    double RateLimit = null,
    double RetryTimeoutSeconds = null,
    string ServerlessComputeId = null,
    object SkipVerify = null,
    string Token = null,
    string Username = null,
    string WarehouseId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#account_id DatabricksProvider#account_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.actionsIdTokenRequestToken">ActionsIdTokenRequestToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#actions_id_token_request_token DatabricksProvider#actions_id_token_request_token}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.actionsIdTokenRequestUrl">ActionsIdTokenRequestUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#actions_id_token_request_url DatabricksProvider#actions_id_token_request_url}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.authType">AuthType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#auth_type DatabricksProvider#auth_type}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientId">AzureClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_client_id DatabricksProvider#azure_client_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientSecret">AzureClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_client_secret DatabricksProvider#azure_client_secret}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureEnvironment">AzureEnvironment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_environment DatabricksProvider#azure_environment}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureLoginAppId">AzureLoginAppId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_login_app_id DatabricksProvider#azure_login_app_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureTenantId">AzureTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_tenant_id DatabricksProvider#azure_tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureUseMsi">AzureUseMsi</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_use_msi DatabricksProvider#azure_use_msi}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureWorkspaceResourceId">AzureWorkspaceResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#client_id DatabricksProvider#client_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#client_secret DatabricksProvider#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#cluster_id DatabricksProvider#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.configFile">ConfigFile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#config_file DatabricksProvider#config_file}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.databricksCliPath">DatabricksCliPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#databricks_cli_path DatabricksProvider#databricks_cli_path}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugHeaders">DebugHeaders</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#debug_headers DatabricksProvider#debug_headers}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugTruncateBytes">DebugTruncateBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleCredentials">GoogleCredentials</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#google_credentials DatabricksProvider#google_credentials}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleServiceAccount">GoogleServiceAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#google_service_account DatabricksProvider#google_service_account}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.host">Host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#host DatabricksProvider#host}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.httpTimeoutSeconds">HttpTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#http_timeout_seconds DatabricksProvider#http_timeout_seconds}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.metadataServiceUrl">MetadataServiceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#metadata_service_url DatabricksProvider#metadata_service_url}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#password DatabricksProvider#password}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.profile">Profile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#profile DatabricksProvider#profile}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.rateLimit">RateLimit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#rate_limit DatabricksProvider#rate_limit}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.retryTimeoutSeconds">RetryTimeoutSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.serverlessComputeId">ServerlessComputeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#serverless_compute_id DatabricksProvider#serverless_compute_id}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.skipVerify">SkipVerify</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#skip_verify DatabricksProvider#skip_verify}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.token">Token</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#token DatabricksProvider#token}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#username DatabricksProvider#username}. |
| <code><a href="#@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.warehouseId">WarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#warehouse_id DatabricksProvider#warehouse_id}. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#account_id DatabricksProvider#account_id}.

---

##### `ActionsIdTokenRequestToken`<sup>Optional</sup> <a name="ActionsIdTokenRequestToken" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.actionsIdTokenRequestToken"></a>

```csharp
public string ActionsIdTokenRequestToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#actions_id_token_request_token DatabricksProvider#actions_id_token_request_token}.

---

##### `ActionsIdTokenRequestUrl`<sup>Optional</sup> <a name="ActionsIdTokenRequestUrl" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.actionsIdTokenRequestUrl"></a>

```csharp
public string ActionsIdTokenRequestUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#actions_id_token_request_url DatabricksProvider#actions_id_token_request_url}.

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#alias DatabricksProvider#alias}

---

##### `AuthType`<sup>Optional</sup> <a name="AuthType" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.authType"></a>

```csharp
public string AuthType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#auth_type DatabricksProvider#auth_type}.

---

##### `AzureClientId`<sup>Optional</sup> <a name="AzureClientId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientId"></a>

```csharp
public string AzureClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_client_id DatabricksProvider#azure_client_id}.

---

##### `AzureClientSecret`<sup>Optional</sup> <a name="AzureClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureClientSecret"></a>

```csharp
public string AzureClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_client_secret DatabricksProvider#azure_client_secret}.

---

##### `AzureEnvironment`<sup>Optional</sup> <a name="AzureEnvironment" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureEnvironment"></a>

```csharp
public string AzureEnvironment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_environment DatabricksProvider#azure_environment}.

---

##### `AzureLoginAppId`<sup>Optional</sup> <a name="AzureLoginAppId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureLoginAppId"></a>

```csharp
public string AzureLoginAppId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_login_app_id DatabricksProvider#azure_login_app_id}.

---

##### `AzureTenantId`<sup>Optional</sup> <a name="AzureTenantId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureTenantId"></a>

```csharp
public string AzureTenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_tenant_id DatabricksProvider#azure_tenant_id}.

---

##### `AzureUseMsi`<sup>Optional</sup> <a name="AzureUseMsi" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureUseMsi"></a>

```csharp
public object AzureUseMsi { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_use_msi DatabricksProvider#azure_use_msi}.

---

##### `AzureWorkspaceResourceId`<sup>Optional</sup> <a name="AzureWorkspaceResourceId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.azureWorkspaceResourceId"></a>

```csharp
public string AzureWorkspaceResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#azure_workspace_resource_id DatabricksProvider#azure_workspace_resource_id}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#client_id DatabricksProvider#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#client_secret DatabricksProvider#client_secret}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#cluster_id DatabricksProvider#cluster_id}.

---

##### `ConfigFile`<sup>Optional</sup> <a name="ConfigFile" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.configFile"></a>

```csharp
public string ConfigFile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#config_file DatabricksProvider#config_file}.

---

##### `DatabricksCliPath`<sup>Optional</sup> <a name="DatabricksCliPath" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.databricksCliPath"></a>

```csharp
public string DatabricksCliPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#databricks_cli_path DatabricksProvider#databricks_cli_path}.

---

##### `DebugHeaders`<sup>Optional</sup> <a name="DebugHeaders" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugHeaders"></a>

```csharp
public object DebugHeaders { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#debug_headers DatabricksProvider#debug_headers}.

---

##### `DebugTruncateBytes`<sup>Optional</sup> <a name="DebugTruncateBytes" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.debugTruncateBytes"></a>

```csharp
public double DebugTruncateBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#debug_truncate_bytes DatabricksProvider#debug_truncate_bytes}.

---

##### `GoogleCredentials`<sup>Optional</sup> <a name="GoogleCredentials" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleCredentials"></a>

```csharp
public string GoogleCredentials { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#google_credentials DatabricksProvider#google_credentials}.

---

##### `GoogleServiceAccount`<sup>Optional</sup> <a name="GoogleServiceAccount" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.googleServiceAccount"></a>

```csharp
public string GoogleServiceAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#google_service_account DatabricksProvider#google_service_account}.

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#host DatabricksProvider#host}.

---

##### `HttpTimeoutSeconds`<sup>Optional</sup> <a name="HttpTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.httpTimeoutSeconds"></a>

```csharp
public double HttpTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#http_timeout_seconds DatabricksProvider#http_timeout_seconds}.

---

##### `MetadataServiceUrl`<sup>Optional</sup> <a name="MetadataServiceUrl" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.metadataServiceUrl"></a>

```csharp
public string MetadataServiceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#metadata_service_url DatabricksProvider#metadata_service_url}.

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#password DatabricksProvider#password}.

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.profile"></a>

```csharp
public string Profile { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#profile DatabricksProvider#profile}.

---

##### `RateLimit`<sup>Optional</sup> <a name="RateLimit" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.rateLimit"></a>

```csharp
public double RateLimit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#rate_limit DatabricksProvider#rate_limit}.

---

##### `RetryTimeoutSeconds`<sup>Optional</sup> <a name="RetryTimeoutSeconds" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.retryTimeoutSeconds"></a>

```csharp
public double RetryTimeoutSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#retry_timeout_seconds DatabricksProvider#retry_timeout_seconds}.

---

##### `ServerlessComputeId`<sup>Optional</sup> <a name="ServerlessComputeId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.serverlessComputeId"></a>

```csharp
public string ServerlessComputeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#serverless_compute_id DatabricksProvider#serverless_compute_id}.

---

##### `SkipVerify`<sup>Optional</sup> <a name="SkipVerify" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.skipVerify"></a>

```csharp
public object SkipVerify { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#skip_verify DatabricksProvider#skip_verify}.

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#token DatabricksProvider#token}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#username DatabricksProvider#username}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.provider.DatabricksProviderConfig.property.warehouseId"></a>

```csharp
public string WarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.62.1/docs#warehouse_id DatabricksProvider#warehouse_id}.

---



