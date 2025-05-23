# `dataDatabricksAlertV2` Submodule <a name="`dataDatabricksAlertV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksAlertV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAlertV2 <a name="DataDatabricksAlertV2" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2 databricks_alert_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2(Construct Scope, string Id, DataDatabricksAlertV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config">DataDatabricksAlertV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config">DataDatabricksAlertV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation">PutEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomDescription">ResetCustomDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomSummary">ResetCustomSummary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetEvaluation">ResetEvaluation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetParentPath">ResetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetQueryText">ResetQueryText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEvaluation` <a name="PutEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation"></a>

```csharp
private void PutEvaluation(DataDatabricksAlertV2Evaluation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putEvaluation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule"></a>

```csharp
private void PutSchedule(DataDatabricksAlertV2Schedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>

---

##### `ResetCustomDescription` <a name="ResetCustomDescription" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomDescription"></a>

```csharp
private void ResetCustomDescription()
```

##### `ResetCustomSummary` <a name="ResetCustomSummary" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetCustomSummary"></a>

```csharp
private void ResetCustomSummary()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetEvaluation` <a name="ResetEvaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetEvaluation"></a>

```csharp
private void ResetEvaluation()
```

##### `ResetParentPath` <a name="ResetParentPath" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetParentPath"></a>

```csharp
private void ResetParentPath()
```

##### `ResetQueryText` <a name="ResetQueryText" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetQueryText"></a>

```csharp
private void ResetQueryText()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.resetWarehouseId"></a>

```csharp
private void ResetWarehouseId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAlertV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAlertV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAlertV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAlertV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAlertV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksAlertV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAlertV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAlertV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAlertV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluation">Evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference">DataDatabricksAlertV2EvaluationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.ownerUserName">OwnerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserName">RunAsUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference">DataDatabricksAlertV2ScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescriptionInput">CustomDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummaryInput">CustomSummaryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluationInput">EvaluationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPathInput">ParentPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryTextInput">QueryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.scheduleInput">ScheduleInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescription">CustomDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummary">CustomSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPath">ParentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryText">QueryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Evaluation`<sup>Required</sup> <a name="Evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluation"></a>

```csharp
public DataDatabricksAlertV2EvaluationOutputReference Evaluation { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference">DataDatabricksAlertV2EvaluationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `OwnerUserName`<sup>Required</sup> <a name="OwnerUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.ownerUserName"></a>

```csharp
public string OwnerUserName { get; }
```

- *Type:* string

---

##### `RunAsUserName`<sup>Required</sup> <a name="RunAsUserName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.runAsUserName"></a>

```csharp
public string RunAsUserName { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.schedule"></a>

```csharp
public DataDatabricksAlertV2ScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference">DataDatabricksAlertV2ScheduleOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `CustomDescriptionInput`<sup>Optional</sup> <a name="CustomDescriptionInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescriptionInput"></a>

```csharp
public string CustomDescriptionInput { get; }
```

- *Type:* string

---

##### `CustomSummaryInput`<sup>Optional</sup> <a name="CustomSummaryInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummaryInput"></a>

```csharp
public string CustomSummaryInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EvaluationInput`<sup>Optional</sup> <a name="EvaluationInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.evaluationInput"></a>

```csharp
public object EvaluationInput { get; }
```

- *Type:* object

---

##### `ParentPathInput`<sup>Optional</sup> <a name="ParentPathInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPathInput"></a>

```csharp
public string ParentPathInput { get; }
```

- *Type:* string

---

##### `QueryTextInput`<sup>Optional</sup> <a name="QueryTextInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryTextInput"></a>

```csharp
public string QueryTextInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.scheduleInput"></a>

```csharp
public object ScheduleInput { get; }
```

- *Type:* object

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseIdInput"></a>

```csharp
public string WarehouseIdInput { get; }
```

- *Type:* string

---

##### `CustomDescription`<sup>Required</sup> <a name="CustomDescription" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customDescription"></a>

```csharp
public string CustomDescription { get; }
```

- *Type:* string

---

##### `CustomSummary`<sup>Required</sup> <a name="CustomSummary" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.customSummary"></a>

```csharp
public string CustomSummary { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.parentPath"></a>

```csharp
public string ParentPath { get; }
```

- *Type:* string

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.queryText"></a>

```csharp
public string QueryText { get; }
```

- *Type:* string

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAlertV2Config <a name="DataDatabricksAlertV2Config" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CustomDescription = null,
    string CustomSummary = null,
    string DisplayName = null,
    DataDatabricksAlertV2Evaluation Evaluation = null,
    string ParentPath = null,
    string QueryText = null,
    DataDatabricksAlertV2Schedule Schedule = null,
    string WarehouseId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customDescription">CustomDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#custom_description DataDatabricksAlertV2#custom_description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customSummary">CustomSummary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#custom_summary DataDatabricksAlertV2#custom_summary}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#display_name DataDatabricksAlertV2#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.evaluation">Evaluation</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#evaluation DataDatabricksAlertV2#evaluation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.parentPath">ParentPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#parent_path DataDatabricksAlertV2#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.queryText">QueryText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#query_text DataDatabricksAlertV2#query_text}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#schedule DataDatabricksAlertV2#schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.warehouseId">WarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#warehouse_id DataDatabricksAlertV2#warehouse_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomDescription`<sup>Optional</sup> <a name="CustomDescription" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customDescription"></a>

```csharp
public string CustomDescription { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#custom_description DataDatabricksAlertV2#custom_description}.

---

##### `CustomSummary`<sup>Optional</sup> <a name="CustomSummary" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.customSummary"></a>

```csharp
public string CustomSummary { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#custom_summary DataDatabricksAlertV2#custom_summary}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#display_name DataDatabricksAlertV2#display_name}.

---

##### `Evaluation`<sup>Optional</sup> <a name="Evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.evaluation"></a>

```csharp
public DataDatabricksAlertV2Evaluation Evaluation { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation">DataDatabricksAlertV2Evaluation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#evaluation DataDatabricksAlertV2#evaluation}.

---

##### `ParentPath`<sup>Optional</sup> <a name="ParentPath" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.parentPath"></a>

```csharp
public string ParentPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#parent_path DataDatabricksAlertV2#parent_path}.

---

##### `QueryText`<sup>Optional</sup> <a name="QueryText" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.queryText"></a>

```csharp
public string QueryText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#query_text DataDatabricksAlertV2#query_text}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.schedule"></a>

```csharp
public DataDatabricksAlertV2Schedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule">DataDatabricksAlertV2Schedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#schedule DataDatabricksAlertV2#schedule}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Config.property.warehouseId"></a>

```csharp
public string WarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#warehouse_id DataDatabricksAlertV2#warehouse_id}.

---

### DataDatabricksAlertV2Evaluation <a name="DataDatabricksAlertV2Evaluation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2Evaluation {
    string ComparisonOperator = null,
    string EmptyResultState = null,
    DataDatabricksAlertV2EvaluationNotification Notification = null,
    DataDatabricksAlertV2EvaluationSource Source = null,
    DataDatabricksAlertV2EvaluationThreshold Threshold = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#comparison_operator DataDatabricksAlertV2#comparison_operator}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.emptyResultState">EmptyResultState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#empty_result_state DataDatabricksAlertV2#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#notification DataDatabricksAlertV2#notification}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.source">Source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#source DataDatabricksAlertV2#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.threshold">Threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#threshold DataDatabricksAlertV2#threshold}. |

---

##### `ComparisonOperator`<sup>Optional</sup> <a name="ComparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#comparison_operator DataDatabricksAlertV2#comparison_operator}.

---

##### `EmptyResultState`<sup>Optional</sup> <a name="EmptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.emptyResultState"></a>

```csharp
public string EmptyResultState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#empty_result_state DataDatabricksAlertV2#empty_result_state}.

---

##### `Notification`<sup>Optional</sup> <a name="Notification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.notification"></a>

```csharp
public DataDatabricksAlertV2EvaluationNotification Notification { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#notification DataDatabricksAlertV2#notification}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.source"></a>

```csharp
public DataDatabricksAlertV2EvaluationSource Source { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#source DataDatabricksAlertV2#source}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Evaluation.property.threshold"></a>

```csharp
public DataDatabricksAlertV2EvaluationThreshold Threshold { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#threshold DataDatabricksAlertV2#threshold}.

---

### DataDatabricksAlertV2EvaluationNotification <a name="DataDatabricksAlertV2EvaluationNotification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationNotification {
    object NotifyOnOk = null,
    double RetriggerSeconds = null,
    object Subscriptions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.notifyOnOk">NotifyOnOk</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#notify_on_ok DataDatabricksAlertV2#notify_on_ok}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.retriggerSeconds">RetriggerSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#retrigger_seconds DataDatabricksAlertV2#retrigger_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.subscriptions">Subscriptions</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#subscriptions DataDatabricksAlertV2#subscriptions}. |

---

##### `NotifyOnOk`<sup>Optional</sup> <a name="NotifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.notifyOnOk"></a>

```csharp
public object NotifyOnOk { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#notify_on_ok DataDatabricksAlertV2#notify_on_ok}.

---

##### `RetriggerSeconds`<sup>Optional</sup> <a name="RetriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.retriggerSeconds"></a>

```csharp
public double RetriggerSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#retrigger_seconds DataDatabricksAlertV2#retrigger_seconds}.

---

##### `Subscriptions`<sup>Optional</sup> <a name="Subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification.property.subscriptions"></a>

```csharp
public object Subscriptions { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#subscriptions DataDatabricksAlertV2#subscriptions}.

---

### DataDatabricksAlertV2EvaluationNotificationSubscriptions <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationNotificationSubscriptions {
    string DestinationId = null,
    string UserEmail = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.destinationId">DestinationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#destination_id DataDatabricksAlertV2#destination_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.userEmail">UserEmail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#user_email DataDatabricksAlertV2#user_email}. |

---

##### `DestinationId`<sup>Optional</sup> <a name="DestinationId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.destinationId"></a>

```csharp
public string DestinationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#destination_id DataDatabricksAlertV2#destination_id}.

---

##### `UserEmail`<sup>Optional</sup> <a name="UserEmail" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptions.property.userEmail"></a>

```csharp
public string UserEmail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#user_email DataDatabricksAlertV2#user_email}.

---

### DataDatabricksAlertV2EvaluationSource <a name="DataDatabricksAlertV2EvaluationSource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationSource {
    string Aggregation = null,
    string Display = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.aggregation">Aggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.display">Display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}. |

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.aggregation"></a>

```csharp
public string Aggregation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.display"></a>

```csharp
public string Display { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}.

---

### DataDatabricksAlertV2EvaluationThreshold <a name="DataDatabricksAlertV2EvaluationThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationThreshold {
    DataDatabricksAlertV2EvaluationThresholdColumn Column = null,
    DataDatabricksAlertV2EvaluationThresholdValue Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.column">Column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#column DataDatabricksAlertV2#column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#value DataDatabricksAlertV2#value}. |

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.column"></a>

```csharp
public DataDatabricksAlertV2EvaluationThresholdColumn Column { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#column DataDatabricksAlertV2#column}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold.property.value"></a>

```csharp
public DataDatabricksAlertV2EvaluationThresholdValue Value { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#value DataDatabricksAlertV2#value}.

---

### DataDatabricksAlertV2EvaluationThresholdColumn <a name="DataDatabricksAlertV2EvaluationThresholdColumn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationThresholdColumn {
    string Aggregation = null,
    string Display = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.aggregation">Aggregation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.display">Display</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}. |

---

##### `Aggregation`<sup>Optional</sup> <a name="Aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.aggregation"></a>

```csharp
public string Aggregation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#aggregation DataDatabricksAlertV2#aggregation}.

---

##### `Display`<sup>Optional</sup> <a name="Display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.display"></a>

```csharp
public string Display { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#display DataDatabricksAlertV2#display}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#name DataDatabricksAlertV2#name}.

---

### DataDatabricksAlertV2EvaluationThresholdValue <a name="DataDatabricksAlertV2EvaluationThresholdValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationThresholdValue {
    object BoolValue = null,
    double DoubleValue = null,
    string StringValue = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.boolValue">BoolValue</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#bool_value DataDatabricksAlertV2#bool_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.doubleValue">DoubleValue</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#double_value DataDatabricksAlertV2#double_value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.stringValue">StringValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#string_value DataDatabricksAlertV2#string_value}. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.boolValue"></a>

```csharp
public object BoolValue { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#bool_value DataDatabricksAlertV2#bool_value}.

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.doubleValue"></a>

```csharp
public double DoubleValue { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#double_value DataDatabricksAlertV2#double_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue.property.stringValue"></a>

```csharp
public string StringValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#string_value DataDatabricksAlertV2#string_value}.

---

### DataDatabricksAlertV2Schedule <a name="DataDatabricksAlertV2Schedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2Schedule {
    string PauseStatus = null,
    string QuartzCronSchedule = null,
    string TimezoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.pauseStatus">PauseStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#pause_status DataDatabricksAlertV2#pause_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.quartzCronSchedule">QuartzCronSchedule</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#quartz_cron_schedule DataDatabricksAlertV2#quartz_cron_schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.timezoneId">TimezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#timezone_id DataDatabricksAlertV2#timezone_id}. |

---

##### `PauseStatus`<sup>Optional</sup> <a name="PauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.pauseStatus"></a>

```csharp
public string PauseStatus { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#pause_status DataDatabricksAlertV2#pause_status}.

---

##### `QuartzCronSchedule`<sup>Optional</sup> <a name="QuartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.quartzCronSchedule"></a>

```csharp
public string QuartzCronSchedule { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#quartz_cron_schedule DataDatabricksAlertV2#quartz_cron_schedule}.

---

##### `TimezoneId`<sup>Optional</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2Schedule.property.timezoneId"></a>

```csharp
public string TimezoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.81.0/docs/data-sources/alert_v2#timezone_id DataDatabricksAlertV2#timezone_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAlertV2EvaluationNotificationOutputReference <a name="DataDatabricksAlertV2EvaluationNotificationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationNotificationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions">PutSubscriptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetNotifyOnOk">ResetNotifyOnOk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetRetriggerSeconds">ResetRetriggerSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetSubscriptions">ResetSubscriptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSubscriptions` <a name="PutSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions"></a>

```csharp
private void PutSubscriptions(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.putSubscriptions.parameter.value"></a>

- *Type:* object

---

##### `ResetNotifyOnOk` <a name="ResetNotifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetNotifyOnOk"></a>

```csharp
private void ResetNotifyOnOk()
```

##### `ResetRetriggerSeconds` <a name="ResetRetriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetRetriggerSeconds"></a>

```csharp
private void ResetRetriggerSeconds()
```

##### `ResetSubscriptions` <a name="ResetSubscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.resetSubscriptions"></a>

```csharp
private void ResetSubscriptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptions">Subscriptions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList">DataDatabricksAlertV2EvaluationNotificationSubscriptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOkInput">NotifyOnOkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSecondsInput">RetriggerSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptionsInput">SubscriptionsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOk">NotifyOnOk</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSeconds">RetriggerSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Subscriptions`<sup>Required</sup> <a name="Subscriptions" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptions"></a>

```csharp
public DataDatabricksAlertV2EvaluationNotificationSubscriptionsList Subscriptions { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList">DataDatabricksAlertV2EvaluationNotificationSubscriptionsList</a>

---

##### `NotifyOnOkInput`<sup>Optional</sup> <a name="NotifyOnOkInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOkInput"></a>

```csharp
public object NotifyOnOkInput { get; }
```

- *Type:* object

---

##### `RetriggerSecondsInput`<sup>Optional</sup> <a name="RetriggerSecondsInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSecondsInput"></a>

```csharp
public double RetriggerSecondsInput { get; }
```

- *Type:* double

---

##### `SubscriptionsInput`<sup>Optional</sup> <a name="SubscriptionsInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.subscriptionsInput"></a>

```csharp
public object SubscriptionsInput { get; }
```

- *Type:* object

---

##### `NotifyOnOk`<sup>Required</sup> <a name="NotifyOnOk" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.notifyOnOk"></a>

```csharp
public object NotifyOnOk { get; }
```

- *Type:* object

---

##### `RetriggerSeconds`<sup>Required</sup> <a name="RetriggerSeconds" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.retriggerSeconds"></a>

```csharp
public double RetriggerSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAlertV2EvaluationNotificationSubscriptionsList <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptionsList" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationNotificationSubscriptionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get"></a>

```csharp
private DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference <a name="DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetDestinationId">ResetDestinationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetUserEmail">ResetUserEmail</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationId` <a name="ResetDestinationId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetDestinationId"></a>

```csharp
private void ResetDestinationId()
```

##### `ResetUserEmail` <a name="ResetUserEmail" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.resetUserEmail"></a>

```csharp
private void ResetUserEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput">DestinationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmailInput">UserEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationId">DestinationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmail">UserEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationIdInput`<sup>Optional</sup> <a name="DestinationIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationIdInput"></a>

```csharp
public string DestinationIdInput { get; }
```

- *Type:* string

---

##### `UserEmailInput`<sup>Optional</sup> <a name="UserEmailInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmailInput"></a>

```csharp
public string UserEmailInput { get; }
```

- *Type:* string

---

##### `DestinationId`<sup>Required</sup> <a name="DestinationId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.destinationId"></a>

```csharp
public string DestinationId { get; }
```

- *Type:* string

---

##### `UserEmail`<sup>Required</sup> <a name="UserEmail" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.userEmail"></a>

```csharp
public string UserEmail { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationSubscriptionsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAlertV2EvaluationOutputReference <a name="DataDatabricksAlertV2EvaluationOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification">PutNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetComparisonOperator">ResetComparisonOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetEmptyResultState">ResetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetNotification">ResetNotification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotification` <a name="PutNotification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification"></a>

```csharp
private void PutNotification(DataDatabricksAlertV2EvaluationNotification Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putNotification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotification">DataDatabricksAlertV2EvaluationNotification</a>

---

##### `PutSource` <a name="PutSource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource"></a>

```csharp
private void PutSource(DataDatabricksAlertV2EvaluationSource Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSource">DataDatabricksAlertV2EvaluationSource</a>

---

##### `PutThreshold` <a name="PutThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold"></a>

```csharp
private void PutThreshold(DataDatabricksAlertV2EvaluationThreshold Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThreshold">DataDatabricksAlertV2EvaluationThreshold</a>

---

##### `ResetComparisonOperator` <a name="ResetComparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetComparisonOperator"></a>

```csharp
private void ResetComparisonOperator()
```

##### `ResetEmptyResultState` <a name="ResetEmptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetEmptyResultState"></a>

```csharp
private void ResetEmptyResultState()
```

##### `ResetNotification` <a name="ResetNotification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetNotification"></a>

```csharp
private void ResetNotification()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.resetThreshold"></a>

```csharp
private void ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.lastEvaluatedAt">LastEvaluatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notification">Notification</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference">DataDatabricksAlertV2EvaluationNotificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.source">Source</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference">DataDatabricksAlertV2EvaluationSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.threshold">Threshold</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference">DataDatabricksAlertV2EvaluationThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperatorInput">ComparisonOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultStateInput">EmptyResultStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notificationInput">NotificationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.sourceInput">SourceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperator">ComparisonOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultState">EmptyResultState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastEvaluatedAt`<sup>Required</sup> <a name="LastEvaluatedAt" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.lastEvaluatedAt"></a>

```csharp
public string LastEvaluatedAt { get; }
```

- *Type:* string

---

##### `Notification`<sup>Required</sup> <a name="Notification" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notification"></a>

```csharp
public DataDatabricksAlertV2EvaluationNotificationOutputReference Notification { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationNotificationOutputReference">DataDatabricksAlertV2EvaluationNotificationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.source"></a>

```csharp
public DataDatabricksAlertV2EvaluationSourceOutputReference Source { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference">DataDatabricksAlertV2EvaluationSourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.threshold"></a>

```csharp
public DataDatabricksAlertV2EvaluationThresholdOutputReference Threshold { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference">DataDatabricksAlertV2EvaluationThresholdOutputReference</a>

---

##### `ComparisonOperatorInput`<sup>Optional</sup> <a name="ComparisonOperatorInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperatorInput"></a>

```csharp
public string ComparisonOperatorInput { get; }
```

- *Type:* string

---

##### `EmptyResultStateInput`<sup>Optional</sup> <a name="EmptyResultStateInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultStateInput"></a>

```csharp
public string EmptyResultStateInput { get; }
```

- *Type:* string

---

##### `NotificationInput`<sup>Optional</sup> <a name="NotificationInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.notificationInput"></a>

```csharp
public object NotificationInput { get; }
```

- *Type:* object

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.sourceInput"></a>

```csharp
public object SourceInput { get; }
```

- *Type:* object

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.thresholdInput"></a>

```csharp
public object ThresholdInput { get; }
```

- *Type:* object

---

##### `ComparisonOperator`<sup>Required</sup> <a name="ComparisonOperator" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.comparisonOperator"></a>

```csharp
public string ComparisonOperator { get; }
```

- *Type:* string

---

##### `EmptyResultState`<sup>Required</sup> <a name="EmptyResultState" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.emptyResultState"></a>

```csharp
public string EmptyResultState { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAlertV2EvaluationSourceOutputReference <a name="DataDatabricksAlertV2EvaluationSourceOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationSourceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetAggregation"></a>

```csharp
private void ResetAggregation()
```

##### `ResetDisplay` <a name="ResetDisplay" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetDisplay"></a>

```csharp
private void ResetDisplay()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.displayInput">DisplayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregationInput"></a>

```csharp
public string AggregationInput { get; }
```

- *Type:* string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.displayInput"></a>

```csharp
public string DisplayInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationSourceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAlertV2EvaluationThresholdColumnOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdColumnOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationThresholdColumnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetAggregation">ResetAggregation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetDisplay">ResetDisplay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAggregation` <a name="ResetAggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetAggregation"></a>

```csharp
private void ResetAggregation()
```

##### `ResetDisplay` <a name="ResetDisplay" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetDisplay"></a>

```csharp
private void ResetDisplay()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregationInput">AggregationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.displayInput">DisplayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregation">Aggregation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.display">Display</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AggregationInput`<sup>Optional</sup> <a name="AggregationInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregationInput"></a>

```csharp
public string AggregationInput { get; }
```

- *Type:* string

---

##### `DisplayInput`<sup>Optional</sup> <a name="DisplayInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.displayInput"></a>

```csharp
public string DisplayInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Aggregation`<sup>Required</sup> <a name="Aggregation" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.aggregation"></a>

```csharp
public string Aggregation { get; }
```

- *Type:* string

---

##### `Display`<sup>Required</sup> <a name="Display" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.display"></a>

```csharp
public string Display { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAlertV2EvaluationThresholdOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationThresholdOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn">PutColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumn` <a name="PutColumn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn"></a>

```csharp
private void PutColumn(DataDatabricksAlertV2EvaluationThresholdColumn Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumn">DataDatabricksAlertV2EvaluationThresholdColumn</a>

---

##### `PutValue` <a name="PutValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue"></a>

```csharp
private void PutValue(DataDatabricksAlertV2EvaluationThresholdValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValue">DataDatabricksAlertV2EvaluationThresholdValue</a>

---

##### `ResetColumn` <a name="ResetColumn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetColumn"></a>

```csharp
private void ResetColumn()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference">DataDatabricksAlertV2EvaluationThresholdColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference">DataDatabricksAlertV2EvaluationThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.columnInput">ColumnInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.column"></a>

```csharp
public DataDatabricksAlertV2EvaluationThresholdColumnOutputReference Column { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdColumnOutputReference">DataDatabricksAlertV2EvaluationThresholdColumnOutputReference</a>

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.value"></a>

```csharp
public DataDatabricksAlertV2EvaluationThresholdValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference">DataDatabricksAlertV2EvaluationThresholdValueOutputReference</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.columnInput"></a>

```csharp
public object ColumnInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.valueInput"></a>

```csharp
public object ValueInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAlertV2EvaluationThresholdValueOutputReference <a name="DataDatabricksAlertV2EvaluationThresholdValueOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2EvaluationThresholdValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetBoolValue"></a>

```csharp
private void ResetBoolValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetDoubleValue"></a>

```csharp
private void ResetDoubleValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.resetStringValue"></a>

```csharp
private void ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValue">BoolValue</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValue">DoubleValue</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValue">StringValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValueInput"></a>

```csharp
public object BoolValueInput { get; }
```

- *Type:* object

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValueInput"></a>

```csharp
public double DoubleValueInput { get; }
```

- *Type:* double

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValueInput"></a>

```csharp
public string StringValueInput { get; }
```

- *Type:* string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.boolValue"></a>

```csharp
public object BoolValue { get; }
```

- *Type:* object

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.doubleValue"></a>

```csharp
public double DoubleValue { get; }
```

- *Type:* double

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.stringValue"></a>

```csharp
public string StringValue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2EvaluationThresholdValueOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAlertV2ScheduleOutputReference <a name="DataDatabricksAlertV2ScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAlertV2ScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetPauseStatus">ResetPauseStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetQuartzCronSchedule">ResetQuartzCronSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetTimezoneId">ResetTimezoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPauseStatus` <a name="ResetPauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetPauseStatus"></a>

```csharp
private void ResetPauseStatus()
```

##### `ResetQuartzCronSchedule` <a name="ResetQuartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetQuartzCronSchedule"></a>

```csharp
private void ResetQuartzCronSchedule()
```

##### `ResetTimezoneId` <a name="ResetTimezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.resetTimezoneId"></a>

```csharp
private void ResetTimezoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatusInput">PauseStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronScheduleInput">QuartzCronScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatus">PauseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronSchedule">QuartzCronSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneId">TimezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PauseStatusInput`<sup>Optional</sup> <a name="PauseStatusInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatusInput"></a>

```csharp
public string PauseStatusInput { get; }
```

- *Type:* string

---

##### `QuartzCronScheduleInput`<sup>Optional</sup> <a name="QuartzCronScheduleInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronScheduleInput"></a>

```csharp
public string QuartzCronScheduleInput { get; }
```

- *Type:* string

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneIdInput"></a>

```csharp
public string TimezoneIdInput { get; }
```

- *Type:* string

---

##### `PauseStatus`<sup>Required</sup> <a name="PauseStatus" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.pauseStatus"></a>

```csharp
public string PauseStatus { get; }
```

- *Type:* string

---

##### `QuartzCronSchedule`<sup>Required</sup> <a name="QuartzCronSchedule" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.quartzCronSchedule"></a>

```csharp
public string QuartzCronSchedule { get; }
```

- *Type:* string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.timezoneId"></a>

```csharp
public string TimezoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAlertV2.DataDatabricksAlertV2ScheduleOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



