# `dataDatabricksClusters` Submodule <a name="`dataDatabricksClusters` Submodule" id="@cdktf/provider-databricks.dataDatabricksClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksClusters <a name="DataDatabricksClusters" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters databricks_clusters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksClusters(Construct Scope, string Id, DataDatabricksClustersConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig">DataDatabricksClustersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig">DataDatabricksClustersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.putFilterBy">PutFilterBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetClusterNameContains">ResetClusterNameContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetFilterBy">ResetFilterBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetIds">ResetIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilterBy` <a name="PutFilterBy" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.putFilterBy"></a>

```csharp
private void PutFilterBy(DataDatabricksClustersFilterBy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.putFilterBy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a>

---

##### `ResetClusterNameContains` <a name="ResetClusterNameContains" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetClusterNameContains"></a>

```csharp
private void ResetClusterNameContains()
```

##### `ResetFilterBy` <a name="ResetFilterBy" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetFilterBy"></a>

```csharp
private void ResetFilterBy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIds` <a name="ResetIds" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.resetIds"></a>

```csharp
private void ResetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksClusters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksClusters.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksClusters.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksClusters.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksClusters.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksClusters resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksClusters to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.filterBy">FilterBy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference">DataDatabricksClustersFilterByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.clusterNameContainsInput">ClusterNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.filterByInput">FilterByInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.idsInput">IdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.clusterNameContains">ClusterNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `FilterBy`<sup>Required</sup> <a name="FilterBy" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.filterBy"></a>

```csharp
public DataDatabricksClustersFilterByOutputReference FilterBy { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference">DataDatabricksClustersFilterByOutputReference</a>

---

##### `ClusterNameContainsInput`<sup>Optional</sup> <a name="ClusterNameContainsInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.clusterNameContainsInput"></a>

```csharp
public string ClusterNameContainsInput { get; }
```

- *Type:* string

---

##### `FilterByInput`<sup>Optional</sup> <a name="FilterByInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.filterByInput"></a>

```csharp
public DataDatabricksClustersFilterBy FilterByInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.idsInput"></a>

```csharp
public string[] IdsInput { get; }
```

- *Type:* string[]

---

##### `ClusterNameContains`<sup>Required</sup> <a name="ClusterNameContains" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.clusterNameContains"></a>

```csharp
public string ClusterNameContains { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClusters.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksClustersConfig <a name="DataDatabricksClustersConfig" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksClustersConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ClusterNameContains = null,
    DataDatabricksClustersFilterBy FilterBy = null,
    string Id = null,
    string[] Ids = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.clusterNameContains">ClusterNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#cluster_name_contains DataDatabricksClusters#cluster_name_contains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.filterBy">FilterBy</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a></code> | filter_by block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#id DataDatabricksClusters#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.ids">Ids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#ids DataDatabricksClusters#ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ClusterNameContains`<sup>Optional</sup> <a name="ClusterNameContains" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.clusterNameContains"></a>

```csharp
public string ClusterNameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#cluster_name_contains DataDatabricksClusters#cluster_name_contains}.

---

##### `FilterBy`<sup>Optional</sup> <a name="FilterBy" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.filterBy"></a>

```csharp
public DataDatabricksClustersFilterBy FilterBy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a>

filter_by block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#filter_by DataDatabricksClusters#filter_by}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#id DataDatabricksClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersConfig.property.ids"></a>

```csharp
public string[] Ids { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#ids DataDatabricksClusters#ids}.

---

### DataDatabricksClustersFilterBy <a name="DataDatabricksClustersFilterBy" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksClustersFilterBy {
    string[] ClusterSources = null,
    string[] ClusterStates = null,
    bool|IResolvable IsPinned = null,
    string PolicyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.clusterSources">ClusterSources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#cluster_sources DataDatabricksClusters#cluster_sources}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.clusterStates">ClusterStates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#cluster_states DataDatabricksClusters#cluster_states}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.isPinned">IsPinned</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#is_pinned DataDatabricksClusters#is_pinned}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#policy_id DataDatabricksClusters#policy_id}. |

---

##### `ClusterSources`<sup>Optional</sup> <a name="ClusterSources" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.clusterSources"></a>

```csharp
public string[] ClusterSources { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#cluster_sources DataDatabricksClusters#cluster_sources}.

---

##### `ClusterStates`<sup>Optional</sup> <a name="ClusterStates" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.clusterStates"></a>

```csharp
public string[] ClusterStates { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#cluster_states DataDatabricksClusters#cluster_states}.

---

##### `IsPinned`<sup>Optional</sup> <a name="IsPinned" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.isPinned"></a>

```csharp
public bool|IResolvable IsPinned { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#is_pinned DataDatabricksClusters#is_pinned}.

---

##### `PolicyId`<sup>Optional</sup> <a name="PolicyId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.91.0/docs/data-sources/clusters#policy_id DataDatabricksClusters#policy_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksClustersFilterByOutputReference <a name="DataDatabricksClustersFilterByOutputReference" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksClustersFilterByOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetClusterSources">ResetClusterSources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetClusterStates">ResetClusterStates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetIsPinned">ResetIsPinned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetPolicyId">ResetPolicyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterSources` <a name="ResetClusterSources" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetClusterSources"></a>

```csharp
private void ResetClusterSources()
```

##### `ResetClusterStates` <a name="ResetClusterStates" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetClusterStates"></a>

```csharp
private void ResetClusterStates()
```

##### `ResetIsPinned` <a name="ResetIsPinned" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetIsPinned"></a>

```csharp
private void ResetIsPinned()
```

##### `ResetPolicyId` <a name="ResetPolicyId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.resetPolicyId"></a>

```csharp
private void ResetPolicyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterSourcesInput">ClusterSourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterStatesInput">ClusterStatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.isPinnedInput">IsPinnedInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterSources">ClusterSources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterStates">ClusterStates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.isPinned">IsPinned</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClusterSourcesInput`<sup>Optional</sup> <a name="ClusterSourcesInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterSourcesInput"></a>

```csharp
public string[] ClusterSourcesInput { get; }
```

- *Type:* string[]

---

##### `ClusterStatesInput`<sup>Optional</sup> <a name="ClusterStatesInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterStatesInput"></a>

```csharp
public string[] ClusterStatesInput { get; }
```

- *Type:* string[]

---

##### `IsPinnedInput`<sup>Optional</sup> <a name="IsPinnedInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.isPinnedInput"></a>

```csharp
public bool|IResolvable IsPinnedInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `ClusterSources`<sup>Required</sup> <a name="ClusterSources" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterSources"></a>

```csharp
public string[] ClusterSources { get; }
```

- *Type:* string[]

---

##### `ClusterStates`<sup>Required</sup> <a name="ClusterStates" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.clusterStates"></a>

```csharp
public string[] ClusterStates { get; }
```

- *Type:* string[]

---

##### `IsPinned`<sup>Required</sup> <a name="IsPinned" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.isPinned"></a>

```csharp
public bool|IResolvable IsPinned { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterByOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksClustersFilterBy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksClusters.DataDatabricksClustersFilterBy">DataDatabricksClustersFilterBy</a>

---



