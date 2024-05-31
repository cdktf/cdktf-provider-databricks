# `dataDatabricksCurrentMetastore` Submodule <a name="`dataDatabricksCurrentMetastore` Submodule" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksCurrentMetastore <a name="DataDatabricksCurrentMetastore" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore databricks_current_metastore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCurrentMetastore(Construct Scope, string Id, DataDatabricksCurrentMetastoreConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig">DataDatabricksCurrentMetastoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig">DataDatabricksCurrentMetastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putMetastoreInfo">PutMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetMetastoreInfo">ResetMetastoreInfo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetastoreInfo` <a name="PutMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putMetastoreInfo"></a>

```csharp
private void PutMetastoreInfo(DataDatabricksCurrentMetastoreMetastoreInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.putMetastoreInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetastoreInfo` <a name="ResetMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.resetMetastoreInfo"></a>

```csharp
private void ResetMetastoreInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksCurrentMetastore resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCurrentMetastore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCurrentMetastore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCurrentMetastore.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksCurrentMetastore.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksCurrentMetastore resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksCurrentMetastore to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksCurrentMetastore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksCurrentMetastore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfo">MetastoreInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference">DataDatabricksCurrentMetastoreMetastoreInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfoInput">MetastoreInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `MetastoreInfo`<sup>Required</sup> <a name="MetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfo"></a>

```csharp
public DataDatabricksCurrentMetastoreMetastoreInfoOutputReference MetastoreInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference">DataDatabricksCurrentMetastoreMetastoreInfoOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetastoreInfoInput`<sup>Optional</sup> <a name="MetastoreInfoInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.metastoreInfoInput"></a>

```csharp
public DataDatabricksCurrentMetastoreMetastoreInfo MetastoreInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksCurrentMetastoreConfig <a name="DataDatabricksCurrentMetastoreConfig" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCurrentMetastoreConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    DataDatabricksCurrentMetastoreMetastoreInfo MetastoreInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#id DataDatabricksCurrentMetastore#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.metastoreInfo">MetastoreInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a></code> | metastore_info block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#id DataDatabricksCurrentMetastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetastoreInfo`<sup>Optional</sup> <a name="MetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreConfig.property.metastoreInfo"></a>

```csharp
public DataDatabricksCurrentMetastoreMetastoreInfo MetastoreInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

metastore_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#metastore_info DataDatabricksCurrentMetastore#metastore_info}

---

### DataDatabricksCurrentMetastoreMetastoreInfo <a name="DataDatabricksCurrentMetastoreMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCurrentMetastoreMetastoreInfo {
    string Cloud = null,
    double CreatedAt = null,
    string CreatedBy = null,
    string DefaultDataAccessConfigId = null,
    string DeltaSharingOrganizationName = null,
    double DeltaSharingRecipientTokenLifetimeInSeconds = null,
    string DeltaSharingScope = null,
    string GlobalMetastoreId = null,
    string MetastoreId = null,
    string Name = null,
    string Owner = null,
    string PrivilegeModelVersion = null,
    string Region = null,
    string StorageRoot = null,
    string StorageRootCredentialId = null,
    string StorageRootCredentialName = null,
    double UpdatedAt = null,
    string UpdatedBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.cloud">Cloud</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#cloud DataDatabricksCurrentMetastore#cloud}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdAt">CreatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#created_at DataDatabricksCurrentMetastore#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdBy">CreatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#created_by DataDatabricksCurrentMetastore#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.defaultDataAccessConfigId">DefaultDataAccessConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#default_data_access_config_id DataDatabricksCurrentMetastore#default_data_access_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingOrganizationName">DeltaSharingOrganizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#delta_sharing_organization_name DataDatabricksCurrentMetastore#delta_sharing_organization_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds">DeltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksCurrentMetastore#delta_sharing_recipient_token_lifetime_in_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingScope">DeltaSharingScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#delta_sharing_scope DataDatabricksCurrentMetastore#delta_sharing_scope}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#global_metastore_id DataDatabricksCurrentMetastore#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#metastore_id DataDatabricksCurrentMetastore#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#name DataDatabricksCurrentMetastore#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#owner DataDatabricksCurrentMetastore#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.privilegeModelVersion">PrivilegeModelVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#privilege_model_version DataDatabricksCurrentMetastore#privilege_model_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#region DataDatabricksCurrentMetastore#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRoot">StorageRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#storage_root DataDatabricksCurrentMetastore#storage_root}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialId">StorageRootCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#storage_root_credential_id DataDatabricksCurrentMetastore#storage_root_credential_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialName">StorageRootCredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#storage_root_credential_name DataDatabricksCurrentMetastore#storage_root_credential_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#updated_at DataDatabricksCurrentMetastore#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#updated_by DataDatabricksCurrentMetastore#updated_by}. |

---

##### `Cloud`<sup>Optional</sup> <a name="Cloud" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.cloud"></a>

```csharp
public string Cloud { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#cloud DataDatabricksCurrentMetastore#cloud}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdAt"></a>

```csharp
public double CreatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#created_at DataDatabricksCurrentMetastore#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#created_by DataDatabricksCurrentMetastore#created_by}.

---

##### `DefaultDataAccessConfigId`<sup>Optional</sup> <a name="DefaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.defaultDataAccessConfigId"></a>

```csharp
public string DefaultDataAccessConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#default_data_access_config_id DataDatabricksCurrentMetastore#default_data_access_config_id}.

---

##### `DeltaSharingOrganizationName`<sup>Optional</sup> <a name="DeltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingOrganizationName"></a>

```csharp
public string DeltaSharingOrganizationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#delta_sharing_organization_name DataDatabricksCurrentMetastore#delta_sharing_organization_name}.

---

##### `DeltaSharingRecipientTokenLifetimeInSeconds`<sup>Optional</sup> <a name="DeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```csharp
public double DeltaSharingRecipientTokenLifetimeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksCurrentMetastore#delta_sharing_recipient_token_lifetime_in_seconds}.

---

##### `DeltaSharingScope`<sup>Optional</sup> <a name="DeltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.deltaSharingScope"></a>

```csharp
public string DeltaSharingScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#delta_sharing_scope DataDatabricksCurrentMetastore#delta_sharing_scope}.

---

##### `GlobalMetastoreId`<sup>Optional</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.globalMetastoreId"></a>

```csharp
public string GlobalMetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#global_metastore_id DataDatabricksCurrentMetastore#global_metastore_id}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#metastore_id DataDatabricksCurrentMetastore#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#name DataDatabricksCurrentMetastore#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#owner DataDatabricksCurrentMetastore#owner}.

---

##### `PrivilegeModelVersion`<sup>Optional</sup> <a name="PrivilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.privilegeModelVersion"></a>

```csharp
public string PrivilegeModelVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#privilege_model_version DataDatabricksCurrentMetastore#privilege_model_version}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#region DataDatabricksCurrentMetastore#region}.

---

##### `StorageRoot`<sup>Optional</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRoot"></a>

```csharp
public string StorageRoot { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#storage_root DataDatabricksCurrentMetastore#storage_root}.

---

##### `StorageRootCredentialId`<sup>Optional</sup> <a name="StorageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialId"></a>

```csharp
public string StorageRootCredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#storage_root_credential_id DataDatabricksCurrentMetastore#storage_root_credential_id}.

---

##### `StorageRootCredentialName`<sup>Optional</sup> <a name="StorageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.storageRootCredentialName"></a>

```csharp
public string StorageRootCredentialName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#storage_root_credential_name DataDatabricksCurrentMetastore#storage_root_credential_name}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#updated_at DataDatabricksCurrentMetastore#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.46.0/docs/data-sources/current_metastore#updated_by DataDatabricksCurrentMetastore#updated_by}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksCurrentMetastoreMetastoreInfoOutputReference <a name="DataDatabricksCurrentMetastoreMetastoreInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksCurrentMetastoreMetastoreInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCloud">ResetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId">ResetDefaultDataAccessConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName">ResetDeltaSharingOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds">ResetDeltaSharingRecipientTokenLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope">ResetDeltaSharingScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId">ResetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion">ResetPrivilegeModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRoot">ResetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId">ResetStorageRootCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName">ResetStorageRootCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloud` <a name="ResetCloud" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCloud"></a>

```csharp
private void ResetCloud()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetDefaultDataAccessConfigId` <a name="ResetDefaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId"></a>

```csharp
private void ResetDefaultDataAccessConfigId()
```

##### `ResetDeltaSharingOrganizationName` <a name="ResetDeltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName"></a>

```csharp
private void ResetDeltaSharingOrganizationName()
```

##### `ResetDeltaSharingRecipientTokenLifetimeInSeconds` <a name="ResetDeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds"></a>

```csharp
private void ResetDeltaSharingRecipientTokenLifetimeInSeconds()
```

##### `ResetDeltaSharingScope` <a name="ResetDeltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope"></a>

```csharp
private void ResetDeltaSharingScope()
```

##### `ResetGlobalMetastoreId` <a name="ResetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId"></a>

```csharp
private void ResetGlobalMetastoreId()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetPrivilegeModelVersion` <a name="ResetPrivilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion"></a>

```csharp
private void ResetPrivilegeModelVersion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStorageRoot` <a name="ResetStorageRoot" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRoot"></a>

```csharp
private void ResetStorageRoot()
```

##### `ResetStorageRootCredentialId` <a name="ResetStorageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId"></a>

```csharp
private void ResetStorageRootCredentialId()
```

##### `ResetStorageRootCredentialName` <a name="ResetStorageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName"></a>

```csharp
private void ResetStorageRootCredentialName()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.resetUpdatedBy"></a>

```csharp
private void ResetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloudInput">CloudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput">DefaultDataAccessConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput">DeltaSharingOrganizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput">DeltaSharingRecipientTokenLifetimeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput">DeltaSharingScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput">GlobalMetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput">PrivilegeModelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput">StorageRootCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput">StorageRootCredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootInput">StorageRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloud">Cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId">DefaultDataAccessConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName">DeltaSharingOrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds">DeltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScope">DeltaSharingScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion">PrivilegeModelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRoot">StorageRoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId">StorageRootCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName">StorageRootCredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudInput`<sup>Optional</sup> <a name="CloudInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloudInput"></a>

```csharp
public string CloudInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAtInput"></a>

```csharp
public double CreatedAtInput { get; }
```

- *Type:* double

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `DefaultDataAccessConfigIdInput`<sup>Optional</sup> <a name="DefaultDataAccessConfigIdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput"></a>

```csharp
public string DefaultDataAccessConfigIdInput { get; }
```

- *Type:* string

---

##### `DeltaSharingOrganizationNameInput`<sup>Optional</sup> <a name="DeltaSharingOrganizationNameInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput"></a>

```csharp
public string DeltaSharingOrganizationNameInput { get; }
```

- *Type:* string

---

##### `DeltaSharingRecipientTokenLifetimeInSecondsInput`<sup>Optional</sup> <a name="DeltaSharingRecipientTokenLifetimeInSecondsInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput"></a>

```csharp
public double DeltaSharingRecipientTokenLifetimeInSecondsInput { get; }
```

- *Type:* double

---

##### `DeltaSharingScopeInput`<sup>Optional</sup> <a name="DeltaSharingScopeInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput"></a>

```csharp
public string DeltaSharingScopeInput { get; }
```

- *Type:* string

---

##### `GlobalMetastoreIdInput`<sup>Optional</sup> <a name="GlobalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput"></a>

```csharp
public string GlobalMetastoreIdInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `PrivilegeModelVersionInput`<sup>Optional</sup> <a name="PrivilegeModelVersionInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput"></a>

```csharp
public string PrivilegeModelVersionInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StorageRootCredentialIdInput`<sup>Optional</sup> <a name="StorageRootCredentialIdInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput"></a>

```csharp
public string StorageRootCredentialIdInput { get; }
```

- *Type:* string

---

##### `StorageRootCredentialNameInput`<sup>Optional</sup> <a name="StorageRootCredentialNameInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput"></a>

```csharp
public string StorageRootCredentialNameInput { get; }
```

- *Type:* string

---

##### `StorageRootInput`<sup>Optional</sup> <a name="StorageRootInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootInput"></a>

```csharp
public string StorageRootInput { get; }
```

- *Type:* string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAtInput"></a>

```csharp
public double UpdatedAtInput { get; }
```

- *Type:* double

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedByInput"></a>

```csharp
public string UpdatedByInput { get; }
```

- *Type:* string

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.cloud"></a>

```csharp
public string Cloud { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DefaultDataAccessConfigId`<sup>Required</sup> <a name="DefaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId"></a>

```csharp
public string DefaultDataAccessConfigId { get; }
```

- *Type:* string

---

##### `DeltaSharingOrganizationName`<sup>Required</sup> <a name="DeltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName"></a>

```csharp
public string DeltaSharingOrganizationName { get; }
```

- *Type:* string

---

##### `DeltaSharingRecipientTokenLifetimeInSeconds`<sup>Required</sup> <a name="DeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```csharp
public double DeltaSharingRecipientTokenLifetimeInSeconds { get; }
```

- *Type:* double

---

##### `DeltaSharingScope`<sup>Required</sup> <a name="DeltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.deltaSharingScope"></a>

```csharp
public string DeltaSharingScope { get; }
```

- *Type:* string

---

##### `GlobalMetastoreId`<sup>Required</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.globalMetastoreId"></a>

```csharp
public string GlobalMetastoreId { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `PrivilegeModelVersion`<sup>Required</sup> <a name="PrivilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion"></a>

```csharp
public string PrivilegeModelVersion { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRoot"></a>

```csharp
public string StorageRoot { get; }
```

- *Type:* string

---

##### `StorageRootCredentialId`<sup>Required</sup> <a name="StorageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId"></a>

```csharp
public string StorageRootCredentialId { get; }
```

- *Type:* string

---

##### `StorageRootCredentialName`<sup>Required</sup> <a name="StorageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName"></a>

```csharp
public string StorageRootCredentialName { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksCurrentMetastoreMetastoreInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksCurrentMetastore.DataDatabricksCurrentMetastoreMetastoreInfo">DataDatabricksCurrentMetastoreMetastoreInfo</a>

---



