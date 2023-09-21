# `data_databricks_metastore`

Refer to the Terraform Registory for docs: [`data_databricks_metastore`](https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore).

# `dataDatabricksMetastore` Submodule <a name="`dataDatabricksMetastore` Submodule" id="@cdktf/provider-databricks.dataDatabricksMetastore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMetastore <a name="DataDatabricksMetastore" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore databricks_metastore}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMetastore(Construct Scope, string Id, DataDatabricksMetastoreConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig">DataDatabricksMetastoreConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig">DataDatabricksMetastoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.putMetastoreInfo">PutMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetMetastoreInfo">ResetMetastoreInfo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMetastoreInfo` <a name="PutMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.putMetastoreInfo"></a>

```csharp
private void PutMetastoreInfo(DataDatabricksMetastoreMetastoreInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.putMetastoreInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetastoreInfo` <a name="ResetMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.resetMetastoreInfo"></a>

```csharp
private void ResetMetastoreInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMetastore.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMetastore.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMetastore.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreInfo">MetastoreInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference">DataDatabricksMetastoreMetastoreInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreInfoInput">MetastoreInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `MetastoreInfo`<sup>Required</sup> <a name="MetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreInfo"></a>

```csharp
public DataDatabricksMetastoreMetastoreInfoOutputReference MetastoreInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference">DataDatabricksMetastoreMetastoreInfoOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `MetastoreInfoInput`<sup>Optional</sup> <a name="MetastoreInfoInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreInfoInput"></a>

```csharp
public DataDatabricksMetastoreMetastoreInfo MetastoreInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastore.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMetastoreConfig <a name="DataDatabricksMetastoreConfig" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMetastoreConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MetastoreId,
    string Id = null,
    DataDatabricksMetastoreMetastoreInfo MetastoreInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#id DataDatabricksMetastore#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.metastoreInfo">MetastoreInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a></code> | metastore_info block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#id DataDatabricksMetastore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetastoreInfo`<sup>Optional</sup> <a name="MetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreConfig.property.metastoreInfo"></a>

```csharp
public DataDatabricksMetastoreMetastoreInfo MetastoreInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a>

metastore_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#metastore_info DataDatabricksMetastore#metastore_info}

---

### DataDatabricksMetastoreMetastoreInfo <a name="DataDatabricksMetastoreMetastoreInfo" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMetastoreMetastoreInfo {
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.cloud">Cloud</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#cloud DataDatabricksMetastore#cloud}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.createdAt">CreatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#created_at DataDatabricksMetastore#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.createdBy">CreatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#created_by DataDatabricksMetastore#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.defaultDataAccessConfigId">DefaultDataAccessConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#default_data_access_config_id DataDatabricksMetastore#default_data_access_config_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingOrganizationName">DeltaSharingOrganizationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#delta_sharing_organization_name DataDatabricksMetastore#delta_sharing_organization_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds">DeltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksMetastore#delta_sharing_recipient_token_lifetime_in_seconds}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingScope">DeltaSharingScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#delta_sharing_scope DataDatabricksMetastore#delta_sharing_scope}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#global_metastore_id DataDatabricksMetastore#global_metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#owner DataDatabricksMetastore#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.privilegeModelVersion">PrivilegeModelVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#privilege_model_version DataDatabricksMetastore#privilege_model_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRoot">StorageRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#storage_root DataDatabricksMetastore#storage_root}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRootCredentialId">StorageRootCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#storage_root_credential_id DataDatabricksMetastore#storage_root_credential_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRootCredentialName">StorageRootCredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#storage_root_credential_name DataDatabricksMetastore#storage_root_credential_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#updated_at DataDatabricksMetastore#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#updated_by DataDatabricksMetastore#updated_by}. |

---

##### `Cloud`<sup>Optional</sup> <a name="Cloud" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.cloud"></a>

```csharp
public string Cloud { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#cloud DataDatabricksMetastore#cloud}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.createdAt"></a>

```csharp
public double CreatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#created_at DataDatabricksMetastore#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#created_by DataDatabricksMetastore#created_by}.

---

##### `DefaultDataAccessConfigId`<sup>Optional</sup> <a name="DefaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.defaultDataAccessConfigId"></a>

```csharp
public string DefaultDataAccessConfigId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#default_data_access_config_id DataDatabricksMetastore#default_data_access_config_id}.

---

##### `DeltaSharingOrganizationName`<sup>Optional</sup> <a name="DeltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingOrganizationName"></a>

```csharp
public string DeltaSharingOrganizationName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#delta_sharing_organization_name DataDatabricksMetastore#delta_sharing_organization_name}.

---

##### `DeltaSharingRecipientTokenLifetimeInSeconds`<sup>Optional</sup> <a name="DeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```csharp
public double DeltaSharingRecipientTokenLifetimeInSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#delta_sharing_recipient_token_lifetime_in_seconds DataDatabricksMetastore#delta_sharing_recipient_token_lifetime_in_seconds}.

---

##### `DeltaSharingScope`<sup>Optional</sup> <a name="DeltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.deltaSharingScope"></a>

```csharp
public string DeltaSharingScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#delta_sharing_scope DataDatabricksMetastore#delta_sharing_scope}.

---

##### `GlobalMetastoreId`<sup>Optional</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.globalMetastoreId"></a>

```csharp
public string GlobalMetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#global_metastore_id DataDatabricksMetastore#global_metastore_id}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#metastore_id DataDatabricksMetastore#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#name DataDatabricksMetastore#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#owner DataDatabricksMetastore#owner}.

---

##### `PrivilegeModelVersion`<sup>Optional</sup> <a name="PrivilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.privilegeModelVersion"></a>

```csharp
public string PrivilegeModelVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#privilege_model_version DataDatabricksMetastore#privilege_model_version}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#region DataDatabricksMetastore#region}.

---

##### `StorageRoot`<sup>Optional</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRoot"></a>

```csharp
public string StorageRoot { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#storage_root DataDatabricksMetastore#storage_root}.

---

##### `StorageRootCredentialId`<sup>Optional</sup> <a name="StorageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRootCredentialId"></a>

```csharp
public string StorageRootCredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#storage_root_credential_id DataDatabricksMetastore#storage_root_credential_id}.

---

##### `StorageRootCredentialName`<sup>Optional</sup> <a name="StorageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.storageRootCredentialName"></a>

```csharp
public string StorageRootCredentialName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#storage_root_credential_name DataDatabricksMetastore#storage_root_credential_name}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#updated_at DataDatabricksMetastore#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.26.0/docs/data-sources/metastore#updated_by DataDatabricksMetastore#updated_by}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksMetastoreMetastoreInfoOutputReference <a name="DataDatabricksMetastoreMetastoreInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMetastoreMetastoreInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCloud">ResetCloud</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId">ResetDefaultDataAccessConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName">ResetDeltaSharingOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds">ResetDeltaSharingRecipientTokenLifetimeInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope">ResetDeltaSharingScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId">ResetGlobalMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion">ResetPrivilegeModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRoot">ResetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId">ResetStorageRootCredentialId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName">ResetStorageRootCredentialName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloud` <a name="ResetCloud" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCloud"></a>

```csharp
private void ResetCloud()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetDefaultDataAccessConfigId` <a name="ResetDefaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDefaultDataAccessConfigId"></a>

```csharp
private void ResetDefaultDataAccessConfigId()
```

##### `ResetDeltaSharingOrganizationName` <a name="ResetDeltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingOrganizationName"></a>

```csharp
private void ResetDeltaSharingOrganizationName()
```

##### `ResetDeltaSharingRecipientTokenLifetimeInSeconds` <a name="ResetDeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingRecipientTokenLifetimeInSeconds"></a>

```csharp
private void ResetDeltaSharingRecipientTokenLifetimeInSeconds()
```

##### `ResetDeltaSharingScope` <a name="ResetDeltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetDeltaSharingScope"></a>

```csharp
private void ResetDeltaSharingScope()
```

##### `ResetGlobalMetastoreId` <a name="ResetGlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetGlobalMetastoreId"></a>

```csharp
private void ResetGlobalMetastoreId()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetPrivilegeModelVersion` <a name="ResetPrivilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetPrivilegeModelVersion"></a>

```csharp
private void ResetPrivilegeModelVersion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStorageRoot` <a name="ResetStorageRoot" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRoot"></a>

```csharp
private void ResetStorageRoot()
```

##### `ResetStorageRootCredentialId` <a name="ResetStorageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialId"></a>

```csharp
private void ResetStorageRootCredentialId()
```

##### `ResetStorageRootCredentialName` <a name="ResetStorageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetStorageRootCredentialName"></a>

```csharp
private void ResetStorageRootCredentialName()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.resetUpdatedBy"></a>

```csharp
private void ResetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.cloudInput">CloudInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput">DefaultDataAccessConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput">DeltaSharingOrganizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput">DeltaSharingRecipientTokenLifetimeInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput">DeltaSharingScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput">GlobalMetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput">PrivilegeModelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput">StorageRootCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput">StorageRootCredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootInput">StorageRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.cloud">Cloud</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId">DefaultDataAccessConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName">DeltaSharingOrganizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds">DeltaSharingRecipientTokenLifetimeInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingScope">DeltaSharingScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.globalMetastoreId">GlobalMetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion">PrivilegeModelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRoot">StorageRoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId">StorageRootCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName">StorageRootCredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudInput`<sup>Optional</sup> <a name="CloudInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.cloudInput"></a>

```csharp
public string CloudInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdAtInput"></a>

```csharp
public double CreatedAtInput { get; }
```

- *Type:* double

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `DefaultDataAccessConfigIdInput`<sup>Optional</sup> <a name="DefaultDataAccessConfigIdInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigIdInput"></a>

```csharp
public string DefaultDataAccessConfigIdInput { get; }
```

- *Type:* string

---

##### `DeltaSharingOrganizationNameInput`<sup>Optional</sup> <a name="DeltaSharingOrganizationNameInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationNameInput"></a>

```csharp
public string DeltaSharingOrganizationNameInput { get; }
```

- *Type:* string

---

##### `DeltaSharingRecipientTokenLifetimeInSecondsInput`<sup>Optional</sup> <a name="DeltaSharingRecipientTokenLifetimeInSecondsInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSecondsInput"></a>

```csharp
public double DeltaSharingRecipientTokenLifetimeInSecondsInput { get; }
```

- *Type:* double

---

##### `DeltaSharingScopeInput`<sup>Optional</sup> <a name="DeltaSharingScopeInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingScopeInput"></a>

```csharp
public string DeltaSharingScopeInput { get; }
```

- *Type:* string

---

##### `GlobalMetastoreIdInput`<sup>Optional</sup> <a name="GlobalMetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.globalMetastoreIdInput"></a>

```csharp
public string GlobalMetastoreIdInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `PrivilegeModelVersionInput`<sup>Optional</sup> <a name="PrivilegeModelVersionInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.privilegeModelVersionInput"></a>

```csharp
public string PrivilegeModelVersionInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StorageRootCredentialIdInput`<sup>Optional</sup> <a name="StorageRootCredentialIdInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialIdInput"></a>

```csharp
public string StorageRootCredentialIdInput { get; }
```

- *Type:* string

---

##### `StorageRootCredentialNameInput`<sup>Optional</sup> <a name="StorageRootCredentialNameInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialNameInput"></a>

```csharp
public string StorageRootCredentialNameInput { get; }
```

- *Type:* string

---

##### `StorageRootInput`<sup>Optional</sup> <a name="StorageRootInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootInput"></a>

```csharp
public string StorageRootInput { get; }
```

- *Type:* string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedAtInput"></a>

```csharp
public double UpdatedAtInput { get; }
```

- *Type:* double

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedByInput"></a>

```csharp
public string UpdatedByInput { get; }
```

- *Type:* string

---

##### `Cloud`<sup>Required</sup> <a name="Cloud" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.cloud"></a>

```csharp
public string Cloud { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `DefaultDataAccessConfigId`<sup>Required</sup> <a name="DefaultDataAccessConfigId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.defaultDataAccessConfigId"></a>

```csharp
public string DefaultDataAccessConfigId { get; }
```

- *Type:* string

---

##### `DeltaSharingOrganizationName`<sup>Required</sup> <a name="DeltaSharingOrganizationName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingOrganizationName"></a>

```csharp
public string DeltaSharingOrganizationName { get; }
```

- *Type:* string

---

##### `DeltaSharingRecipientTokenLifetimeInSeconds`<sup>Required</sup> <a name="DeltaSharingRecipientTokenLifetimeInSeconds" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingRecipientTokenLifetimeInSeconds"></a>

```csharp
public double DeltaSharingRecipientTokenLifetimeInSeconds { get; }
```

- *Type:* double

---

##### `DeltaSharingScope`<sup>Required</sup> <a name="DeltaSharingScope" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.deltaSharingScope"></a>

```csharp
public string DeltaSharingScope { get; }
```

- *Type:* string

---

##### `GlobalMetastoreId`<sup>Required</sup> <a name="GlobalMetastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.globalMetastoreId"></a>

```csharp
public string GlobalMetastoreId { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `PrivilegeModelVersion`<sup>Required</sup> <a name="PrivilegeModelVersion" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.privilegeModelVersion"></a>

```csharp
public string PrivilegeModelVersion { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRoot"></a>

```csharp
public string StorageRoot { get; }
```

- *Type:* string

---

##### `StorageRootCredentialId`<sup>Required</sup> <a name="StorageRootCredentialId" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialId"></a>

```csharp
public string StorageRootCredentialId { get; }
```

- *Type:* string

---

##### `StorageRootCredentialName`<sup>Required</sup> <a name="StorageRootCredentialName" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.storageRootCredentialName"></a>

```csharp
public string StorageRootCredentialName { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksMetastoreMetastoreInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMetastore.DataDatabricksMetastoreMetastoreInfo">DataDatabricksMetastoreMetastoreInfo</a>

---



