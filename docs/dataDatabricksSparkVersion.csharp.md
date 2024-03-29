# `dataDatabricksSparkVersion` Submodule <a name="`dataDatabricksSparkVersion` Submodule" id="@cdktf/provider-databricks.dataDatabricksSparkVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSparkVersion <a name="DataDatabricksSparkVersion" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version databricks_spark_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSparkVersion(Construct Scope, string Id, DataDatabricksSparkVersionConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig">DataDatabricksSparkVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig">DataDatabricksSparkVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetBeta">ResetBeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGenomics">ResetGenomics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGpu">ResetGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGraviton">ResetGraviton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLatest">ResetLatest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLongTermSupport">ResetLongTermSupport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetMl">ResetMl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetPhoton">ResetPhoton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetScala">ResetScala</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetSparkVersion">ResetSparkVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetBeta` <a name="ResetBeta" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetBeta"></a>

```csharp
private void ResetBeta()
```

##### `ResetGenomics` <a name="ResetGenomics" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGenomics"></a>

```csharp
private void ResetGenomics()
```

##### `ResetGpu` <a name="ResetGpu" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGpu"></a>

```csharp
private void ResetGpu()
```

##### `ResetGraviton` <a name="ResetGraviton" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetGraviton"></a>

```csharp
private void ResetGraviton()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLatest` <a name="ResetLatest" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLatest"></a>

```csharp
private void ResetLatest()
```

##### `ResetLongTermSupport` <a name="ResetLongTermSupport" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetLongTermSupport"></a>

```csharp
private void ResetLongTermSupport()
```

##### `ResetMl` <a name="ResetMl" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetMl"></a>

```csharp
private void ResetMl()
```

##### `ResetPhoton` <a name="ResetPhoton" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetPhoton"></a>

```csharp
private void ResetPhoton()
```

##### `ResetScala` <a name="ResetScala" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetScala"></a>

```csharp
private void ResetScala()
```

##### `ResetSparkVersion` <a name="ResetSparkVersion" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.resetSparkVersion"></a>

```csharp
private void ResetSparkVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksSparkVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksSparkVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksSparkVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksSparkVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksSparkVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksSparkVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksSparkVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksSparkVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSparkVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.betaInput">BetaInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomicsInput">GenomicsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpuInput">GpuInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gravitonInput">GravitonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latestInput">LatestInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupportInput">LongTermSupportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.mlInput">MlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photonInput">PhotonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scalaInput">ScalaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersionInput">SparkVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.beta">Beta</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomics">Genomics</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpu">Gpu</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.graviton">Graviton</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latest">Latest</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupport">LongTermSupport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.ml">Ml</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photon">Photon</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scala">Scala</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersion">SparkVersion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BetaInput`<sup>Optional</sup> <a name="BetaInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.betaInput"></a>

```csharp
public object BetaInput { get; }
```

- *Type:* object

---

##### `GenomicsInput`<sup>Optional</sup> <a name="GenomicsInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomicsInput"></a>

```csharp
public object GenomicsInput { get; }
```

- *Type:* object

---

##### `GpuInput`<sup>Optional</sup> <a name="GpuInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpuInput"></a>

```csharp
public object GpuInput { get; }
```

- *Type:* object

---

##### `GravitonInput`<sup>Optional</sup> <a name="GravitonInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gravitonInput"></a>

```csharp
public object GravitonInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LatestInput`<sup>Optional</sup> <a name="LatestInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latestInput"></a>

```csharp
public object LatestInput { get; }
```

- *Type:* object

---

##### `LongTermSupportInput`<sup>Optional</sup> <a name="LongTermSupportInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupportInput"></a>

```csharp
public object LongTermSupportInput { get; }
```

- *Type:* object

---

##### `MlInput`<sup>Optional</sup> <a name="MlInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.mlInput"></a>

```csharp
public object MlInput { get; }
```

- *Type:* object

---

##### `PhotonInput`<sup>Optional</sup> <a name="PhotonInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photonInput"></a>

```csharp
public object PhotonInput { get; }
```

- *Type:* object

---

##### `ScalaInput`<sup>Optional</sup> <a name="ScalaInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scalaInput"></a>

```csharp
public string ScalaInput { get; }
```

- *Type:* string

---

##### `SparkVersionInput`<sup>Optional</sup> <a name="SparkVersionInput" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersionInput"></a>

```csharp
public string SparkVersionInput { get; }
```

- *Type:* string

---

##### `Beta`<sup>Required</sup> <a name="Beta" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.beta"></a>

```csharp
public object Beta { get; }
```

- *Type:* object

---

##### `Genomics`<sup>Required</sup> <a name="Genomics" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.genomics"></a>

```csharp
public object Genomics { get; }
```

- *Type:* object

---

##### `Gpu`<sup>Required</sup> <a name="Gpu" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.gpu"></a>

```csharp
public object Gpu { get; }
```

- *Type:* object

---

##### `Graviton`<sup>Required</sup> <a name="Graviton" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.graviton"></a>

```csharp
public object Graviton { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Latest`<sup>Required</sup> <a name="Latest" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.latest"></a>

```csharp
public object Latest { get; }
```

- *Type:* object

---

##### `LongTermSupport`<sup>Required</sup> <a name="LongTermSupport" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.longTermSupport"></a>

```csharp
public object LongTermSupport { get; }
```

- *Type:* object

---

##### `Ml`<sup>Required</sup> <a name="Ml" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.ml"></a>

```csharp
public object Ml { get; }
```

- *Type:* object

---

##### `Photon`<sup>Required</sup> <a name="Photon" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.photon"></a>

```csharp
public object Photon { get; }
```

- *Type:* object

---

##### `Scala`<sup>Required</sup> <a name="Scala" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.scala"></a>

```csharp
public string Scala { get; }
```

- *Type:* string

---

##### `SparkVersion`<sup>Required</sup> <a name="SparkVersion" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.sparkVersion"></a>

```csharp
public string SparkVersion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSparkVersionConfig <a name="DataDatabricksSparkVersionConfig" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSparkVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Beta = null,
    object Genomics = null,
    object Gpu = null,
    object Graviton = null,
    string Id = null,
    object Latest = null,
    object LongTermSupport = null,
    object Ml = null,
    object Photon = null,
    string Scala = null,
    string SparkVersion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.beta">Beta</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#beta DataDatabricksSparkVersion#beta}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.genomics">Genomics</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#genomics DataDatabricksSparkVersion#genomics}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.gpu">Gpu</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#gpu DataDatabricksSparkVersion#gpu}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.graviton">Graviton</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#graviton DataDatabricksSparkVersion#graviton}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#id DataDatabricksSparkVersion#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.latest">Latest</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#latest DataDatabricksSparkVersion#latest}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.longTermSupport">LongTermSupport</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#long_term_support DataDatabricksSparkVersion#long_term_support}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.ml">Ml</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#ml DataDatabricksSparkVersion#ml}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.photon">Photon</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#photon DataDatabricksSparkVersion#photon}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.scala">Scala</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#scala DataDatabricksSparkVersion#scala}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.sparkVersion">SparkVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#spark_version DataDatabricksSparkVersion#spark_version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Beta`<sup>Optional</sup> <a name="Beta" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.beta"></a>

```csharp
public object Beta { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#beta DataDatabricksSparkVersion#beta}.

---

##### `Genomics`<sup>Optional</sup> <a name="Genomics" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.genomics"></a>

```csharp
public object Genomics { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#genomics DataDatabricksSparkVersion#genomics}.

---

##### `Gpu`<sup>Optional</sup> <a name="Gpu" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.gpu"></a>

```csharp
public object Gpu { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#gpu DataDatabricksSparkVersion#gpu}.

---

##### `Graviton`<sup>Optional</sup> <a name="Graviton" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.graviton"></a>

```csharp
public object Graviton { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#graviton DataDatabricksSparkVersion#graviton}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#id DataDatabricksSparkVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Latest`<sup>Optional</sup> <a name="Latest" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.latest"></a>

```csharp
public object Latest { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#latest DataDatabricksSparkVersion#latest}.

---

##### `LongTermSupport`<sup>Optional</sup> <a name="LongTermSupport" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.longTermSupport"></a>

```csharp
public object LongTermSupport { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#long_term_support DataDatabricksSparkVersion#long_term_support}.

---

##### `Ml`<sup>Optional</sup> <a name="Ml" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.ml"></a>

```csharp
public object Ml { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#ml DataDatabricksSparkVersion#ml}.

---

##### `Photon`<sup>Optional</sup> <a name="Photon" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.photon"></a>

```csharp
public object Photon { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#photon DataDatabricksSparkVersion#photon}.

---

##### `Scala`<sup>Optional</sup> <a name="Scala" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.scala"></a>

```csharp
public string Scala { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#scala DataDatabricksSparkVersion#scala}.

---

##### `SparkVersion`<sup>Optional</sup> <a name="SparkVersion" id="@cdktf/provider-databricks.dataDatabricksSparkVersion.DataDatabricksSparkVersionConfig.property.sparkVersion"></a>

```csharp
public string SparkVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.39.0/docs/data-sources/spark_version#spark_version DataDatabricksSparkVersion#spark_version}.

---



