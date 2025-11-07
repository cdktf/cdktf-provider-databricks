# `dataDatabricksExternalLocation` Submodule <a name="`dataDatabricksExternalLocation` Submodule" id="@cdktf/provider-databricks.dataDatabricksExternalLocation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksExternalLocation <a name="DataDatabricksExternalLocation" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location databricks_external_location}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocation(Construct Scope, string Id, DataDatabricksExternalLocationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig">DataDatabricksExternalLocationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig">DataDatabricksExternalLocationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo">PutExternalLocationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putProviderConfig">PutProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetExternalLocationInfo">ResetExternalLocationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetProviderConfig">ResetProviderConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutExternalLocationInfo` <a name="PutExternalLocationInfo" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo"></a>

```csharp
private void PutExternalLocationInfo(DataDatabricksExternalLocationExternalLocationInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putExternalLocationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a>

---

##### `PutProviderConfig` <a name="PutProviderConfig" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putProviderConfig"></a>

```csharp
private void PutProviderConfig(DataDatabricksExternalLocationProviderConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.putProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfig">DataDatabricksExternalLocationProviderConfig</a>

---

##### `ResetExternalLocationInfo` <a name="ResetExternalLocationInfo" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetExternalLocationInfo"></a>

```csharp
private void ResetExternalLocationInfo()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProviderConfig` <a name="ResetProviderConfig" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.resetProviderConfig"></a>

```csharp
private void ResetProviderConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksExternalLocation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksExternalLocation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksExternalLocation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksExternalLocation.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksExternalLocation.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksExternalLocation resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksExternalLocation to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksExternalLocation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksExternalLocation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.externalLocationInfo">ExternalLocationInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference">DataDatabricksExternalLocationExternalLocationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference">DataDatabricksExternalLocationProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.externalLocationInfoInput">ExternalLocationInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.providerConfigInput">ProviderConfigInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfig">DataDatabricksExternalLocationProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExternalLocationInfo`<sup>Required</sup> <a name="ExternalLocationInfo" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.externalLocationInfo"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoOutputReference ExternalLocationInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference">DataDatabricksExternalLocationExternalLocationInfoOutputReference</a>

---

##### `ProviderConfig`<sup>Required</sup> <a name="ProviderConfig" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.providerConfig"></a>

```csharp
public DataDatabricksExternalLocationProviderConfigOutputReference ProviderConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference">DataDatabricksExternalLocationProviderConfigOutputReference</a>

---

##### `ExternalLocationInfoInput`<sup>Optional</sup> <a name="ExternalLocationInfoInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.externalLocationInfoInput"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfo ExternalLocationInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProviderConfigInput`<sup>Optional</sup> <a name="ProviderConfigInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.providerConfigInput"></a>

```csharp
public DataDatabricksExternalLocationProviderConfig ProviderConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfig">DataDatabricksExternalLocationProviderConfig</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksExternalLocationConfig <a name="DataDatabricksExternalLocationConfig" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    DataDatabricksExternalLocationExternalLocationInfo ExternalLocationInfo = null,
    string Id = null,
    DataDatabricksExternalLocationProviderConfig ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.externalLocationInfo">ExternalLocationInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a></code> | external_location_info block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#id DataDatabricksExternalLocation#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.providerConfig">ProviderConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfig">DataDatabricksExternalLocationProviderConfig</a></code> | provider_config block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}.

---

##### `ExternalLocationInfo`<sup>Optional</sup> <a name="ExternalLocationInfo" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.externalLocationInfo"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfo ExternalLocationInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a>

external_location_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#external_location_info DataDatabricksExternalLocation#external_location_info}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#id DataDatabricksExternalLocation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProviderConfig`<sup>Optional</sup> <a name="ProviderConfig" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationConfig.property.providerConfig"></a>

```csharp
public DataDatabricksExternalLocationProviderConfig ProviderConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfig">DataDatabricksExternalLocationProviderConfig</a>

provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#provider_config DataDatabricksExternalLocation#provider_config}

---

### DataDatabricksExternalLocationExternalLocationInfo <a name="DataDatabricksExternalLocationExternalLocationInfo" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfo {
    bool|IResolvable BrowseOnly = null,
    string Comment = null,
    double CreatedAt = null,
    string CreatedBy = null,
    string CredentialId = null,
    string CredentialName = null,
    bool|IResolvable EnableFileEvents = null,
    DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails EncryptionDetails = null,
    bool|IResolvable Fallback = null,
    DataDatabricksExternalLocationExternalLocationInfoFileEventQueue FileEventQueue = null,
    string IsolationMode = null,
    string MetastoreId = null,
    string Name = null,
    string Owner = null,
    bool|IResolvable ReadOnly = null,
    double UpdatedAt = null,
    string UpdatedBy = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.browseOnly">BrowseOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#browse_only DataDatabricksExternalLocation#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#comment DataDatabricksExternalLocation#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.createdAt">CreatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#created_at DataDatabricksExternalLocation#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.createdBy">CreatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#created_by DataDatabricksExternalLocation#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.credentialId">CredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#credential_id DataDatabricksExternalLocation#credential_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.credentialName">CredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#credential_name DataDatabricksExternalLocation#credential_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.enableFileEvents">EnableFileEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#enable_file_events DataDatabricksExternalLocation#enable_file_events}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.encryptionDetails">EncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a></code> | encryption_details block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.fallback">Fallback</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#fallback DataDatabricksExternalLocation#fallback}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.fileEventQueue">FileEventQueue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a></code> | file_event_queue block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.isolationMode">IsolationMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#isolation_mode DataDatabricksExternalLocation#isolation_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#metastore_id DataDatabricksExternalLocation#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#owner DataDatabricksExternalLocation#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.readOnly">ReadOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#read_only DataDatabricksExternalLocation#read_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#updated_at DataDatabricksExternalLocation#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#updated_by DataDatabricksExternalLocation#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#url DataDatabricksExternalLocation#url}. |

---

##### `BrowseOnly`<sup>Optional</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.browseOnly"></a>

```csharp
public bool|IResolvable BrowseOnly { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#browse_only DataDatabricksExternalLocation#browse_only}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#comment DataDatabricksExternalLocation#comment}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.createdAt"></a>

```csharp
public double CreatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#created_at DataDatabricksExternalLocation#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#created_by DataDatabricksExternalLocation#created_by}.

---

##### `CredentialId`<sup>Optional</sup> <a name="CredentialId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.credentialId"></a>

```csharp
public string CredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#credential_id DataDatabricksExternalLocation#credential_id}.

---

##### `CredentialName`<sup>Optional</sup> <a name="CredentialName" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.credentialName"></a>

```csharp
public string CredentialName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#credential_name DataDatabricksExternalLocation#credential_name}.

---

##### `EnableFileEvents`<sup>Optional</sup> <a name="EnableFileEvents" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.enableFileEvents"></a>

```csharp
public bool|IResolvable EnableFileEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#enable_file_events DataDatabricksExternalLocation#enable_file_events}.

---

##### `EncryptionDetails`<sup>Optional</sup> <a name="EncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.encryptionDetails"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails EncryptionDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a>

encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#encryption_details DataDatabricksExternalLocation#encryption_details}

---

##### `Fallback`<sup>Optional</sup> <a name="Fallback" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.fallback"></a>

```csharp
public bool|IResolvable Fallback { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#fallback DataDatabricksExternalLocation#fallback}.

---

##### `FileEventQueue`<sup>Optional</sup> <a name="FileEventQueue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.fileEventQueue"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueue FileEventQueue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a>

file_event_queue block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#file_event_queue DataDatabricksExternalLocation#file_event_queue}

---

##### `IsolationMode`<sup>Optional</sup> <a name="IsolationMode" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.isolationMode"></a>

```csharp
public string IsolationMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#isolation_mode DataDatabricksExternalLocation#isolation_mode}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#metastore_id DataDatabricksExternalLocation#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#name DataDatabricksExternalLocation#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#owner DataDatabricksExternalLocation#owner}.

---

##### `ReadOnly`<sup>Optional</sup> <a name="ReadOnly" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#read_only DataDatabricksExternalLocation#read_only}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#updated_at DataDatabricksExternalLocation#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#updated_by DataDatabricksExternalLocation#updated_by}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#url DataDatabricksExternalLocation#url}.

---

### DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails <a name="DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails {
    DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails SseEncryptionDetails = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails.property.sseEncryptionDetails">SseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a></code> | sse_encryption_details block. |

---

##### `SseEncryptionDetails`<sup>Optional</sup> <a name="SseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails.property.sseEncryptionDetails"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails SseEncryptionDetails { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a>

sse_encryption_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#sse_encryption_details DataDatabricksExternalLocation#sse_encryption_details}

---

### DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails <a name="DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails {
    string Algorithm = null,
    string AwsKmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails.property.algorithm">Algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#algorithm DataDatabricksExternalLocation#algorithm}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn">AwsKmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#aws_kms_key_arn DataDatabricksExternalLocation#aws_kms_key_arn}. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#algorithm DataDatabricksExternalLocation#algorithm}.

---

##### `AwsKmsKeyArn`<sup>Optional</sup> <a name="AwsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails.property.awsKmsKeyArn"></a>

```csharp
public string AwsKmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#aws_kms_key_arn DataDatabricksExternalLocation#aws_kms_key_arn}.

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueue <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueue {
    DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs ManagedAqs = null,
    DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub ManagedPubsub = null,
    DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs ManagedSqs = null,
    DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs ProvidedAqs = null,
    DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub ProvidedPubsub = null,
    DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs ProvidedSqs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.managedAqs">ManagedAqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a></code> | managed_aqs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.managedPubsub">ManagedPubsub</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a></code> | managed_pubsub block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.managedSqs">ManagedSqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a></code> | managed_sqs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.providedAqs">ProvidedAqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a></code> | provided_aqs block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.providedPubsub">ProvidedPubsub</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a></code> | provided_pubsub block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.providedSqs">ProvidedSqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a></code> | provided_sqs block. |

---

##### `ManagedAqs`<sup>Optional</sup> <a name="ManagedAqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.managedAqs"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs ManagedAqs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a>

managed_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_aqs DataDatabricksExternalLocation#managed_aqs}

---

##### `ManagedPubsub`<sup>Optional</sup> <a name="ManagedPubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.managedPubsub"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub ManagedPubsub { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a>

managed_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_pubsub DataDatabricksExternalLocation#managed_pubsub}

---

##### `ManagedSqs`<sup>Optional</sup> <a name="ManagedSqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.managedSqs"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs ManagedSqs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a>

managed_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_sqs DataDatabricksExternalLocation#managed_sqs}

---

##### `ProvidedAqs`<sup>Optional</sup> <a name="ProvidedAqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.providedAqs"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs ProvidedAqs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a>

provided_aqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#provided_aqs DataDatabricksExternalLocation#provided_aqs}

---

##### `ProvidedPubsub`<sup>Optional</sup> <a name="ProvidedPubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.providedPubsub"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub ProvidedPubsub { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a>

provided_pubsub block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#provided_pubsub DataDatabricksExternalLocation#provided_pubsub}

---

##### `ProvidedSqs`<sup>Optional</sup> <a name="ProvidedSqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue.property.providedSqs"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs ProvidedSqs { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a>

provided_sqs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#provided_sqs DataDatabricksExternalLocation#provided_sqs}

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs {
    string ManagedResourceId = null,
    string QueueUrl = null,
    string ResourceGroup = null,
    string SubscriptionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.managedResourceId">ManagedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.queueUrl">QueueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#resource_group DataDatabricksExternalLocation#resource_group}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#subscription_id DataDatabricksExternalLocation#subscription_id}. |

---

##### `ManagedResourceId`<sup>Optional</sup> <a name="ManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.managedResourceId"></a>

```csharp
public string ManagedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

##### `QueueUrl`<sup>Optional</sup> <a name="QueueUrl" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.queueUrl"></a>

```csharp
public string QueueUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}.

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#resource_group DataDatabricksExternalLocation#resource_group}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#subscription_id DataDatabricksExternalLocation#subscription_id}.

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub {
    string ManagedResourceId = null,
    string SubscriptionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub.property.managedResourceId">ManagedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub.property.subscriptionName">SubscriptionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#subscription_name DataDatabricksExternalLocation#subscription_name}. |

---

##### `ManagedResourceId`<sup>Optional</sup> <a name="ManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub.property.managedResourceId"></a>

```csharp
public string ManagedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

##### `SubscriptionName`<sup>Optional</sup> <a name="SubscriptionName" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub.property.subscriptionName"></a>

```csharp
public string SubscriptionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#subscription_name DataDatabricksExternalLocation#subscription_name}.

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs {
    string ManagedResourceId = null,
    string QueueUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs.property.managedResourceId">ManagedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs.property.queueUrl">QueueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}. |

---

##### `ManagedResourceId`<sup>Optional</sup> <a name="ManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs.property.managedResourceId"></a>

```csharp
public string ManagedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

##### `QueueUrl`<sup>Optional</sup> <a name="QueueUrl" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs.property.queueUrl"></a>

```csharp
public string QueueUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}.

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs {
    string ManagedResourceId = null,
    string QueueUrl = null,
    string ResourceGroup = null,
    string SubscriptionId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.managedResourceId">ManagedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.queueUrl">QueueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#resource_group DataDatabricksExternalLocation#resource_group}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#subscription_id DataDatabricksExternalLocation#subscription_id}. |

---

##### `ManagedResourceId`<sup>Optional</sup> <a name="ManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.managedResourceId"></a>

```csharp
public string ManagedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

##### `QueueUrl`<sup>Optional</sup> <a name="QueueUrl" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.queueUrl"></a>

```csharp
public string QueueUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}.

---

##### `ResourceGroup`<sup>Optional</sup> <a name="ResourceGroup" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#resource_group DataDatabricksExternalLocation#resource_group}.

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#subscription_id DataDatabricksExternalLocation#subscription_id}.

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub {
    string ManagedResourceId = null,
    string SubscriptionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub.property.managedResourceId">ManagedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub.property.subscriptionName">SubscriptionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#subscription_name DataDatabricksExternalLocation#subscription_name}. |

---

##### `ManagedResourceId`<sup>Optional</sup> <a name="ManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub.property.managedResourceId"></a>

```csharp
public string ManagedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

##### `SubscriptionName`<sup>Optional</sup> <a name="SubscriptionName" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub.property.subscriptionName"></a>

```csharp
public string SubscriptionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#subscription_name DataDatabricksExternalLocation#subscription_name}.

---

### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs {
    string ManagedResourceId = null,
    string QueueUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs.property.managedResourceId">ManagedResourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs.property.queueUrl">QueueUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}. |

---

##### `ManagedResourceId`<sup>Optional</sup> <a name="ManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs.property.managedResourceId"></a>

```csharp
public string ManagedResourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#managed_resource_id DataDatabricksExternalLocation#managed_resource_id}.

---

##### `QueueUrl`<sup>Optional</sup> <a name="QueueUrl" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs.property.queueUrl"></a>

```csharp
public string QueueUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#queue_url DataDatabricksExternalLocation#queue_url}.

---

### DataDatabricksExternalLocationProviderConfig <a name="DataDatabricksExternalLocationProviderConfig" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationProviderConfig {
    string WorkspaceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#workspace_id DataDatabricksExternalLocation#workspace_id}. |

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/external_location#workspace_id DataDatabricksExternalLocation#workspace_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.putSseEncryptionDetails">PutSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails">ResetSseEncryptionDetails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSseEncryptionDetails` <a name="PutSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.putSseEncryptionDetails"></a>

```csharp
private void PutSseEncryptionDetails(DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.putSseEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a>

---

##### `ResetSseEncryptionDetails` <a name="ResetSseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.resetSseEncryptionDetails"></a>

```csharp
private void ResetSseEncryptionDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails">SseEncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput">SseEncryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SseEncryptionDetails`<sup>Required</sup> <a name="SseEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.sseEncryptionDetails"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference SseEncryptionDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference</a>

---

##### `SseEncryptionDetailsInput`<sup>Optional</sup> <a name="SseEncryptionDetailsInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.sseEncryptionDetailsInput"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails SseEncryptionDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a>

---


### DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn">ResetAwsKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetAwsKmsKeyArn` <a name="ResetAwsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.resetAwsKmsKeyArn"></a>

```csharp
private void ResetAwsKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput">AwsKmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn">AwsKmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `AwsKmsKeyArnInput`<sup>Optional</sup> <a name="AwsKmsKeyArnInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArnInput"></a>

```csharp
public string AwsKmsKeyArnInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `AwsKmsKeyArn`<sup>Required</sup> <a name="AwsKmsKeyArn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.awsKmsKeyArn"></a>

```csharp
public string AwsKmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetailsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsSseEncryptionDetails</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetManagedResourceId">ResetManagedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetQueueUrl">ResetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManagedResourceId` <a name="ResetManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetManagedResourceId"></a>

```csharp
private void ResetManagedResourceId()
```

##### `ResetQueueUrl` <a name="ResetQueueUrl" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetQueueUrl"></a>

```csharp
private void ResetQueueUrl()
```

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetResourceGroup"></a>

```csharp
private void ResetResourceGroup()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.managedResourceIdInput">ManagedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.queueUrlInput">QueueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.managedResourceId">ManagedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.queueUrl">QueueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedResourceIdInput`<sup>Optional</sup> <a name="ManagedResourceIdInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.managedResourceIdInput"></a>

```csharp
public string ManagedResourceIdInput { get; }
```

- *Type:* string

---

##### `QueueUrlInput`<sup>Optional</sup> <a name="QueueUrlInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.queueUrlInput"></a>

```csharp
public string QueueUrlInput { get; }
```

- *Type:* string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.resourceGroupInput"></a>

```csharp
public string ResourceGroupInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `ManagedResourceId`<sup>Required</sup> <a name="ManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.managedResourceId"></a>

```csharp
public string ManagedResourceId { get; }
```

- *Type:* string

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.queueUrl"></a>

```csharp
public string QueueUrl { get; }
```

- *Type:* string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resetManagedResourceId">ResetManagedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resetSubscriptionName">ResetSubscriptionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManagedResourceId` <a name="ResetManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resetManagedResourceId"></a>

```csharp
private void ResetManagedResourceId()
```

##### `ResetSubscriptionName` <a name="ResetSubscriptionName" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.resetSubscriptionName"></a>

```csharp
private void ResetSubscriptionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.managedResourceIdInput">ManagedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.subscriptionNameInput">SubscriptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.managedResourceId">ManagedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.subscriptionName">SubscriptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedResourceIdInput`<sup>Optional</sup> <a name="ManagedResourceIdInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.managedResourceIdInput"></a>

```csharp
public string ManagedResourceIdInput { get; }
```

- *Type:* string

---

##### `SubscriptionNameInput`<sup>Optional</sup> <a name="SubscriptionNameInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.subscriptionNameInput"></a>

```csharp
public string SubscriptionNameInput { get; }
```

- *Type:* string

---

##### `ManagedResourceId`<sup>Required</sup> <a name="ManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.managedResourceId"></a>

```csharp
public string ManagedResourceId { get; }
```

- *Type:* string

---

##### `SubscriptionName`<sup>Required</sup> <a name="SubscriptionName" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.subscriptionName"></a>

```csharp
public string SubscriptionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resetManagedResourceId">ResetManagedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resetQueueUrl">ResetQueueUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManagedResourceId` <a name="ResetManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resetManagedResourceId"></a>

```csharp
private void ResetManagedResourceId()
```

##### `ResetQueueUrl` <a name="ResetQueueUrl" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.resetQueueUrl"></a>

```csharp
private void ResetQueueUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.managedResourceIdInput">ManagedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.queueUrlInput">QueueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.managedResourceId">ManagedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.queueUrl">QueueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedResourceIdInput`<sup>Optional</sup> <a name="ManagedResourceIdInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.managedResourceIdInput"></a>

```csharp
public string ManagedResourceIdInput { get; }
```

- *Type:* string

---

##### `QueueUrlInput`<sup>Optional</sup> <a name="QueueUrlInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.queueUrlInput"></a>

```csharp
public string QueueUrlInput { get; }
```

- *Type:* string

---

##### `ManagedResourceId`<sup>Required</sup> <a name="ManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.managedResourceId"></a>

```csharp
public string ManagedResourceId { get; }
```

- *Type:* string

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.queueUrl"></a>

```csharp
public string QueueUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedAqs">PutManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedPubsub">PutManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedSqs">PutManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedAqs">PutProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedPubsub">PutProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedSqs">PutProvidedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetManagedAqs">ResetManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetManagedPubsub">ResetManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetManagedSqs">ResetManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetProvidedAqs">ResetProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetProvidedPubsub">ResetProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetProvidedSqs">ResetProvidedSqs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManagedAqs` <a name="PutManagedAqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedAqs"></a>

```csharp
private void PutManagedAqs(DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedAqs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a>

---

##### `PutManagedPubsub` <a name="PutManagedPubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedPubsub"></a>

```csharp
private void PutManagedPubsub(DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a>

---

##### `PutManagedSqs` <a name="PutManagedSqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedSqs"></a>

```csharp
private void PutManagedSqs(DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putManagedSqs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a>

---

##### `PutProvidedAqs` <a name="PutProvidedAqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedAqs"></a>

```csharp
private void PutProvidedAqs(DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedAqs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a>

---

##### `PutProvidedPubsub` <a name="PutProvidedPubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedPubsub"></a>

```csharp
private void PutProvidedPubsub(DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedPubsub.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a>

---

##### `PutProvidedSqs` <a name="PutProvidedSqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedSqs"></a>

```csharp
private void PutProvidedSqs(DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.putProvidedSqs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a>

---

##### `ResetManagedAqs` <a name="ResetManagedAqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetManagedAqs"></a>

```csharp
private void ResetManagedAqs()
```

##### `ResetManagedPubsub` <a name="ResetManagedPubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetManagedPubsub"></a>

```csharp
private void ResetManagedPubsub()
```

##### `ResetManagedSqs` <a name="ResetManagedSqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetManagedSqs"></a>

```csharp
private void ResetManagedSqs()
```

##### `ResetProvidedAqs` <a name="ResetProvidedAqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetProvidedAqs"></a>

```csharp
private void ResetProvidedAqs()
```

##### `ResetProvidedPubsub` <a name="ResetProvidedPubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetProvidedPubsub"></a>

```csharp
private void ResetProvidedPubsub()
```

##### `ResetProvidedSqs` <a name="ResetProvidedSqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.resetProvidedSqs"></a>

```csharp
private void ResetProvidedSqs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedAqs">ManagedAqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedPubsub">ManagedPubsub</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedSqs">ManagedSqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedAqs">ProvidedAqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedPubsub">ProvidedPubsub</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedSqs">ProvidedSqs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedAqsInput">ManagedAqsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedPubsubInput">ManagedPubsubInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedSqsInput">ManagedSqsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedAqsInput">ProvidedAqsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedPubsubInput">ProvidedPubsubInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedSqsInput">ProvidedSqsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedAqs`<sup>Required</sup> <a name="ManagedAqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedAqs"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference ManagedAqs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqsOutputReference</a>

---

##### `ManagedPubsub`<sup>Required</sup> <a name="ManagedPubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedPubsub"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference ManagedPubsub { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsubOutputReference</a>

---

##### `ManagedSqs`<sup>Required</sup> <a name="ManagedSqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedSqs"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference ManagedSqs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqsOutputReference</a>

---

##### `ProvidedAqs`<sup>Required</sup> <a name="ProvidedAqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedAqs"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference ProvidedAqs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference</a>

---

##### `ProvidedPubsub`<sup>Required</sup> <a name="ProvidedPubsub" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedPubsub"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference ProvidedPubsub { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference</a>

---

##### `ProvidedSqs`<sup>Required</sup> <a name="ProvidedSqs" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedSqs"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference ProvidedSqs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference</a>

---

##### `ManagedAqsInput`<sup>Optional</sup> <a name="ManagedAqsInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedAqsInput"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs ManagedAqsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedAqs</a>

---

##### `ManagedPubsubInput`<sup>Optional</sup> <a name="ManagedPubsubInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedPubsubInput"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub ManagedPubsubInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedPubsub</a>

---

##### `ManagedSqsInput`<sup>Optional</sup> <a name="ManagedSqsInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.managedSqsInput"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs ManagedSqsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueManagedSqs</a>

---

##### `ProvidedAqsInput`<sup>Optional</sup> <a name="ProvidedAqsInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedAqsInput"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs ProvidedAqsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a>

---

##### `ProvidedPubsubInput`<sup>Optional</sup> <a name="ProvidedPubsubInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedPubsubInput"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub ProvidedPubsubInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a>

---

##### `ProvidedSqsInput`<sup>Optional</sup> <a name="ProvidedSqsInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.providedSqsInput"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs ProvidedSqsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetManagedResourceId">ResetManagedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetQueueUrl">ResetQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetResourceGroup">ResetResourceGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManagedResourceId` <a name="ResetManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetManagedResourceId"></a>

```csharp
private void ResetManagedResourceId()
```

##### `ResetQueueUrl` <a name="ResetQueueUrl" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetQueueUrl"></a>

```csharp
private void ResetQueueUrl()
```

##### `ResetResourceGroup` <a name="ResetResourceGroup" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetResourceGroup"></a>

```csharp
private void ResetResourceGroup()
```

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.resetSubscriptionId"></a>

```csharp
private void ResetSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.managedResourceIdInput">ManagedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.queueUrlInput">QueueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.resourceGroupInput">ResourceGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.managedResourceId">ManagedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.queueUrl">QueueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.resourceGroup">ResourceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedResourceIdInput`<sup>Optional</sup> <a name="ManagedResourceIdInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.managedResourceIdInput"></a>

```csharp
public string ManagedResourceIdInput { get; }
```

- *Type:* string

---

##### `QueueUrlInput`<sup>Optional</sup> <a name="QueueUrlInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.queueUrlInput"></a>

```csharp
public string QueueUrlInput { get; }
```

- *Type:* string

---

##### `ResourceGroupInput`<sup>Optional</sup> <a name="ResourceGroupInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.resourceGroupInput"></a>

```csharp
public string ResourceGroupInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `ManagedResourceId`<sup>Required</sup> <a name="ManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.managedResourceId"></a>

```csharp
public string ManagedResourceId { get; }
```

- *Type:* string

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.queueUrl"></a>

```csharp
public string QueueUrl { get; }
```

- *Type:* string

---

##### `ResourceGroup`<sup>Required</sup> <a name="ResourceGroup" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.resourceGroup"></a>

```csharp
public string ResourceGroup { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedAqs</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resetManagedResourceId">ResetManagedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resetSubscriptionName">ResetSubscriptionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManagedResourceId` <a name="ResetManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resetManagedResourceId"></a>

```csharp
private void ResetManagedResourceId()
```

##### `ResetSubscriptionName` <a name="ResetSubscriptionName" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.resetSubscriptionName"></a>

```csharp
private void ResetSubscriptionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.managedResourceIdInput">ManagedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.subscriptionNameInput">SubscriptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.managedResourceId">ManagedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.subscriptionName">SubscriptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedResourceIdInput`<sup>Optional</sup> <a name="ManagedResourceIdInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.managedResourceIdInput"></a>

```csharp
public string ManagedResourceIdInput { get; }
```

- *Type:* string

---

##### `SubscriptionNameInput`<sup>Optional</sup> <a name="SubscriptionNameInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.subscriptionNameInput"></a>

```csharp
public string SubscriptionNameInput { get; }
```

- *Type:* string

---

##### `ManagedResourceId`<sup>Required</sup> <a name="ManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.managedResourceId"></a>

```csharp
public string ManagedResourceId { get; }
```

- *Type:* string

---

##### `SubscriptionName`<sup>Required</sup> <a name="SubscriptionName" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.subscriptionName"></a>

```csharp
public string SubscriptionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsubOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedPubsub</a>

---


### DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resetManagedResourceId">ResetManagedResourceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resetQueueUrl">ResetQueueUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManagedResourceId` <a name="ResetManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resetManagedResourceId"></a>

```csharp
private void ResetManagedResourceId()
```

##### `ResetQueueUrl` <a name="ResetQueueUrl" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.resetQueueUrl"></a>

```csharp
private void ResetQueueUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.managedResourceIdInput">ManagedResourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.queueUrlInput">QueueUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.managedResourceId">ManagedResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.queueUrl">QueueUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ManagedResourceIdInput`<sup>Optional</sup> <a name="ManagedResourceIdInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.managedResourceIdInput"></a>

```csharp
public string ManagedResourceIdInput { get; }
```

- *Type:* string

---

##### `QueueUrlInput`<sup>Optional</sup> <a name="QueueUrlInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.queueUrlInput"></a>

```csharp
public string QueueUrlInput { get; }
```

- *Type:* string

---

##### `ManagedResourceId`<sup>Required</sup> <a name="ManagedResourceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.managedResourceId"></a>

```csharp
public string ManagedResourceId { get; }
```

- *Type:* string

---

##### `QueueUrl`<sup>Required</sup> <a name="QueueUrl" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.queueUrl"></a>

```csharp
public string QueueUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueProvidedSqs</a>

---


### DataDatabricksExternalLocationExternalLocationInfoOutputReference <a name="DataDatabricksExternalLocationExternalLocationInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationExternalLocationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putEncryptionDetails">PutEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putFileEventQueue">PutFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetBrowseOnly">ResetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCredentialId">ResetCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCredentialName">ResetCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetEnableFileEvents">ResetEnableFileEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetEncryptionDetails">ResetEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetFallback">ResetFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetFileEventQueue">ResetFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetIsolationMode">ResetIsolationMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetReadOnly">ResetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEncryptionDetails` <a name="PutEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putEncryptionDetails"></a>

```csharp
private void PutEncryptionDetails(DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putEncryptionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a>

---

##### `PutFileEventQueue` <a name="PutFileEventQueue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putFileEventQueue"></a>

```csharp
private void PutFileEventQueue(DataDatabricksExternalLocationExternalLocationInfoFileEventQueue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.putFileEventQueue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a>

---

##### `ResetBrowseOnly` <a name="ResetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetBrowseOnly"></a>

```csharp
private void ResetBrowseOnly()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetCredentialId` <a name="ResetCredentialId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCredentialId"></a>

```csharp
private void ResetCredentialId()
```

##### `ResetCredentialName` <a name="ResetCredentialName" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetCredentialName"></a>

```csharp
private void ResetCredentialName()
```

##### `ResetEnableFileEvents` <a name="ResetEnableFileEvents" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetEnableFileEvents"></a>

```csharp
private void ResetEnableFileEvents()
```

##### `ResetEncryptionDetails` <a name="ResetEncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetEncryptionDetails"></a>

```csharp
private void ResetEncryptionDetails()
```

##### `ResetFallback` <a name="ResetFallback" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetFallback"></a>

```csharp
private void ResetFallback()
```

##### `ResetFileEventQueue` <a name="ResetFileEventQueue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetFileEventQueue"></a>

```csharp
private void ResetFileEventQueue()
```

##### `ResetIsolationMode` <a name="ResetIsolationMode" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetIsolationMode"></a>

```csharp
private void ResetIsolationMode()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetReadOnly` <a name="ResetReadOnly" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetReadOnly"></a>

```csharp
private void ResetReadOnly()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetUpdatedBy"></a>

```csharp
private void ResetUpdatedBy()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.encryptionDetails">EncryptionDetails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fileEventQueue">FileEventQueue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.browseOnlyInput">BrowseOnlyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialIdInput">CredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialNameInput">CredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.enableFileEventsInput">EnableFileEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.encryptionDetailsInput">EncryptionDetailsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fallbackInput">FallbackInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fileEventQueueInput">FileEventQueueInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.isolationModeInput">IsolationModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.readOnlyInput">ReadOnlyInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.browseOnly">BrowseOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialId">CredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialName">CredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.enableFileEvents">EnableFileEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fallback">Fallback</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.isolationMode">IsolationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.readOnly">ReadOnly</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionDetails`<sup>Required</sup> <a name="EncryptionDetails" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.encryptionDetails"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference EncryptionDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetailsOutputReference</a>

---

##### `FileEventQueue`<sup>Required</sup> <a name="FileEventQueue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fileEventQueue"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference FileEventQueue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference">DataDatabricksExternalLocationExternalLocationInfoFileEventQueueOutputReference</a>

---

##### `BrowseOnlyInput`<sup>Optional</sup> <a name="BrowseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.browseOnlyInput"></a>

```csharp
public bool|IResolvable BrowseOnlyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdAtInput"></a>

```csharp
public double CreatedAtInput { get; }
```

- *Type:* double

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `CredentialIdInput`<sup>Optional</sup> <a name="CredentialIdInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialIdInput"></a>

```csharp
public string CredentialIdInput { get; }
```

- *Type:* string

---

##### `CredentialNameInput`<sup>Optional</sup> <a name="CredentialNameInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialNameInput"></a>

```csharp
public string CredentialNameInput { get; }
```

- *Type:* string

---

##### `EnableFileEventsInput`<sup>Optional</sup> <a name="EnableFileEventsInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.enableFileEventsInput"></a>

```csharp
public bool|IResolvable EnableFileEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `EncryptionDetailsInput`<sup>Optional</sup> <a name="EncryptionDetailsInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.encryptionDetailsInput"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails EncryptionDetailsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails">DataDatabricksExternalLocationExternalLocationInfoEncryptionDetails</a>

---

##### `FallbackInput`<sup>Optional</sup> <a name="FallbackInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fallbackInput"></a>

```csharp
public bool|IResolvable FallbackInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `FileEventQueueInput`<sup>Optional</sup> <a name="FileEventQueueInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fileEventQueueInput"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfoFileEventQueue FileEventQueueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoFileEventQueue">DataDatabricksExternalLocationExternalLocationInfoFileEventQueue</a>

---

##### `IsolationModeInput`<sup>Optional</sup> <a name="IsolationModeInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.isolationModeInput"></a>

```csharp
public string IsolationModeInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `ReadOnlyInput`<sup>Optional</sup> <a name="ReadOnlyInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.readOnlyInput"></a>

```csharp
public bool|IResolvable ReadOnlyInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedAtInput"></a>

```csharp
public double UpdatedAtInput { get; }
```

- *Type:* double

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedByInput"></a>

```csharp
public string UpdatedByInput { get; }
```

- *Type:* string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.browseOnly"></a>

```csharp
public bool|IResolvable BrowseOnly { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CredentialId`<sup>Required</sup> <a name="CredentialId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialId"></a>

```csharp
public string CredentialId { get; }
```

- *Type:* string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.credentialName"></a>

```csharp
public string CredentialName { get; }
```

- *Type:* string

---

##### `EnableFileEvents`<sup>Required</sup> <a name="EnableFileEvents" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.enableFileEvents"></a>

```csharp
public bool|IResolvable EnableFileEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Fallback`<sup>Required</sup> <a name="Fallback" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.fallback"></a>

```csharp
public bool|IResolvable Fallback { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IsolationMode`<sup>Required</sup> <a name="IsolationMode" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.isolationMode"></a>

```csharp
public string IsolationMode { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `ReadOnly`<sup>Required</sup> <a name="ReadOnly" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.readOnly"></a>

```csharp
public bool|IResolvable ReadOnly { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksExternalLocationExternalLocationInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationExternalLocationInfo">DataDatabricksExternalLocationExternalLocationInfo</a>

---


### DataDatabricksExternalLocationProviderConfigOutputReference <a name="DataDatabricksExternalLocationProviderConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksExternalLocationProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfig">DataDatabricksExternalLocationProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksExternalLocationProviderConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksExternalLocation.DataDatabricksExternalLocationProviderConfig">DataDatabricksExternalLocationProviderConfig</a>

---



