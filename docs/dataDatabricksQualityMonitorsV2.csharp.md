# `dataDatabricksQualityMonitorsV2` Submodule <a name="`dataDatabricksQualityMonitorsV2` Submodule" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksQualityMonitorsV2 <a name="DataDatabricksQualityMonitorsV2" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/quality_monitors_v2 databricks_quality_monitors_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksQualityMonitorsV2(Construct Scope, string Id, DataDatabricksQualityMonitorsV2Config Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config">DataDatabricksQualityMonitorsV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config">DataDatabricksQualityMonitorsV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksQualityMonitorsV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksQualityMonitorsV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksQualityMonitorsV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksQualityMonitorsV2.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksQualityMonitorsV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksQualityMonitorsV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksQualityMonitorsV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksQualityMonitorsV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/quality_monitors_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksQualityMonitorsV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.qualityMonitors">QualityMonitors</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList">DataDatabricksQualityMonitorsV2QualityMonitorsList</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `QualityMonitors`<sup>Required</sup> <a name="QualityMonitors" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.qualityMonitors"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsList QualityMonitors { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList">DataDatabricksQualityMonitorsV2QualityMonitorsList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksQualityMonitorsV2Config <a name="DataDatabricksQualityMonitorsV2Config" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksQualityMonitorsV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

### DataDatabricksQualityMonitorsV2QualityMonitors <a name="DataDatabricksQualityMonitorsV2QualityMonitors" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitors {
    string ObjectId,
    string ObjectType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors.property.objectId">ObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/quality_monitors_v2#object_id DataDatabricksQualityMonitorsV2#object_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors.property.objectType">ObjectType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/quality_monitors_v2#object_type DataDatabricksQualityMonitorsV2#object_type}. |

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors.property.objectId"></a>

```csharp
public string ObjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/quality_monitors_v2#object_id DataDatabricksQualityMonitorsV2#object_id}.

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors.property.objectType"></a>

```csharp
public string ObjectType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/quality_monitors_v2#object_type DataDatabricksQualityMonitorsV2#object_type}.

---

### DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig <a name="DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference <a name="DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.lastRunId">LastRunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.latestRunStatus">LatestRunStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig">DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastRunId`<sup>Required</sup> <a name="LastRunId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.lastRunId"></a>

```csharp
public string LastRunId { get; }
```

- *Type:* string

---

##### `LatestRunStatus`<sup>Required</sup> <a name="LatestRunStatus" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.latestRunStatus"></a>

```csharp
public string LatestRunStatus { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig">DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfig</a>

---


### DataDatabricksQualityMonitorsV2QualityMonitorsList <a name="DataDatabricksQualityMonitorsV2QualityMonitorsList" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.get"></a>

```csharp
private DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference <a name="DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.anomalyDetectionConfig">AnomalyDetectionConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectTypeInput">ObjectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectId">ObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors">DataDatabricksQualityMonitorsV2QualityMonitors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnomalyDetectionConfig`<sup>Required</sup> <a name="AnomalyDetectionConfig" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.anomalyDetectionConfig"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference AnomalyDetectionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference">DataDatabricksQualityMonitorsV2QualityMonitorsAnomalyDetectionConfigOutputReference</a>

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectIdInput"></a>

```csharp
public string ObjectIdInput { get; }
```

- *Type:* string

---

##### `ObjectTypeInput`<sup>Optional</sup> <a name="ObjectTypeInput" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectTypeInput"></a>

```csharp
public string ObjectTypeInput { get; }
```

- *Type:* string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectId"></a>

```csharp
public string ObjectId { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitorsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksQualityMonitorsV2QualityMonitors InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksQualityMonitorsV2.DataDatabricksQualityMonitorsV2QualityMonitors">DataDatabricksQualityMonitorsV2QualityMonitors</a>

---



