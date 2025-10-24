# `dataDatabricksDataQualityMonitors` Submodule <a name="`dataDatabricksDataQualityMonitors` Submodule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDataQualityMonitors <a name="DataDatabricksDataQualityMonitors" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors databricks_data_quality_monitors}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitors(Construct Scope, string Id, DataDatabricksDataQualityMonitorsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig">DataDatabricksDataQualityMonitorsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig">DataDatabricksDataQualityMonitorsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDataQualityMonitors resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDataQualityMonitors.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDataQualityMonitors.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDataQualityMonitors.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDataQualityMonitors.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksDataQualityMonitors resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDataQualityMonitors to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDataQualityMonitors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDataQualityMonitors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.monitors">Monitors</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList">DataDatabricksDataQualityMonitorsMonitorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Monitors`<sup>Required</sup> <a name="Monitors" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.monitors"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsList Monitors { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList">DataDatabricksDataQualityMonitorsMonitorsList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitors.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDataQualityMonitorsConfig <a name="DataDatabricksDataQualityMonitorsConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    double PageSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#page_size DataDatabricksDataQualityMonitors#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#page_size DataDatabricksDataQualityMonitors#page_size}.

---

### DataDatabricksDataQualityMonitorsMonitors <a name="DataDatabricksDataQualityMonitorsMonitors" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitors {
    string ObjectId,
    string ObjectType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#object_id DataDatabricksDataQualityMonitors#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.objectType">ObjectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#object_type DataDatabricksDataQualityMonitors#object_type}. |

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#object_id DataDatabricksDataQualityMonitors#object_id}.

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#object_type DataDatabricksDataQualityMonitors#object_type}.

---

### DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig <a name="DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig {

};
```


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig {
    string OutputSchemaId,
    string AssetsDir = null,
    string BaselineTableName = null,
    IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics[] CustomMetrics = null,
    DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog InferenceLog = null,
    DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings NotificationSettings = null,
    DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule Schedule = null,
    bool|IResolvable SkipBuiltinDashboard = null,
    string[] SlicingExprs = null,
    DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot Snapshot = null,
    DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries TimeSeries = null,
    string WarehouseId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.outputSchemaId">OutputSchemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#output_schema_id DataDatabricksDataQualityMonitors#output_schema_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.assetsDir">AssetsDir</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#assets_dir DataDatabricksDataQualityMonitors#assets_dir}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.baselineTableName">BaselineTableName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#baseline_table_name DataDatabricksDataQualityMonitors#baseline_table_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.customMetrics">CustomMetrics</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#custom_metrics DataDatabricksDataQualityMonitors#custom_metrics}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.inferenceLog">InferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#inference_log DataDatabricksDataQualityMonitors#inference_log}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#notification_settings DataDatabricksDataQualityMonitors#notification_settings}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#schedule DataDatabricksDataQualityMonitors#schedule}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#skip_builtin_dashboard DataDatabricksDataQualityMonitors#skip_builtin_dashboard}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.slicingExprs">SlicingExprs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#slicing_exprs DataDatabricksDataQualityMonitors#slicing_exprs}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#snapshot DataDatabricksDataQualityMonitors#snapshot}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.timeSeries">TimeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#time_series DataDatabricksDataQualityMonitors#time_series}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.warehouseId">WarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#warehouse_id DataDatabricksDataQualityMonitors#warehouse_id}. |

---

##### `OutputSchemaId`<sup>Required</sup> <a name="OutputSchemaId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.outputSchemaId"></a>

```csharp
public string OutputSchemaId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#output_schema_id DataDatabricksDataQualityMonitors#output_schema_id}.

---

##### `AssetsDir`<sup>Optional</sup> <a name="AssetsDir" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.assetsDir"></a>

```csharp
public string AssetsDir { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#assets_dir DataDatabricksDataQualityMonitors#assets_dir}.

---

##### `BaselineTableName`<sup>Optional</sup> <a name="BaselineTableName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.baselineTableName"></a>

```csharp
public string BaselineTableName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#baseline_table_name DataDatabricksDataQualityMonitors#baseline_table_name}.

---

##### `CustomMetrics`<sup>Optional</sup> <a name="CustomMetrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.customMetrics"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics[] CustomMetrics { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#custom_metrics DataDatabricksDataQualityMonitors#custom_metrics}.

---

##### `InferenceLog`<sup>Optional</sup> <a name="InferenceLog" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.inferenceLog"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog InferenceLog { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#inference_log DataDatabricksDataQualityMonitors#inference_log}.

---

##### `NotificationSettings`<sup>Optional</sup> <a name="NotificationSettings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.notificationSettings"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings NotificationSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#notification_settings DataDatabricksDataQualityMonitors#notification_settings}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.schedule"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#schedule DataDatabricksDataQualityMonitors#schedule}.

---

##### `SkipBuiltinDashboard`<sup>Optional</sup> <a name="SkipBuiltinDashboard" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.skipBuiltinDashboard"></a>

```csharp
public bool|IResolvable SkipBuiltinDashboard { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#skip_builtin_dashboard DataDatabricksDataQualityMonitors#skip_builtin_dashboard}.

---

##### `SlicingExprs`<sup>Optional</sup> <a name="SlicingExprs" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.slicingExprs"></a>

```csharp
public string[] SlicingExprs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#slicing_exprs DataDatabricksDataQualityMonitors#slicing_exprs}.

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.snapshot"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot Snapshot { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#snapshot DataDatabricksDataQualityMonitors#snapshot}.

---

##### `TimeSeries`<sup>Optional</sup> <a name="TimeSeries" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.timeSeries"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries TimeSeries { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#time_series DataDatabricksDataQualityMonitors#time_series}.

---

##### `WarehouseId`<sup>Optional</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig.property.warehouseId"></a>

```csharp
public string WarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#warehouse_id DataDatabricksDataQualityMonitors#warehouse_id}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics {
    string Definition,
    string[] InputColumns,
    string Name,
    string OutputDataType,
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.definition">Definition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#definition DataDatabricksDataQualityMonitors#definition}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.inputColumns">InputColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#input_columns DataDatabricksDataQualityMonitors#input_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#name DataDatabricksDataQualityMonitors#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.outputDataType">OutputDataType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#output_data_type DataDatabricksDataQualityMonitors#output_data_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#type DataDatabricksDataQualityMonitors#type}. |

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.definition"></a>

```csharp
public string Definition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#definition DataDatabricksDataQualityMonitors#definition}.

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.inputColumns"></a>

```csharp
public string[] InputColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#input_columns DataDatabricksDataQualityMonitors#input_columns}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#name DataDatabricksDataQualityMonitors#name}.

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.outputDataType"></a>

```csharp
public string OutputDataType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#output_data_type DataDatabricksDataQualityMonitors#output_data_type}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#type DataDatabricksDataQualityMonitors#type}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog {
    string[] Granularities,
    string ModelIdColumn,
    string PredictionColumn,
    string ProblemType,
    string TimestampColumn,
    string LabelColumn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.granularities">Granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.modelIdColumn">ModelIdColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#model_id_column DataDatabricksDataQualityMonitors#model_id_column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.predictionColumn">PredictionColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#prediction_column DataDatabricksDataQualityMonitors#prediction_column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.problemType">ProblemType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#problem_type DataDatabricksDataQualityMonitors#problem_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.timestampColumn">TimestampColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.labelColumn">LabelColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#label_column DataDatabricksDataQualityMonitors#label_column}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.granularities"></a>

```csharp
public string[] Granularities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}.

---

##### `ModelIdColumn`<sup>Required</sup> <a name="ModelIdColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.modelIdColumn"></a>

```csharp
public string ModelIdColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#model_id_column DataDatabricksDataQualityMonitors#model_id_column}.

---

##### `PredictionColumn`<sup>Required</sup> <a name="PredictionColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.predictionColumn"></a>

```csharp
public string PredictionColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#prediction_column DataDatabricksDataQualityMonitors#prediction_column}.

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.problemType"></a>

```csharp
public string ProblemType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#problem_type DataDatabricksDataQualityMonitors#problem_type}.

---

##### `TimestampColumn`<sup>Required</sup> <a name="TimestampColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.timestampColumn"></a>

```csharp
public string TimestampColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}.

---

##### `LabelColumn`<sup>Optional</sup> <a name="LabelColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog.property.labelColumn"></a>

```csharp
public string LabelColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#label_column DataDatabricksDataQualityMonitors#label_column}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings {
    DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure OnFailure = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#on_failure DataDatabricksDataQualityMonitors#on_failure}. |

---

##### `OnFailure`<sup>Optional</sup> <a name="OnFailure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings.property.onFailure"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure OnFailure { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#on_failure DataDatabricksDataQualityMonitors#on_failure}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure {
    string[] EmailAddresses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}. |

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#email_addresses DataDatabricksDataQualityMonitors#email_addresses}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule {
    string QuartzCronExpression,
    string TimezoneId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#quartz_cron_expression DataDatabricksDataQualityMonitors#quartz_cron_expression}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.property.timezoneId">TimezoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#timezone_id DataDatabricksDataQualityMonitors#timezone_id}. |

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.property.quartzCronExpression"></a>

```csharp
public string QuartzCronExpression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#quartz_cron_expression DataDatabricksDataQualityMonitors#quartz_cron_expression}.

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule.property.timezoneId"></a>

```csharp
public string TimezoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#timezone_id DataDatabricksDataQualityMonitors#timezone_id}.

---

### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot {

};
```


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries {
    string[] Granularities,
    string TimestampColumn
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.property.granularities">Granularities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.property.timestampColumn">TimestampColumn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}. |

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.property.granularities"></a>

```csharp
public string[] Granularities { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#granularities DataDatabricksDataQualityMonitors#granularities}.

---

##### `TimestampColumn`<sup>Required</sup> <a name="TimestampColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries.property.timestampColumn"></a>

```csharp
public string TimestampColumn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/data_quality_monitors#timestamp_column DataDatabricksDataQualityMonitors#timestamp_column}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfig</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.get"></a>

```csharp
private DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>[]

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.definitionInput">DefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput">InputColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput">OutputDataTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.definition">Definition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.inputColumns">InputColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.outputDataType">OutputDataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefinitionInput`<sup>Optional</sup> <a name="DefinitionInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.definitionInput"></a>

```csharp
public string DefinitionInput { get; }
```

- *Type:* string

---

##### `InputColumnsInput`<sup>Optional</sup> <a name="InputColumnsInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.inputColumnsInput"></a>

```csharp
public string[] InputColumnsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OutputDataTypeInput`<sup>Optional</sup> <a name="OutputDataTypeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.outputDataTypeInput"></a>

```csharp
public string OutputDataTypeInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Definition`<sup>Required</sup> <a name="Definition" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.definition"></a>

```csharp
public string Definition { get; }
```

- *Type:* string

---

##### `InputColumns`<sup>Required</sup> <a name="InputColumns" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.inputColumns"></a>

```csharp
public string[] InputColumns { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputDataType`<sup>Required</sup> <a name="OutputDataType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.outputDataType"></a>

```csharp
public string OutputDataType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resetLabelColumn">ResetLabelColumn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelColumn` <a name="ResetLabelColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.resetLabelColumn"></a>

```csharp
private void ResetLabelColumn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput">LabelColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput">ModelIdColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput">PredictionColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput">ProblemTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput">TimestampColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.granularities">Granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.labelColumn">LabelColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn">ModelIdColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.predictionColumn">PredictionColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.problemType">ProblemType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.timestampColumn">TimestampColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.granularitiesInput"></a>

```csharp
public string[] GranularitiesInput { get; }
```

- *Type:* string[]

---

##### `LabelColumnInput`<sup>Optional</sup> <a name="LabelColumnInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.labelColumnInput"></a>

```csharp
public string LabelColumnInput { get; }
```

- *Type:* string

---

##### `ModelIdColumnInput`<sup>Optional</sup> <a name="ModelIdColumnInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.modelIdColumnInput"></a>

```csharp
public string ModelIdColumnInput { get; }
```

- *Type:* string

---

##### `PredictionColumnInput`<sup>Optional</sup> <a name="PredictionColumnInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.predictionColumnInput"></a>

```csharp
public string PredictionColumnInput { get; }
```

- *Type:* string

---

##### `ProblemTypeInput`<sup>Optional</sup> <a name="ProblemTypeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.problemTypeInput"></a>

```csharp
public string ProblemTypeInput { get; }
```

- *Type:* string

---

##### `TimestampColumnInput`<sup>Optional</sup> <a name="TimestampColumnInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.timestampColumnInput"></a>

```csharp
public string TimestampColumnInput { get; }
```

- *Type:* string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.granularities"></a>

```csharp
public string[] Granularities { get; }
```

- *Type:* string[]

---

##### `LabelColumn`<sup>Required</sup> <a name="LabelColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.labelColumn"></a>

```csharp
public string LabelColumn { get; }
```

- *Type:* string

---

##### `ModelIdColumn`<sup>Required</sup> <a name="ModelIdColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.modelIdColumn"></a>

```csharp
public string ModelIdColumn { get; }
```

- *Type:* string

---

##### `PredictionColumn`<sup>Required</sup> <a name="PredictionColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.predictionColumn"></a>

```csharp
public string PredictionColumn { get; }
```

- *Type:* string

---

##### `ProblemType`<sup>Required</sup> <a name="ProblemType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.problemType"></a>

```csharp
public string ProblemType { get; }
```

- *Type:* string

---

##### `TimestampColumn`<sup>Required</sup> <a name="TimestampColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.timestampColumn"></a>

```csharp
public string TimestampColumn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.resetEmailAddresses"></a>

```csharp
private void ResetEmailAddresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses">EmailAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddressesInput"></a>

```csharp
public string[] EmailAddressesInput { get; }
```

- *Type:* string[]

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.emailAddresses"></a>

```csharp
public string[] EmailAddresses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.putOnFailure">PutOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure">ResetOnFailure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnFailure` <a name="PutOnFailure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.putOnFailure"></a>

```csharp
private void PutOnFailure(DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a>

---

##### `ResetOnFailure` <a name="ResetOnFailure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.resetOnFailure"></a>

```csharp
private void ResetOnFailure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onFailure">OnFailure</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput">OnFailureInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OnFailure`<sup>Required</sup> <a name="OnFailure" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onFailure"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference OnFailure { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailureOutputReference</a>

---

##### `OnFailureInput`<sup>Optional</sup> <a name="OnFailureInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.onFailureInput"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure OnFailureInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOnFailure</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putCustomMetrics">PutCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog">PutInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putNotificationSettings">PutNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSnapshot">PutSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putTimeSeries">PutTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetAssetsDir">ResetAssetsDir</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetBaselineTableName">ResetBaselineTableName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetCustomMetrics">ResetCustomMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetInferenceLog">ResetInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetNotificationSettings">ResetNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSkipBuiltinDashboard">ResetSkipBuiltinDashboard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSlicingExprs">ResetSlicingExprs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetTimeSeries">ResetTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetWarehouseId">ResetWarehouseId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomMetrics` <a name="PutCustomMetrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putCustomMetrics"></a>

```csharp
private void PutCustomMetrics(IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putCustomMetrics.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>[]

---

##### `PutInferenceLog` <a name="PutInferenceLog" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog"></a>

```csharp
private void PutInferenceLog(DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putInferenceLog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a>

---

##### `PutNotificationSettings` <a name="PutNotificationSettings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putNotificationSettings"></a>

```csharp
private void PutNotificationSettings(DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putNotificationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSchedule"></a>

```csharp
private void PutSchedule(DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a>

---

##### `PutSnapshot` <a name="PutSnapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSnapshot"></a>

```csharp
private void PutSnapshot(DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putSnapshot.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a>

---

##### `PutTimeSeries` <a name="PutTimeSeries" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putTimeSeries"></a>

```csharp
private void PutTimeSeries(DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.putTimeSeries.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a>

---

##### `ResetAssetsDir` <a name="ResetAssetsDir" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetAssetsDir"></a>

```csharp
private void ResetAssetsDir()
```

##### `ResetBaselineTableName` <a name="ResetBaselineTableName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetBaselineTableName"></a>

```csharp
private void ResetBaselineTableName()
```

##### `ResetCustomMetrics` <a name="ResetCustomMetrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetCustomMetrics"></a>

```csharp
private void ResetCustomMetrics()
```

##### `ResetInferenceLog` <a name="ResetInferenceLog" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetInferenceLog"></a>

```csharp
private void ResetInferenceLog()
```

##### `ResetNotificationSettings` <a name="ResetNotificationSettings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetNotificationSettings"></a>

```csharp
private void ResetNotificationSettings()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetSkipBuiltinDashboard` <a name="ResetSkipBuiltinDashboard" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSkipBuiltinDashboard"></a>

```csharp
private void ResetSkipBuiltinDashboard()
```

##### `ResetSlicingExprs` <a name="ResetSlicingExprs" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSlicingExprs"></a>

```csharp
private void ResetSlicingExprs()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetSnapshot"></a>

```csharp
private void ResetSnapshot()
```

##### `ResetTimeSeries` <a name="ResetTimeSeries" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetTimeSeries"></a>

```csharp
private void ResetTimeSeries()
```

##### `ResetWarehouseId` <a name="ResetWarehouseId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.resetWarehouseId"></a>

```csharp
private void ResetWarehouseId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.customMetrics">CustomMetrics</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.dashboardId">DashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.driftMetricsTableName">DriftMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.effectiveWarehouseId">EffectiveWarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.inferenceLog">InferenceLog</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.latestMonitorFailureMessage">LatestMonitorFailureMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.monitoredTableName">MonitoredTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.monitorVersion">MonitorVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.notificationSettings">NotificationSettings</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.profileMetricsTableName">ProfileMetricsTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.snapshot">Snapshot</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.timeSeries">TimeSeries</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.assetsDirInput">AssetsDirInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.baselineTableNameInput">BaselineTableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.customMetricsInput">CustomMetricsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.inferenceLogInput">InferenceLogInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.notificationSettingsInput">NotificationSettingsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.outputSchemaIdInput">OutputSchemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput">SkipBuiltinDashboardInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.slicingExprsInput">SlicingExprsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.snapshotInput">SnapshotInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.timeSeriesInput">TimeSeriesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.assetsDir">AssetsDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.baselineTableName">BaselineTableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.outputSchemaId">OutputSchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.skipBuiltinDashboard">SkipBuiltinDashboard</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.slicingExprs">SlicingExprs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomMetrics`<sup>Required</sup> <a name="CustomMetrics" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.customMetrics"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList CustomMetrics { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetricsList</a>

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.dashboardId"></a>

```csharp
public string DashboardId { get; }
```

- *Type:* string

---

##### `DriftMetricsTableName`<sup>Required</sup> <a name="DriftMetricsTableName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.driftMetricsTableName"></a>

```csharp
public string DriftMetricsTableName { get; }
```

- *Type:* string

---

##### `EffectiveWarehouseId`<sup>Required</sup> <a name="EffectiveWarehouseId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.effectiveWarehouseId"></a>

```csharp
public string EffectiveWarehouseId { get; }
```

- *Type:* string

---

##### `InferenceLog`<sup>Required</sup> <a name="InferenceLog" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.inferenceLog"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference InferenceLog { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLogOutputReference</a>

---

##### `LatestMonitorFailureMessage`<sup>Required</sup> <a name="LatestMonitorFailureMessage" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.latestMonitorFailureMessage"></a>

```csharp
public string LatestMonitorFailureMessage { get; }
```

- *Type:* string

---

##### `MonitoredTableName`<sup>Required</sup> <a name="MonitoredTableName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.monitoredTableName"></a>

```csharp
public string MonitoredTableName { get; }
```

- *Type:* string

---

##### `MonitorVersion`<sup>Required</sup> <a name="MonitorVersion" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.monitorVersion"></a>

```csharp
public double MonitorVersion { get; }
```

- *Type:* double

---

##### `NotificationSettings`<sup>Required</sup> <a name="NotificationSettings" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.notificationSettings"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference NotificationSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettingsOutputReference</a>

---

##### `ProfileMetricsTableName`<sup>Required</sup> <a name="ProfileMetricsTableName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.profileMetricsTableName"></a>

```csharp
public string ProfileMetricsTableName { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.schedule"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference</a>

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.snapshot"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference Snapshot { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeSeries`<sup>Required</sup> <a name="TimeSeries" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.timeSeries"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference TimeSeries { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference</a>

---

##### `AssetsDirInput`<sup>Optional</sup> <a name="AssetsDirInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.assetsDirInput"></a>

```csharp
public string AssetsDirInput { get; }
```

- *Type:* string

---

##### `BaselineTableNameInput`<sup>Optional</sup> <a name="BaselineTableNameInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.baselineTableNameInput"></a>

```csharp
public string BaselineTableNameInput { get; }
```

- *Type:* string

---

##### `CustomMetricsInput`<sup>Optional</sup> <a name="CustomMetricsInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.customMetricsInput"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics[] CustomMetricsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigCustomMetrics</a>[]

---

##### `InferenceLogInput`<sup>Optional</sup> <a name="InferenceLogInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.inferenceLogInput"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog InferenceLogInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigInferenceLog</a>

---

##### `NotificationSettingsInput`<sup>Optional</sup> <a name="NotificationSettingsInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.notificationSettingsInput"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings NotificationSettingsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigNotificationSettings</a>

---

##### `OutputSchemaIdInput`<sup>Optional</sup> <a name="OutputSchemaIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.outputSchemaIdInput"></a>

```csharp
public string OutputSchemaIdInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.scheduleInput"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule ScheduleInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a>

---

##### `SkipBuiltinDashboardInput`<sup>Optional</sup> <a name="SkipBuiltinDashboardInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.skipBuiltinDashboardInput"></a>

```csharp
public bool|IResolvable SkipBuiltinDashboardInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SlicingExprsInput`<sup>Optional</sup> <a name="SlicingExprsInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.slicingExprsInput"></a>

```csharp
public string[] SlicingExprsInput { get; }
```

- *Type:* string[]

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.snapshotInput"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot SnapshotInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a>

---

##### `TimeSeriesInput`<sup>Optional</sup> <a name="TimeSeriesInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.timeSeriesInput"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries TimeSeriesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a>

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.warehouseIdInput"></a>

```csharp
public string WarehouseIdInput { get; }
```

- *Type:* string

---

##### `AssetsDir`<sup>Required</sup> <a name="AssetsDir" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.assetsDir"></a>

```csharp
public string AssetsDir { get; }
```

- *Type:* string

---

##### `BaselineTableName`<sup>Required</sup> <a name="BaselineTableName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.baselineTableName"></a>

```csharp
public string BaselineTableName { get; }
```

- *Type:* string

---

##### `OutputSchemaId`<sup>Required</sup> <a name="OutputSchemaId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.outputSchemaId"></a>

```csharp
public string OutputSchemaId { get; }
```

- *Type:* string

---

##### `SkipBuiltinDashboard`<sup>Required</sup> <a name="SkipBuiltinDashboard" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.skipBuiltinDashboard"></a>

```csharp
public bool|IResolvable SkipBuiltinDashboard { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `SlicingExprs`<sup>Required</sup> <a name="SlicingExprs" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.slicingExprs"></a>

```csharp
public string[] SlicingExprs { get; }
```

- *Type:* string[]

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfig</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.pauseStatus">PauseStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput">QuartzCronExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.timezoneIdInput">TimezoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.quartzCronExpression">QuartzCronExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.timezoneId">TimezoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PauseStatus`<sup>Required</sup> <a name="PauseStatus" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.pauseStatus"></a>

```csharp
public string PauseStatus { get; }
```

- *Type:* string

---

##### `QuartzCronExpressionInput`<sup>Optional</sup> <a name="QuartzCronExpressionInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.quartzCronExpressionInput"></a>

```csharp
public string QuartzCronExpressionInput { get; }
```

- *Type:* string

---

##### `TimezoneIdInput`<sup>Optional</sup> <a name="TimezoneIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.timezoneIdInput"></a>

```csharp
public string TimezoneIdInput { get; }
```

- *Type:* string

---

##### `QuartzCronExpression`<sup>Required</sup> <a name="QuartzCronExpression" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.quartzCronExpression"></a>

```csharp
public string QuartzCronExpression { get; }
```

- *Type:* string

---

##### `TimezoneId`<sup>Required</sup> <a name="TimezoneId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.timezoneId"></a>

```csharp
public string TimezoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigScheduleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSchedule</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshotOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigSnapshot</a>

---


### DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput">GranularitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput">TimestampColumnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.granularities">Granularities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn">TimestampColumn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GranularitiesInput`<sup>Optional</sup> <a name="GranularitiesInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.granularitiesInput"></a>

```csharp
public string[] GranularitiesInput { get; }
```

- *Type:* string[]

---

##### `TimestampColumnInput`<sup>Optional</sup> <a name="TimestampColumnInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.timestampColumnInput"></a>

```csharp
public string TimestampColumnInput { get; }
```

- *Type:* string

---

##### `Granularities`<sup>Required</sup> <a name="Granularities" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.granularities"></a>

```csharp
public string[] Granularities { get; }
```

- *Type:* string[]

---

##### `TimestampColumn`<sup>Required</sup> <a name="TimestampColumn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.timestampColumn"></a>

```csharp
public string TimestampColumn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigTimeSeries</a>

---


### DataDatabricksDataQualityMonitorsMonitorsList <a name="DataDatabricksDataQualityMonitorsMonitorsList" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.get"></a>

```csharp
private DataDatabricksDataQualityMonitorsMonitorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors">DataDatabricksDataQualityMonitorsMonitors</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDataQualityMonitorsMonitors[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors">DataDatabricksDataQualityMonitorsMonitors</a>[]

---


### DataDatabricksDataQualityMonitorsMonitorsOutputReference <a name="DataDatabricksDataQualityMonitorsMonitorsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDataQualityMonitorsMonitorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.anomalyDetectionConfig">AnomalyDetectionConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.dataProfilingConfig">DataProfilingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors">DataDatabricksDataQualityMonitorsMonitors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnomalyDetectionConfig`<sup>Required</sup> <a name="AnomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.anomalyDetectionConfig"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference AnomalyDetectionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsAnomalyDetectionConfigOutputReference</a>

---

##### `DataProfilingConfig`<sup>Required</sup> <a name="DataProfilingConfig" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.dataProfilingConfig"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference DataProfilingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference">DataDatabricksDataQualityMonitorsMonitorsDataProfilingConfigOutputReference</a>

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitorsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDataQualityMonitorsMonitors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDataQualityMonitors.DataDatabricksDataQualityMonitorsMonitors">DataDatabricksDataQualityMonitorsMonitors</a>

---



