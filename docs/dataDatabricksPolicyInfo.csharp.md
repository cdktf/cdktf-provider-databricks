# `dataDatabricksPolicyInfo` Submodule <a name="`dataDatabricksPolicyInfo` Submodule" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksPolicyInfo <a name="DataDatabricksPolicyInfo" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info databricks_policy_info}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfo(Construct Scope, string Id, DataDatabricksPolicyInfoConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig">DataDatabricksPolicyInfoConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig">DataDatabricksPolicyInfoConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putColumnMask">PutColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putMatchColumns">PutMatchColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putRowFilter">PutRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetColumnMask">ResetColumnMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetExceptPrincipals">ResetExceptPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetMatchColumns">ResetMatchColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOnSecurableFullname">ResetOnSecurableFullname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOnSecurableType">ResetOnSecurableType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetRowFilter">ResetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetWhenCondition">ResetWhenCondition</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutColumnMask` <a name="PutColumnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putColumnMask"></a>

```csharp
private void PutColumnMask(DataDatabricksPolicyInfoColumnMask Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putColumnMask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a>

---

##### `PutMatchColumns` <a name="PutMatchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putMatchColumns"></a>

```csharp
private void PutMatchColumns(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putMatchColumns.parameter.value"></a>

- *Type:* object

---

##### `PutRowFilter` <a name="PutRowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putRowFilter"></a>

```csharp
private void PutRowFilter(DataDatabricksPolicyInfoRowFilter Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.putRowFilter.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a>

---

##### `ResetColumnMask` <a name="ResetColumnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetColumnMask"></a>

```csharp
private void ResetColumnMask()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetExceptPrincipals` <a name="ResetExceptPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetExceptPrincipals"></a>

```csharp
private void ResetExceptPrincipals()
```

##### `ResetMatchColumns` <a name="ResetMatchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetMatchColumns"></a>

```csharp
private void ResetMatchColumns()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOnSecurableFullname` <a name="ResetOnSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOnSecurableFullname"></a>

```csharp
private void ResetOnSecurableFullname()
```

##### `ResetOnSecurableType` <a name="ResetOnSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetOnSecurableType"></a>

```csharp
private void ResetOnSecurableType()
```

##### `ResetRowFilter` <a name="ResetRowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetRowFilter"></a>

```csharp
private void ResetRowFilter()
```

##### `ResetWhenCondition` <a name="ResetWhenCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.resetWhenCondition"></a>

```csharp
private void ResetWhenCondition()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksPolicyInfo resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPolicyInfo.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPolicyInfo.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPolicyInfo.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksPolicyInfo.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksPolicyInfo resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksPolicyInfo to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksPolicyInfo that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksPolicyInfo to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMask">ColumnMask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference">DataDatabricksPolicyInfoColumnMaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumns">MatchColumns</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList">DataDatabricksPolicyInfoMatchColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilter">RowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference">DataDatabricksPolicyInfoRowFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMaskInput">ColumnMaskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipalsInput">ExceptPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableTypeInput">ForSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumnsInput">MatchColumnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullnameInput">OnSecurableFullnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableTypeInput">OnSecurableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyTypeInput">PolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilterInput">RowFilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipalsInput">ToPrincipalsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenConditionInput">WhenConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipals">ExceptPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableType">ForSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullname">OnSecurableFullname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableType">OnSecurableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyType">PolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipals">ToPrincipals</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenCondition">WhenCondition</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ColumnMask`<sup>Required</sup> <a name="ColumnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMask"></a>

```csharp
public DataDatabricksPolicyInfoColumnMaskOutputReference ColumnMask { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference">DataDatabricksPolicyInfoColumnMaskOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MatchColumns`<sup>Required</sup> <a name="MatchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumns"></a>

```csharp
public DataDatabricksPolicyInfoMatchColumnsList MatchColumns { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList">DataDatabricksPolicyInfoMatchColumnsList</a>

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilter"></a>

```csharp
public DataDatabricksPolicyInfoRowFilterOutputReference RowFilter { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference">DataDatabricksPolicyInfoRowFilterOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `ColumnMaskInput`<sup>Optional</sup> <a name="ColumnMaskInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.columnMaskInput"></a>

```csharp
public object ColumnMaskInput { get; }
```

- *Type:* object

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `ExceptPrincipalsInput`<sup>Optional</sup> <a name="ExceptPrincipalsInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipalsInput"></a>

```csharp
public string[] ExceptPrincipalsInput { get; }
```

- *Type:* string[]

---

##### `ForSecurableTypeInput`<sup>Optional</sup> <a name="ForSecurableTypeInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableTypeInput"></a>

```csharp
public string ForSecurableTypeInput { get; }
```

- *Type:* string

---

##### `MatchColumnsInput`<sup>Optional</sup> <a name="MatchColumnsInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.matchColumnsInput"></a>

```csharp
public object MatchColumnsInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OnSecurableFullnameInput`<sup>Optional</sup> <a name="OnSecurableFullnameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullnameInput"></a>

```csharp
public string OnSecurableFullnameInput { get; }
```

- *Type:* string

---

##### `OnSecurableTypeInput`<sup>Optional</sup> <a name="OnSecurableTypeInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableTypeInput"></a>

```csharp
public string OnSecurableTypeInput { get; }
```

- *Type:* string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyTypeInput"></a>

```csharp
public string PolicyTypeInput { get; }
```

- *Type:* string

---

##### `RowFilterInput`<sup>Optional</sup> <a name="RowFilterInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.rowFilterInput"></a>

```csharp
public object RowFilterInput { get; }
```

- *Type:* object

---

##### `ToPrincipalsInput`<sup>Optional</sup> <a name="ToPrincipalsInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipalsInput"></a>

```csharp
public string[] ToPrincipalsInput { get; }
```

- *Type:* string[]

---

##### `WhenConditionInput`<sup>Optional</sup> <a name="WhenConditionInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenConditionInput"></a>

```csharp
public string WhenConditionInput { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `ExceptPrincipals`<sup>Required</sup> <a name="ExceptPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.exceptPrincipals"></a>

```csharp
public string[] ExceptPrincipals { get; }
```

- *Type:* string[]

---

##### `ForSecurableType`<sup>Required</sup> <a name="ForSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.forSecurableType"></a>

```csharp
public string ForSecurableType { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnSecurableFullname`<sup>Required</sup> <a name="OnSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableFullname"></a>

```csharp
public string OnSecurableFullname { get; }
```

- *Type:* string

---

##### `OnSecurableType`<sup>Required</sup> <a name="OnSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.onSecurableType"></a>

```csharp
public string OnSecurableType { get; }
```

- *Type:* string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.policyType"></a>

```csharp
public string PolicyType { get; }
```

- *Type:* string

---

##### `ToPrincipals`<sup>Required</sup> <a name="ToPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.toPrincipals"></a>

```csharp
public string[] ToPrincipals { get; }
```

- *Type:* string[]

---

##### `WhenCondition`<sup>Required</sup> <a name="WhenCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.whenCondition"></a>

```csharp
public string WhenCondition { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfo.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksPolicyInfoColumnMask <a name="DataDatabricksPolicyInfoColumnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoColumnMask {
    string FunctionName,
    string OnColumn,
    object Using = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.onColumn">OnColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#on_column DataDatabricksPolicyInfo#on_column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.using">Using</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}. |

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}.

---

##### `OnColumn`<sup>Required</sup> <a name="OnColumn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.onColumn"></a>

```csharp
public string OnColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#on_column DataDatabricksPolicyInfo#on_column}.

---

##### `Using`<sup>Optional</sup> <a name="Using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask.property.using"></a>

```csharp
public object Using { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}.

---

### DataDatabricksPolicyInfoColumnMaskUsing <a name="DataDatabricksPolicyInfoColumnMaskUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoColumnMaskUsing {
    string Alias = null,
    string Constant = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.constant">Constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `Constant`<sup>Optional</sup> <a name="Constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsing.property.constant"></a>

```csharp
public string Constant { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}.

---

### DataDatabricksPolicyInfoConfig <a name="DataDatabricksPolicyInfoConfig" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ForSecurableType,
    string PolicyType,
    string[] ToPrincipals,
    DataDatabricksPolicyInfoColumnMask ColumnMask = null,
    string Comment = null,
    string[] ExceptPrincipals = null,
    object MatchColumns = null,
    string Name = null,
    string OnSecurableFullname = null,
    string OnSecurableType = null,
    DataDatabricksPolicyInfoRowFilter RowFilter = null,
    string WhenCondition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forSecurableType">ForSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#for_securable_type DataDatabricksPolicyInfo#for_securable_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.policyType">PolicyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#policy_type DataDatabricksPolicyInfo#policy_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.toPrincipals">ToPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#to_principals DataDatabricksPolicyInfo#to_principals}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.columnMask">ColumnMask</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#column_mask DataDatabricksPolicyInfo#column_mask}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#comment DataDatabricksPolicyInfo#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.exceptPrincipals">ExceptPrincipals</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#except_principals DataDatabricksPolicyInfo#except_principals}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.matchColumns">MatchColumns</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#match_columns DataDatabricksPolicyInfo#match_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableFullname">OnSecurableFullname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableType">OnSecurableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.rowFilter">RowFilter</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#row_filter DataDatabricksPolicyInfo#row_filter}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.whenCondition">WhenCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#when_condition DataDatabricksPolicyInfo#when_condition}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ForSecurableType`<sup>Required</sup> <a name="ForSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.forSecurableType"></a>

```csharp
public string ForSecurableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#for_securable_type DataDatabricksPolicyInfo#for_securable_type}.

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.policyType"></a>

```csharp
public string PolicyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#policy_type DataDatabricksPolicyInfo#policy_type}.

---

##### `ToPrincipals`<sup>Required</sup> <a name="ToPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.toPrincipals"></a>

```csharp
public string[] ToPrincipals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#to_principals DataDatabricksPolicyInfo#to_principals}.

---

##### `ColumnMask`<sup>Optional</sup> <a name="ColumnMask" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.columnMask"></a>

```csharp
public DataDatabricksPolicyInfoColumnMask ColumnMask { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMask">DataDatabricksPolicyInfoColumnMask</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#column_mask DataDatabricksPolicyInfo#column_mask}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#comment DataDatabricksPolicyInfo#comment}.

---

##### `ExceptPrincipals`<sup>Optional</sup> <a name="ExceptPrincipals" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.exceptPrincipals"></a>

```csharp
public string[] ExceptPrincipals { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#except_principals DataDatabricksPolicyInfo#except_principals}.

---

##### `MatchColumns`<sup>Optional</sup> <a name="MatchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.matchColumns"></a>

```csharp
public object MatchColumns { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#match_columns DataDatabricksPolicyInfo#match_columns}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#name DataDatabricksPolicyInfo#name}.

---

##### `OnSecurableFullname`<sup>Optional</sup> <a name="OnSecurableFullname" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableFullname"></a>

```csharp
public string OnSecurableFullname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#on_securable_fullname DataDatabricksPolicyInfo#on_securable_fullname}.

---

##### `OnSecurableType`<sup>Optional</sup> <a name="OnSecurableType" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.onSecurableType"></a>

```csharp
public string OnSecurableType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#on_securable_type DataDatabricksPolicyInfo#on_securable_type}.

---

##### `RowFilter`<sup>Optional</sup> <a name="RowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.rowFilter"></a>

```csharp
public DataDatabricksPolicyInfoRowFilter RowFilter { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter">DataDatabricksPolicyInfoRowFilter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#row_filter DataDatabricksPolicyInfo#row_filter}.

---

##### `WhenCondition`<sup>Optional</sup> <a name="WhenCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoConfig.property.whenCondition"></a>

```csharp
public string WhenCondition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#when_condition DataDatabricksPolicyInfo#when_condition}.

---

### DataDatabricksPolicyInfoMatchColumns <a name="DataDatabricksPolicyInfoMatchColumns" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoMatchColumns {
    string Alias = null,
    string Condition = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.condition">Condition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#condition DataDatabricksPolicyInfo#condition}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumns.property.condition"></a>

```csharp
public string Condition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#condition DataDatabricksPolicyInfo#condition}.

---

### DataDatabricksPolicyInfoRowFilter <a name="DataDatabricksPolicyInfoRowFilter" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoRowFilter {
    string FunctionName,
    object Using = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.functionName">FunctionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.using">Using</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}. |

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.functionName"></a>

```csharp
public string FunctionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#function_name DataDatabricksPolicyInfo#function_name}.

---

##### `Using`<sup>Optional</sup> <a name="Using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilter.property.using"></a>

```csharp
public object Using { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#using DataDatabricksPolicyInfo#using}.

---

### DataDatabricksPolicyInfoRowFilterUsing <a name="DataDatabricksPolicyInfoRowFilterUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoRowFilterUsing {
    string Alias = null,
    string Constant = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.alias">Alias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.constant">Constant</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}. |

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#alias DataDatabricksPolicyInfo#alias}.

---

##### `Constant`<sup>Optional</sup> <a name="Constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsing.property.constant"></a>

```csharp
public string Constant { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/policy_info#constant DataDatabricksPolicyInfo#constant}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksPolicyInfoColumnMaskOutputReference <a name="DataDatabricksPolicyInfoColumnMaskOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoColumnMaskOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing">PutUsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resetUsing">ResetUsing</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUsing` <a name="PutUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing"></a>

```csharp
private void PutUsing(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.putUsing.parameter.value"></a>

- *Type:* object

---

##### `ResetUsing` <a name="ResetUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.resetUsing"></a>

```csharp
private void ResetUsing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.using">Using</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList">DataDatabricksPolicyInfoColumnMaskUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumnInput">OnColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.usingInput">UsingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumn">OnColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Using`<sup>Required</sup> <a name="Using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.using"></a>

```csharp
public DataDatabricksPolicyInfoColumnMaskUsingList Using { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList">DataDatabricksPolicyInfoColumnMaskUsingList</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `OnColumnInput`<sup>Optional</sup> <a name="OnColumnInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumnInput"></a>

```csharp
public string OnColumnInput { get; }
```

- *Type:* string

---

##### `UsingInput`<sup>Optional</sup> <a name="UsingInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.usingInput"></a>

```csharp
public object UsingInput { get; }
```

- *Type:* object

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `OnColumn`<sup>Required</sup> <a name="OnColumn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.onColumn"></a>

```csharp
public string OnColumn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksPolicyInfoColumnMaskUsingList <a name="DataDatabricksPolicyInfoColumnMaskUsingList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoColumnMaskUsingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get"></a>

```csharp
private DataDatabricksPolicyInfoColumnMaskUsingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksPolicyInfoColumnMaskUsingOutputReference <a name="DataDatabricksPolicyInfoColumnMaskUsingOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoColumnMaskUsingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetConstant">ResetConstant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetConstant` <a name="ResetConstant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.resetConstant"></a>

```csharp
private void ResetConstant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constantInput">ConstantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constant">Constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ConstantInput`<sup>Optional</sup> <a name="ConstantInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constantInput"></a>

```csharp
public string ConstantInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.constant"></a>

```csharp
public string Constant { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoColumnMaskUsingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksPolicyInfoMatchColumnsList <a name="DataDatabricksPolicyInfoMatchColumnsList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoMatchColumnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get"></a>

```csharp
private DataDatabricksPolicyInfoMatchColumnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksPolicyInfoMatchColumnsOutputReference <a name="DataDatabricksPolicyInfoMatchColumnsOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoMatchColumnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetCondition">ResetCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.resetCondition"></a>

```csharp
private void ResetCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.conditionInput">ConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.conditionInput"></a>

```csharp
public string ConditionInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoMatchColumnsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksPolicyInfoRowFilterOutputReference <a name="DataDatabricksPolicyInfoRowFilterOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoRowFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing">PutUsing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resetUsing">ResetUsing</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUsing` <a name="PutUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing"></a>

```csharp
private void PutUsing(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.putUsing.parameter.value"></a>

- *Type:* object

---

##### `ResetUsing` <a name="ResetUsing" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.resetUsing"></a>

```csharp
private void ResetUsing()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.using">Using</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList">DataDatabricksPolicyInfoRowFilterUsingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionNameInput">FunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.usingInput">UsingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionName">FunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Using`<sup>Required</sup> <a name="Using" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.using"></a>

```csharp
public DataDatabricksPolicyInfoRowFilterUsingList Using { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList">DataDatabricksPolicyInfoRowFilterUsingList</a>

---

##### `FunctionNameInput`<sup>Optional</sup> <a name="FunctionNameInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionNameInput"></a>

```csharp
public string FunctionNameInput { get; }
```

- *Type:* string

---

##### `UsingInput`<sup>Optional</sup> <a name="UsingInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.usingInput"></a>

```csharp
public object UsingInput { get; }
```

- *Type:* object

---

##### `FunctionName`<sup>Required</sup> <a name="FunctionName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.functionName"></a>

```csharp
public string FunctionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksPolicyInfoRowFilterUsingList <a name="DataDatabricksPolicyInfoRowFilterUsingList" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoRowFilterUsingList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get"></a>

```csharp
private DataDatabricksPolicyInfoRowFilterUsingOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksPolicyInfoRowFilterUsingOutputReference <a name="DataDatabricksPolicyInfoRowFilterUsingOutputReference" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksPolicyInfoRowFilterUsingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetConstant">ResetConstant</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetConstant` <a name="ResetConstant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.resetConstant"></a>

```csharp
private void ResetConstant()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constantInput">ConstantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constant">Constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `ConstantInput`<sup>Optional</sup> <a name="ConstantInput" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constantInput"></a>

```csharp
public string ConstantInput { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Constant`<sup>Required</sup> <a name="Constant" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.constant"></a>

```csharp
public string Constant { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksPolicyInfo.DataDatabricksPolicyInfoRowFilterUsingOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



