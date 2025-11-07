# `dataDatabricksDatabaseInstances` Submodule <a name="`dataDatabricksDatabaseInstances` Submodule" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseInstances <a name="DataDatabricksDatabaseInstances" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances databricks_database_instances}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstances(Construct Scope, string Id, DataDatabricksDatabaseInstancesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig">DataDatabricksDatabaseInstancesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig">DataDatabricksDatabaseInstancesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDatabaseInstances resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseInstances.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseInstances.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseInstances.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseInstances.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksDatabaseInstances resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDatabaseInstances to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDatabaseInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.databaseInstances">DatabaseInstances</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList">DataDatabricksDatabaseInstancesDatabaseInstancesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DatabaseInstances`<sup>Required</sup> <a name="DatabaseInstances" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.databaseInstances"></a>

```csharp
public DataDatabricksDatabaseInstancesDatabaseInstancesList DatabaseInstances { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList">DataDatabricksDatabaseInstancesDatabaseInstancesList</a>

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstances.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseInstancesConfig <a name="DataDatabricksDatabaseInstancesConfig" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesConfig {
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#page_size DataDatabricksDatabaseInstances#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#page_size DataDatabricksDatabaseInstances#page_size}.

---

### DataDatabricksDatabaseInstancesDatabaseInstances <a name="DataDatabricksDatabaseInstancesDatabaseInstances" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstances {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs <a name="DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs {
    string BranchTime = null,
    string Lsn = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.branchTime">BranchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.lsn">Lsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}. |

---

##### `BranchTime`<sup>Optional</sup> <a name="BranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.branchTime"></a>

```csharp
public string BranchTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}.

---

##### `Lsn`<sup>Optional</sup> <a name="Lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.lsn"></a>

```csharp
public string Lsn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags <a name="DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags <a name="DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags {
    string Key = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#key DataDatabricksDatabaseInstances#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#value DataDatabricksDatabaseInstances#value}.

---

### DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef <a name="DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef {
    string BranchTime = null,
    string Lsn = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.branchTime">BranchTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.lsn">Lsn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}. |

---

##### `BranchTime`<sup>Optional</sup> <a name="BranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.branchTime"></a>

```csharp
public string BranchTime { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#branch_time DataDatabricksDatabaseInstances#branch_time}.

---

##### `Lsn`<sup>Optional</sup> <a name="Lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.lsn"></a>

```csharp
public string Lsn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#lsn DataDatabricksDatabaseInstances#lsn}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_instances#name DataDatabricksDatabaseInstances#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.get"></a>

```csharp
private DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a>[]

---


### DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetBranchTime">ResetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetLsn">ResetLsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchTime` <a name="ResetBranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetBranchTime"></a>

```csharp
private void ResetBranchTime()
```

##### `ResetLsn` <a name="ResetLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetLsn"></a>

```csharp
private void ResetLsn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.effectiveLsn">EffectiveLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTimeInput">BranchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsnInput">LsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTime">BranchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsn">Lsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveLsn`<sup>Required</sup> <a name="EffectiveLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.effectiveLsn"></a>

```csharp
public string EffectiveLsn { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `BranchTimeInput`<sup>Optional</sup> <a name="BranchTimeInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTimeInput"></a>

```csharp
public string BranchTimeInput { get; }
```

- *Type:* string

---

##### `LsnInput`<sup>Optional</sup> <a name="LsnInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsnInput"></a>

```csharp
public string LsnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `BranchTime`<sup>Required</sup> <a name="BranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.branchTime"></a>

```csharp
public string BranchTime { get; }
```

- *Type:* string

---

##### `Lsn`<sup>Required</sup> <a name="Lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.lsn"></a>

```csharp
public string Lsn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefs</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.get"></a>

```csharp
private DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags</a>[]

---


### DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTags</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.get"></a>

```csharp
private DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags</a>[]

---


### DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTags</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesList <a name="DataDatabricksDatabaseInstancesDatabaseInstancesList" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstancesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.get"></a>

```csharp
private DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseInstancesDatabaseInstances[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a>[]

---


### DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.capacity">Capacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.childInstanceRefs">ChildInstanceRefs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationTime">CreationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.customTags">CustomTags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveCapacity">EffectiveCapacity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveCustomTags">EffectiveCustomTags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnablePgNativeLogin">EffectiveEnablePgNativeLogin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnableReadableSecondaries">EffectiveEnableReadableSecondaries</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveNodeCount">EffectiveNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveRetentionWindowInDays">EffectiveRetentionWindowInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveStopped">EffectiveStopped</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveUsagePolicyId">EffectiveUsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enablePgNativeLogin">EnablePgNativeLogin</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enableReadableSecondaries">EnableReadableSecondaries</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.parentInstanceRef">ParentInstanceRef</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.pgVersion">PgVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readOnlyDns">ReadOnlyDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readWriteDns">ReadWriteDns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.retentionWindowInDays">RetentionWindowInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.stopped">Stopped</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.usagePolicyId">UsagePolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.capacity"></a>

```csharp
public string Capacity { get; }
```

- *Type:* string

---

##### `ChildInstanceRefs`<sup>Required</sup> <a name="ChildInstanceRefs" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.childInstanceRefs"></a>

```csharp
public DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList ChildInstanceRefs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList">DataDatabricksDatabaseInstancesDatabaseInstancesChildInstanceRefsList</a>

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creationTime"></a>

```csharp
public string CreationTime { get; }
```

- *Type:* string

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.customTags"></a>

```csharp
public DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList CustomTags { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList">DataDatabricksDatabaseInstancesDatabaseInstancesCustomTagsList</a>

---

##### `EffectiveCapacity`<sup>Required</sup> <a name="EffectiveCapacity" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveCapacity"></a>

```csharp
public string EffectiveCapacity { get; }
```

- *Type:* string

---

##### `EffectiveCustomTags`<sup>Required</sup> <a name="EffectiveCustomTags" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveCustomTags"></a>

```csharp
public DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList EffectiveCustomTags { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList">DataDatabricksDatabaseInstancesDatabaseInstancesEffectiveCustomTagsList</a>

---

##### `EffectiveEnablePgNativeLogin`<sup>Required</sup> <a name="EffectiveEnablePgNativeLogin" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnablePgNativeLogin"></a>

```csharp
public IResolvable EffectiveEnablePgNativeLogin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EffectiveEnableReadableSecondaries`<sup>Required</sup> <a name="EffectiveEnableReadableSecondaries" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveEnableReadableSecondaries"></a>

```csharp
public IResolvable EffectiveEnableReadableSecondaries { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EffectiveNodeCount`<sup>Required</sup> <a name="EffectiveNodeCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveNodeCount"></a>

```csharp
public double EffectiveNodeCount { get; }
```

- *Type:* double

---

##### `EffectiveRetentionWindowInDays`<sup>Required</sup> <a name="EffectiveRetentionWindowInDays" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveRetentionWindowInDays"></a>

```csharp
public double EffectiveRetentionWindowInDays { get; }
```

- *Type:* double

---

##### `EffectiveStopped`<sup>Required</sup> <a name="EffectiveStopped" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveStopped"></a>

```csharp
public IResolvable EffectiveStopped { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EffectiveUsagePolicyId`<sup>Required</sup> <a name="EffectiveUsagePolicyId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.effectiveUsagePolicyId"></a>

```csharp
public string EffectiveUsagePolicyId { get; }
```

- *Type:* string

---

##### `EnablePgNativeLogin`<sup>Required</sup> <a name="EnablePgNativeLogin" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enablePgNativeLogin"></a>

```csharp
public IResolvable EnablePgNativeLogin { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnableReadableSecondaries`<sup>Required</sup> <a name="EnableReadableSecondaries" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.enableReadableSecondaries"></a>

```csharp
public IResolvable EnableReadableSecondaries { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `ParentInstanceRef`<sup>Required</sup> <a name="ParentInstanceRef" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.parentInstanceRef"></a>

```csharp
public DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference ParentInstanceRef { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference</a>

---

##### `PgVersion`<sup>Required</sup> <a name="PgVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.pgVersion"></a>

```csharp
public string PgVersion { get; }
```

- *Type:* string

---

##### `ReadOnlyDns`<sup>Required</sup> <a name="ReadOnlyDns" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readOnlyDns"></a>

```csharp
public string ReadOnlyDns { get; }
```

- *Type:* string

---

##### `ReadWriteDns`<sup>Required</sup> <a name="ReadWriteDns" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.readWriteDns"></a>

```csharp
public string ReadWriteDns { get; }
```

- *Type:* string

---

##### `RetentionWindowInDays`<sup>Required</sup> <a name="RetentionWindowInDays" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.retentionWindowInDays"></a>

```csharp
public double RetentionWindowInDays { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Stopped`<sup>Required</sup> <a name="Stopped" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.stopped"></a>

```csharp
public IResolvable Stopped { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UsagePolicyId`<sup>Required</sup> <a name="UsagePolicyId" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.usagePolicyId"></a>

```csharp
public string UsagePolicyId { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseInstancesDatabaseInstances InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstances">DataDatabricksDatabaseInstancesDatabaseInstances</a>

---


### DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference <a name="DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetBranchTime">ResetBranchTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetLsn">ResetLsn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranchTime` <a name="ResetBranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetBranchTime"></a>

```csharp
private void ResetBranchTime()
```

##### `ResetLsn` <a name="ResetLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetLsn"></a>

```csharp
private void ResetLsn()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.effectiveLsn">EffectiveLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTimeInput">BranchTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsnInput">LsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTime">BranchTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsn">Lsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectiveLsn`<sup>Required</sup> <a name="EffectiveLsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.effectiveLsn"></a>

```csharp
public string EffectiveLsn { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `BranchTimeInput`<sup>Optional</sup> <a name="BranchTimeInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTimeInput"></a>

```csharp
public string BranchTimeInput { get; }
```

- *Type:* string

---

##### `LsnInput`<sup>Optional</sup> <a name="LsnInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsnInput"></a>

```csharp
public string LsnInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `BranchTime`<sup>Required</sup> <a name="BranchTime" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.branchTime"></a>

```csharp
public string BranchTime { get; }
```

- *Type:* string

---

##### `Lsn`<sup>Required</sup> <a name="Lsn" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.lsn"></a>

```csharp
public string Lsn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRefOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseInstances.DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef">DataDatabricksDatabaseInstancesDatabaseInstancesParentInstanceRef</a>

---



