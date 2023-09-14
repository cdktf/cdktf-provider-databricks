# `databricks_mws_private_access_settings`

Refer to the Terraform Registory for docs: [`databricks_mws_private_access_settings`](https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings).

# `mwsPrivateAccessSettings` Submodule <a name="`mwsPrivateAccessSettings` Submodule" id="@cdktf/provider-databricks.mwsPrivateAccessSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsPrivateAccessSettings <a name="MwsPrivateAccessSettings" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings databricks_mws_private_access_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsPrivateAccessSettings(Construct Scope, string Id, MwsPrivateAccessSettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig">MwsPrivateAccessSettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig">MwsPrivateAccessSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAllowedVpcEndpointIds">ResetAllowedVpcEndpointIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessLevel">ResetPrivateAccessLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessSettingsId">ResetPrivateAccessSettingsId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPublicAccessEnabled">ResetPublicAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAllowedVpcEndpointIds` <a name="ResetAllowedVpcEndpointIds" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetAllowedVpcEndpointIds"></a>

```csharp
private void ResetAllowedVpcEndpointIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivateAccessLevel` <a name="ResetPrivateAccessLevel" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessLevel"></a>

```csharp
private void ResetPrivateAccessLevel()
```

##### `ResetPrivateAccessSettingsId` <a name="ResetPrivateAccessSettingsId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPrivateAccessSettingsId"></a>

```csharp
private void ResetPrivateAccessSettingsId()
```

##### `ResetPublicAccessEnabled` <a name="ResetPublicAccessEnabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetPublicAccessEnabled"></a>

```csharp
private void ResetPublicAccessEnabled()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsPrivateAccessSettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsPrivateAccessSettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

MwsPrivateAccessSettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIdsInput">AllowedVpcEndpointIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevelInput">PrivateAccessLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsIdInput">PrivateAccessSettingsIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsNameInput">PrivateAccessSettingsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabledInput">PublicAccessEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIds">AllowedVpcEndpointIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevel">PrivateAccessLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsId">PrivateAccessSettingsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsName">PrivateAccessSettingsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabled">PublicAccessEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.status">Status</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AllowedVpcEndpointIdsInput`<sup>Optional</sup> <a name="AllowedVpcEndpointIdsInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIdsInput"></a>

```csharp
public string[] AllowedVpcEndpointIdsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrivateAccessLevelInput`<sup>Optional</sup> <a name="PrivateAccessLevelInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevelInput"></a>

```csharp
public string PrivateAccessLevelInput { get; }
```

- *Type:* string

---

##### `PrivateAccessSettingsIdInput`<sup>Optional</sup> <a name="PrivateAccessSettingsIdInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsIdInput"></a>

```csharp
public string PrivateAccessSettingsIdInput { get; }
```

- *Type:* string

---

##### `PrivateAccessSettingsNameInput`<sup>Optional</sup> <a name="PrivateAccessSettingsNameInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsNameInput"></a>

```csharp
public string PrivateAccessSettingsNameInput { get; }
```

- *Type:* string

---

##### `PublicAccessEnabledInput`<sup>Optional</sup> <a name="PublicAccessEnabledInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabledInput"></a>

```csharp
public object PublicAccessEnabledInput { get; }
```

- *Type:* object

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AllowedVpcEndpointIds`<sup>Required</sup> <a name="AllowedVpcEndpointIds" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.allowedVpcEndpointIds"></a>

```csharp
public string[] AllowedVpcEndpointIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivateAccessLevel`<sup>Required</sup> <a name="PrivateAccessLevel" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessLevel"></a>

```csharp
public string PrivateAccessLevel { get; }
```

- *Type:* string

---

##### `PrivateAccessSettingsId`<sup>Required</sup> <a name="PrivateAccessSettingsId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsId"></a>

```csharp
public string PrivateAccessSettingsId { get; }
```

- *Type:* string

---

##### `PrivateAccessSettingsName`<sup>Required</sup> <a name="PrivateAccessSettingsName" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.privateAccessSettingsName"></a>

```csharp
public string PrivateAccessSettingsName { get; }
```

- *Type:* string

---

##### `PublicAccessEnabled`<sup>Required</sup> <a name="PublicAccessEnabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.publicAccessEnabled"></a>

```csharp
public object PublicAccessEnabled { get; }
```

- *Type:* object

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsPrivateAccessSettingsConfig <a name="MwsPrivateAccessSettingsConfig" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new MwsPrivateAccessSettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PrivateAccessSettingsName,
    string Region,
    string AccountId = null,
    string[] AllowedVpcEndpointIds = null,
    string Id = null,
    string PrivateAccessLevel = null,
    string PrivateAccessSettingsId = null,
    object PublicAccessEnabled = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsName">PrivateAccessSettingsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.allowedVpcEndpointIds">AllowedVpcEndpointIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessLevel">PrivateAccessLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsId">PrivateAccessSettingsId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.publicAccessEnabled">PublicAccessEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}. |
| <code><a href="#@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#status MwsPrivateAccessSettings#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PrivateAccessSettingsName`<sup>Required</sup> <a name="PrivateAccessSettingsName" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsName"></a>

```csharp
public string PrivateAccessSettingsName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#private_access_settings_name MwsPrivateAccessSettings#private_access_settings_name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#region MwsPrivateAccessSettings#region}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#account_id MwsPrivateAccessSettings#account_id}.

---

##### `AllowedVpcEndpointIds`<sup>Optional</sup> <a name="AllowedVpcEndpointIds" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.allowedVpcEndpointIds"></a>

```csharp
public string[] AllowedVpcEndpointIds { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#allowed_vpc_endpoint_ids MwsPrivateAccessSettings#allowed_vpc_endpoint_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#id MwsPrivateAccessSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivateAccessLevel`<sup>Optional</sup> <a name="PrivateAccessLevel" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessLevel"></a>

```csharp
public string PrivateAccessLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#private_access_level MwsPrivateAccessSettings#private_access_level}.

---

##### `PrivateAccessSettingsId`<sup>Optional</sup> <a name="PrivateAccessSettingsId" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.privateAccessSettingsId"></a>

```csharp
public string PrivateAccessSettingsId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#private_access_settings_id MwsPrivateAccessSettings#private_access_settings_id}.

---

##### `PublicAccessEnabled`<sup>Optional</sup> <a name="PublicAccessEnabled" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.publicAccessEnabled"></a>

```csharp
public object PublicAccessEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#public_access_enabled MwsPrivateAccessSettings#public_access_enabled}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-databricks.mwsPrivateAccessSettings.MwsPrivateAccessSettingsConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.25.1/docs/resources/mws_private_access_settings#status MwsPrivateAccessSettings#status}.

---



