# `dataDatabricksMlflowModel` Submodule <a name="`dataDatabricksMlflowModel` Submodule" id="@cdktf/provider-databricks.dataDatabricksMlflowModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMlflowModel <a name="DataDatabricksMlflowModel" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model databricks_mlflow_model}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMlflowModel(Construct Scope, string Id, DataDatabricksMlflowModelConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig">DataDatabricksMlflowModelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig">DataDatabricksMlflowModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.putLatestVersions">PutLatestVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetLatestVersions">ResetLatestVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetPermissionLevel">ResetPermissionLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutLatestVersions` <a name="PutLatestVersions" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.putLatestVersions"></a>

```csharp
private void PutLatestVersions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.putLatestVersions.parameter.value"></a>

- *Type:* object

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.putTags.parameter.value"></a>

- *Type:* object

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLatestVersions` <a name="ResetLatestVersions" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetLatestVersions"></a>

```csharp
private void ResetLatestVersions()
```

##### `ResetPermissionLevel` <a name="ResetPermissionLevel" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetPermissionLevel"></a>

```csharp
private void ResetPermissionLevel()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.resetUserId"></a>

```csharp
private void ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksMlflowModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMlflowModel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMlflowModel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMlflowModel.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMlflowModel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksMlflowModel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksMlflowModel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksMlflowModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksMlflowModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.latestVersions">LatestVersions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList">DataDatabricksMlflowModelLatestVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList">DataDatabricksMlflowModelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.latestVersionsInput">LatestVersionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.permissionLevelInput">PermissionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.permissionLevel">PermissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.userId">UserId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LatestVersions`<sup>Required</sup> <a name="LatestVersions" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.latestVersions"></a>

```csharp
public DataDatabricksMlflowModelLatestVersionsList LatestVersions { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList">DataDatabricksMlflowModelLatestVersionsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.tags"></a>

```csharp
public DataDatabricksMlflowModelTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList">DataDatabricksMlflowModelTagsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LatestVersionsInput`<sup>Optional</sup> <a name="LatestVersionsInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.latestVersionsInput"></a>

```csharp
public object LatestVersionsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PermissionLevelInput`<sup>Optional</sup> <a name="PermissionLevelInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.permissionLevelInput"></a>

```csharp
public string PermissionLevelInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PermissionLevel`<sup>Required</sup> <a name="PermissionLevel" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.permissionLevel"></a>

```csharp
public string PermissionLevel { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMlflowModelConfig <a name="DataDatabricksMlflowModelConfig" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMlflowModelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    object LatestVersions = null,
    string PermissionLevel = null,
    object Tags = null,
    string UserId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#name DataDatabricksMlflowModel#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#description DataDatabricksMlflowModel#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.latestVersions">LatestVersions</a></code> | <code>object</code> | latest_versions block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.permissionLevel">PermissionLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#permission_level DataDatabricksMlflowModel#permission_level}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#user_id DataDatabricksMlflowModel#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#name DataDatabricksMlflowModel#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#description DataDatabricksMlflowModel#description}.

---

##### `LatestVersions`<sup>Optional</sup> <a name="LatestVersions" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.latestVersions"></a>

```csharp
public object LatestVersions { get; set; }
```

- *Type:* object

latest_versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#latest_versions DataDatabricksMlflowModel#latest_versions}

---

##### `PermissionLevel`<sup>Optional</sup> <a name="PermissionLevel" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.permissionLevel"></a>

```csharp
public string PermissionLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#permission_level DataDatabricksMlflowModel#permission_level}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#tags DataDatabricksMlflowModel#tags}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelConfig.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#user_id DataDatabricksMlflowModel#user_id}.

---

### DataDatabricksMlflowModelLatestVersions <a name="DataDatabricksMlflowModelLatestVersions" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMlflowModelLatestVersions {
    double CreationTimestamp = null,
    string CurrentStage = null,
    string Description = null,
    double LastUpdatedTimestamp = null,
    string Name = null,
    string RunId = null,
    string RunLink = null,
    string Source = null,
    string Status = null,
    string StatusMessage = null,
    object Tags = null,
    string UserId = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.creationTimestamp">CreationTimestamp</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#creation_timestamp DataDatabricksMlflowModel#creation_timestamp}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.currentStage">CurrentStage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#current_stage DataDatabricksMlflowModel#current_stage}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#description DataDatabricksMlflowModel#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#last_updated_timestamp DataDatabricksMlflowModel#last_updated_timestamp}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#name DataDatabricksMlflowModel#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.runId">RunId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#run_id DataDatabricksMlflowModel#run_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.runLink">RunLink</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#run_link DataDatabricksMlflowModel#run_link}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#source DataDatabricksMlflowModel#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#status DataDatabricksMlflowModel#status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.statusMessage">StatusMessage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#status_message DataDatabricksMlflowModel#status_message}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.tags">Tags</a></code> | <code>object</code> | tags block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.userId">UserId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#user_id DataDatabricksMlflowModel#user_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#version DataDatabricksMlflowModel#version}. |

---

##### `CreationTimestamp`<sup>Optional</sup> <a name="CreationTimestamp" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.creationTimestamp"></a>

```csharp
public double CreationTimestamp { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#creation_timestamp DataDatabricksMlflowModel#creation_timestamp}.

---

##### `CurrentStage`<sup>Optional</sup> <a name="CurrentStage" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.currentStage"></a>

```csharp
public string CurrentStage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#current_stage DataDatabricksMlflowModel#current_stage}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#description DataDatabricksMlflowModel#description}.

---

##### `LastUpdatedTimestamp`<sup>Optional</sup> <a name="LastUpdatedTimestamp" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.lastUpdatedTimestamp"></a>

```csharp
public double LastUpdatedTimestamp { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#last_updated_timestamp DataDatabricksMlflowModel#last_updated_timestamp}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#name DataDatabricksMlflowModel#name}.

---

##### `RunId`<sup>Optional</sup> <a name="RunId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.runId"></a>

```csharp
public string RunId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#run_id DataDatabricksMlflowModel#run_id}.

---

##### `RunLink`<sup>Optional</sup> <a name="RunLink" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.runLink"></a>

```csharp
public string RunLink { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#run_link DataDatabricksMlflowModel#run_link}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#source DataDatabricksMlflowModel#source}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#status DataDatabricksMlflowModel#status}.

---

##### `StatusMessage`<sup>Optional</sup> <a name="StatusMessage" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.statusMessage"></a>

```csharp
public string StatusMessage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#status_message DataDatabricksMlflowModel#status_message}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#tags DataDatabricksMlflowModel#tags}

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.userId"></a>

```csharp
public string UserId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#user_id DataDatabricksMlflowModel#user_id}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersions.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#version DataDatabricksMlflowModel#version}.

---

### DataDatabricksMlflowModelLatestVersionsTags <a name="DataDatabricksMlflowModelLatestVersionsTags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMlflowModelLatestVersionsTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#key DataDatabricksMlflowModel#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#value DataDatabricksMlflowModel#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#key DataDatabricksMlflowModel#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#value DataDatabricksMlflowModel#value}.

---

### DataDatabricksMlflowModelTags <a name="DataDatabricksMlflowModelTags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMlflowModelTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#key DataDatabricksMlflowModel#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#value DataDatabricksMlflowModel#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#key DataDatabricksMlflowModel#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/mlflow_model#value DataDatabricksMlflowModel#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMlflowModelLatestVersionsList <a name="DataDatabricksMlflowModelLatestVersionsList" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMlflowModelLatestVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.get"></a>

```csharp
private DataDatabricksMlflowModelLatestVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksMlflowModelLatestVersionsOutputReference <a name="DataDatabricksMlflowModelLatestVersionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMlflowModelLatestVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetCreationTimestamp">ResetCreationTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetCurrentStage">ResetCurrentStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetLastUpdatedTimestamp">ResetLastUpdatedTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetRunId">ResetRunId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetRunLink">ResetRunLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetStatusMessage">ResetStatusMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetUserId">ResetUserId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTags` <a name="PutTags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.putTags.parameter.value"></a>

- *Type:* object

---

##### `ResetCreationTimestamp` <a name="ResetCreationTimestamp" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetCreationTimestamp"></a>

```csharp
private void ResetCreationTimestamp()
```

##### `ResetCurrentStage` <a name="ResetCurrentStage" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetCurrentStage"></a>

```csharp
private void ResetCurrentStage()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLastUpdatedTimestamp` <a name="ResetLastUpdatedTimestamp" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetLastUpdatedTimestamp"></a>

```csharp
private void ResetLastUpdatedTimestamp()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRunId` <a name="ResetRunId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetRunId"></a>

```csharp
private void ResetRunId()
```

##### `ResetRunLink` <a name="ResetRunLink" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetRunLink"></a>

```csharp
private void ResetRunLink()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetStatusMessage` <a name="ResetStatusMessage" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetStatusMessage"></a>

```csharp
private void ResetStatusMessage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetUserId"></a>

```csharp
private void ResetUserId()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList">DataDatabricksMlflowModelLatestVersionsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.creationTimestampInput">CreationTimestampInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.currentStageInput">CurrentStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.lastUpdatedTimestampInput">LastUpdatedTimestampInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runIdInput">RunIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runLinkInput">RunLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.statusMessageInput">StatusMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.userIdInput">UserIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.creationTimestamp">CreationTimestamp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.currentStage">CurrentStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runId">RunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runLink">RunLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.statusMessage">StatusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.tags"></a>

```csharp
public DataDatabricksMlflowModelLatestVersionsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList">DataDatabricksMlflowModelLatestVersionsTagsList</a>

---

##### `CreationTimestampInput`<sup>Optional</sup> <a name="CreationTimestampInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.creationTimestampInput"></a>

```csharp
public double CreationTimestampInput { get; }
```

- *Type:* double

---

##### `CurrentStageInput`<sup>Optional</sup> <a name="CurrentStageInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.currentStageInput"></a>

```csharp
public string CurrentStageInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LastUpdatedTimestampInput`<sup>Optional</sup> <a name="LastUpdatedTimestampInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.lastUpdatedTimestampInput"></a>

```csharp
public double LastUpdatedTimestampInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RunIdInput`<sup>Optional</sup> <a name="RunIdInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runIdInput"></a>

```csharp
public string RunIdInput { get; }
```

- *Type:* string

---

##### `RunLinkInput`<sup>Optional</sup> <a name="RunLinkInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runLinkInput"></a>

```csharp
public string RunLinkInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `StatusMessageInput`<sup>Optional</sup> <a name="StatusMessageInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.statusMessageInput"></a>

```csharp
public string StatusMessageInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.userIdInput"></a>

```csharp
public string UserIdInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.creationTimestamp"></a>

```csharp
public double CreationTimestamp { get; }
```

- *Type:* double

---

##### `CurrentStage`<sup>Required</sup> <a name="CurrentStage" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.currentStage"></a>

```csharp
public string CurrentStage { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.lastUpdatedTimestamp"></a>

```csharp
public double LastUpdatedTimestamp { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RunId`<sup>Required</sup> <a name="RunId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runId"></a>

```csharp
public string RunId { get; }
```

- *Type:* string

---

##### `RunLink`<sup>Required</sup> <a name="RunLink" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.runLink"></a>

```csharp
public string RunLink { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.statusMessage"></a>

```csharp
public string StatusMessage { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksMlflowModelLatestVersionsTagsList <a name="DataDatabricksMlflowModelLatestVersionsTagsList" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMlflowModelLatestVersionsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.get"></a>

```csharp
private DataDatabricksMlflowModelLatestVersionsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksMlflowModelLatestVersionsTagsOutputReference <a name="DataDatabricksMlflowModelLatestVersionsTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMlflowModelLatestVersionsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelLatestVersionsTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksMlflowModelTagsList <a name="DataDatabricksMlflowModelTagsList" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMlflowModelTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.get"></a>

```csharp
private DataDatabricksMlflowModelTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksMlflowModelTagsOutputReference <a name="DataDatabricksMlflowModelTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMlflowModelTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMlflowModel.DataDatabricksMlflowModelTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



