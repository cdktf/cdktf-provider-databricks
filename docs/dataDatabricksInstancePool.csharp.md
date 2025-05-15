# `dataDatabricksInstancePool` Submodule <a name="`dataDatabricksInstancePool` Submodule" id="@cdktf/provider-databricks.dataDatabricksInstancePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksInstancePool <a name="DataDatabricksInstancePool" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool databricks_instance_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePool(Construct Scope, string Id, DataDatabricksInstancePoolConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig">DataDatabricksInstancePoolConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig">DataDatabricksInstancePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.putPoolInfo">PutPoolInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.resetPoolInfo">ResetPoolInfo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutPoolInfo` <a name="PutPoolInfo" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.putPoolInfo"></a>

```csharp
private void PutPoolInfo(DataDatabricksInstancePoolPoolInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.putPoolInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPoolInfo` <a name="ResetPoolInfo" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.resetPoolInfo"></a>

```csharp
private void ResetPoolInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksInstancePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksInstancePool.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksInstancePool.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksInstancePool.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksInstancePool.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksInstancePool resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksInstancePool to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksInstancePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksInstancePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.poolInfo">PoolInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference">DataDatabricksInstancePoolPoolInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.poolInfoInput">PoolInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `PoolInfo`<sup>Required</sup> <a name="PoolInfo" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.poolInfo"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoOutputReference PoolInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference">DataDatabricksInstancePoolPoolInfoOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PoolInfoInput`<sup>Optional</sup> <a name="PoolInfoInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.poolInfoInput"></a>

```csharp
public DataDatabricksInstancePoolPoolInfo PoolInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePool.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksInstancePoolConfig <a name="DataDatabricksInstancePoolConfig" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    DataDatabricksInstancePoolPoolInfo PoolInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#name DataDatabricksInstancePool#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#id DataDatabricksInstancePool#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.poolInfo">PoolInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a></code> | pool_info block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#name DataDatabricksInstancePool#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#id DataDatabricksInstancePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PoolInfo`<sup>Optional</sup> <a name="PoolInfo" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolConfig.property.poolInfo"></a>

```csharp
public DataDatabricksInstancePoolPoolInfo PoolInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a>

pool_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#pool_info DataDatabricksInstancePool#pool_info}

---

### DataDatabricksInstancePoolPoolInfo <a name="DataDatabricksInstancePoolPoolInfo" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfo {
    double IdleInstanceAutoterminationMinutes,
    string InstancePoolName,
    DataDatabricksInstancePoolPoolInfoAwsAttributes AwsAttributes = null,
    DataDatabricksInstancePoolPoolInfoAzureAttributes AzureAttributes = null,
    System.Collections.Generic.IDictionary<string, string> CustomTags = null,
    System.Collections.Generic.IDictionary<string, string> DefaultTags = null,
    DataDatabricksInstancePoolPoolInfoDiskSpec DiskSpec = null,
    object EnableElasticDisk = null,
    DataDatabricksInstancePoolPoolInfoGcpAttributes GcpAttributes = null,
    object InstancePoolFleetAttributes = null,
    string InstancePoolId = null,
    double MaxCapacity = null,
    double MinIdleInstances = null,
    string NodeTypeId = null,
    object PreloadedDockerImage = null,
    string[] PreloadedSparkVersions = null,
    string State = null,
    DataDatabricksInstancePoolPoolInfoStats Stats = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.idleInstanceAutoterminationMinutes">IdleInstanceAutoterminationMinutes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#idle_instance_autotermination_minutes DataDatabricksInstancePool#idle_instance_autotermination_minutes}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.instancePoolName">InstancePoolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#instance_pool_name DataDatabricksInstancePool#instance_pool_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a></code> | aws_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a></code> | azure_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#custom_tags DataDatabricksInstancePool#custom_tags}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.defaultTags">DefaultTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#default_tags DataDatabricksInstancePool#default_tags}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a></code> | disk_spec block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.enableElasticDisk">EnableElasticDisk</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#enable_elastic_disk DataDatabricksInstancePool#enable_elastic_disk}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a></code> | gcp_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.instancePoolFleetAttributes">InstancePoolFleetAttributes</a></code> | <code>object</code> | instance_pool_fleet_attributes block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.instancePoolId">InstancePoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#instance_pool_id DataDatabricksInstancePool#instance_pool_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#max_capacity DataDatabricksInstancePool#max_capacity}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.minIdleInstances">MinIdleInstances</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#min_idle_instances DataDatabricksInstancePool#min_idle_instances}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.nodeTypeId">NodeTypeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#node_type_id DataDatabricksInstancePool#node_type_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.preloadedDockerImage">PreloadedDockerImage</a></code> | <code>object</code> | preloaded_docker_image block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.preloadedSparkVersions">PreloadedSparkVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#preloaded_spark_versions DataDatabricksInstancePool#preloaded_spark_versions}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#state DataDatabricksInstancePool#state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.stats">Stats</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a></code> | stats block. |

---

##### `IdleInstanceAutoterminationMinutes`<sup>Required</sup> <a name="IdleInstanceAutoterminationMinutes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.idleInstanceAutoterminationMinutes"></a>

```csharp
public double IdleInstanceAutoterminationMinutes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#idle_instance_autotermination_minutes DataDatabricksInstancePool#idle_instance_autotermination_minutes}.

---

##### `InstancePoolName`<sup>Required</sup> <a name="InstancePoolName" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.instancePoolName"></a>

```csharp
public string InstancePoolName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#instance_pool_name DataDatabricksInstancePool#instance_pool_name}.

---

##### `AwsAttributes`<sup>Optional</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.awsAttributes"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoAwsAttributes AwsAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a>

aws_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#aws_attributes DataDatabricksInstancePool#aws_attributes}

---

##### `AzureAttributes`<sup>Optional</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.azureAttributes"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoAzureAttributes AzureAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a>

azure_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#azure_attributes DataDatabricksInstancePool#azure_attributes}

---

##### `CustomTags`<sup>Optional</sup> <a name="CustomTags" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#custom_tags DataDatabricksInstancePool#custom_tags}.

---

##### `DefaultTags`<sup>Optional</sup> <a name="DefaultTags" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.defaultTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultTags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#default_tags DataDatabricksInstancePool#default_tags}.

---

##### `DiskSpec`<sup>Optional</sup> <a name="DiskSpec" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.diskSpec"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoDiskSpec DiskSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a>

disk_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#disk_spec DataDatabricksInstancePool#disk_spec}

---

##### `EnableElasticDisk`<sup>Optional</sup> <a name="EnableElasticDisk" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.enableElasticDisk"></a>

```csharp
public object EnableElasticDisk { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#enable_elastic_disk DataDatabricksInstancePool#enable_elastic_disk}.

---

##### `GcpAttributes`<sup>Optional</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.gcpAttributes"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoGcpAttributes GcpAttributes { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a>

gcp_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#gcp_attributes DataDatabricksInstancePool#gcp_attributes}

---

##### `InstancePoolFleetAttributes`<sup>Optional</sup> <a name="InstancePoolFleetAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.instancePoolFleetAttributes"></a>

```csharp
public object InstancePoolFleetAttributes { get; set; }
```

- *Type:* object

instance_pool_fleet_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#instance_pool_fleet_attributes DataDatabricksInstancePool#instance_pool_fleet_attributes}

---

##### `InstancePoolId`<sup>Optional</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.instancePoolId"></a>

```csharp
public string InstancePoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#instance_pool_id DataDatabricksInstancePool#instance_pool_id}.

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#max_capacity DataDatabricksInstancePool#max_capacity}.

---

##### `MinIdleInstances`<sup>Optional</sup> <a name="MinIdleInstances" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.minIdleInstances"></a>

```csharp
public double MinIdleInstances { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#min_idle_instances DataDatabricksInstancePool#min_idle_instances}.

---

##### `NodeTypeId`<sup>Optional</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.nodeTypeId"></a>

```csharp
public string NodeTypeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#node_type_id DataDatabricksInstancePool#node_type_id}.

---

##### `PreloadedDockerImage`<sup>Optional</sup> <a name="PreloadedDockerImage" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.preloadedDockerImage"></a>

```csharp
public object PreloadedDockerImage { get; set; }
```

- *Type:* object

preloaded_docker_image block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#preloaded_docker_image DataDatabricksInstancePool#preloaded_docker_image}

---

##### `PreloadedSparkVersions`<sup>Optional</sup> <a name="PreloadedSparkVersions" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.preloadedSparkVersions"></a>

```csharp
public string[] PreloadedSparkVersions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#preloaded_spark_versions DataDatabricksInstancePool#preloaded_spark_versions}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#state DataDatabricksInstancePool#state}.

---

##### `Stats`<sup>Optional</sup> <a name="Stats" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo.property.stats"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoStats Stats { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a>

stats block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#stats DataDatabricksInstancePool#stats}

---

### DataDatabricksInstancePoolPoolInfoAwsAttributes <a name="DataDatabricksInstancePoolPoolInfoAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoAwsAttributes {
    string Availability = null,
    double SpotBidPricePercent = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.availability">Availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#availability DataDatabricksInstancePool#availability}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#spot_bid_price_percent DataDatabricksInstancePool#spot_bid_price_percent}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#zone_id DataDatabricksInstancePool#zone_id}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.availability"></a>

```csharp
public string Availability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#availability DataDatabricksInstancePool#availability}.

---

##### `SpotBidPricePercent`<sup>Optional</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.spotBidPricePercent"></a>

```csharp
public double SpotBidPricePercent { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#spot_bid_price_percent DataDatabricksInstancePool#spot_bid_price_percent}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#zone_id DataDatabricksInstancePool#zone_id}.

---

### DataDatabricksInstancePoolPoolInfoAzureAttributes <a name="DataDatabricksInstancePoolPoolInfoAzureAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoAzureAttributes {
    string Availability = null,
    double SpotBidMaxPrice = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes.property.availability">Availability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#availability DataDatabricksInstancePool#availability}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#spot_bid_max_price DataDatabricksInstancePool#spot_bid_max_price}. |

---

##### `Availability`<sup>Optional</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes.property.availability"></a>

```csharp
public string Availability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#availability DataDatabricksInstancePool#availability}.

---

##### `SpotBidMaxPrice`<sup>Optional</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes.property.spotBidMaxPrice"></a>

```csharp
public double SpotBidMaxPrice { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#spot_bid_max_price DataDatabricksInstancePool#spot_bid_max_price}.

---

### DataDatabricksInstancePoolPoolInfoDiskSpec <a name="DataDatabricksInstancePoolPoolInfoDiskSpec" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoDiskSpec {
    double DiskCount = null,
    double DiskSize = null,
    DataDatabricksInstancePoolPoolInfoDiskSpecDiskType DiskType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.property.diskCount">DiskCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#disk_count DataDatabricksInstancePool#disk_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.property.diskSize">DiskSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#disk_size DataDatabricksInstancePool#disk_size}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.property.diskType">DiskType</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a></code> | disk_type block. |

---

##### `DiskCount`<sup>Optional</sup> <a name="DiskCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.property.diskCount"></a>

```csharp
public double DiskCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#disk_count DataDatabricksInstancePool#disk_count}.

---

##### `DiskSize`<sup>Optional</sup> <a name="DiskSize" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.property.diskSize"></a>

```csharp
public double DiskSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#disk_size DataDatabricksInstancePool#disk_size}.

---

##### `DiskType`<sup>Optional</sup> <a name="DiskType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec.property.diskType"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoDiskSpecDiskType DiskType { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a>

disk_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#disk_type DataDatabricksInstancePool#disk_type}

---

### DataDatabricksInstancePoolPoolInfoDiskSpecDiskType <a name="DataDatabricksInstancePoolPoolInfoDiskSpecDiskType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoDiskSpecDiskType {
    string AzureDiskVolumeType = null,
    string EbsVolumeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType.property.azureDiskVolumeType">AzureDiskVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#azure_disk_volume_type DataDatabricksInstancePool#azure_disk_volume_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType.property.ebsVolumeType">EbsVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#ebs_volume_type DataDatabricksInstancePool#ebs_volume_type}. |

---

##### `AzureDiskVolumeType`<sup>Optional</sup> <a name="AzureDiskVolumeType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType.property.azureDiskVolumeType"></a>

```csharp
public string AzureDiskVolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#azure_disk_volume_type DataDatabricksInstancePool#azure_disk_volume_type}.

---

##### `EbsVolumeType`<sup>Optional</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType.property.ebsVolumeType"></a>

```csharp
public string EbsVolumeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#ebs_volume_type DataDatabricksInstancePool#ebs_volume_type}.

---

### DataDatabricksInstancePoolPoolInfoGcpAttributes <a name="DataDatabricksInstancePoolPoolInfoGcpAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoGcpAttributes {
    string GcpAvailability = null,
    double LocalSsdCount = null,
    string ZoneId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.property.gcpAvailability">GcpAvailability</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#gcp_availability DataDatabricksInstancePool#gcp_availability}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#local_ssd_count DataDatabricksInstancePool#local_ssd_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.property.zoneId">ZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#zone_id DataDatabricksInstancePool#zone_id}. |

---

##### `GcpAvailability`<sup>Optional</sup> <a name="GcpAvailability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.property.gcpAvailability"></a>

```csharp
public string GcpAvailability { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#gcp_availability DataDatabricksInstancePool#gcp_availability}.

---

##### `LocalSsdCount`<sup>Optional</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#local_ssd_count DataDatabricksInstancePool#local_ssd_count}.

---

##### `ZoneId`<sup>Optional</sup> <a name="ZoneId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#zone_id DataDatabricksInstancePool#zone_id}.

---

### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes {
    object LaunchTemplateOverride,
    DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption FleetOnDemandOption = null,
    DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption FleetSpotOption = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.property.launchTemplateOverride">LaunchTemplateOverride</a></code> | <code>object</code> | launch_template_override block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.property.fleetOnDemandOption">FleetOnDemandOption</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a></code> | fleet_on_demand_option block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.property.fleetSpotOption">FleetSpotOption</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a></code> | fleet_spot_option block. |

---

##### `LaunchTemplateOverride`<sup>Required</sup> <a name="LaunchTemplateOverride" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.property.launchTemplateOverride"></a>

```csharp
public object LaunchTemplateOverride { get; set; }
```

- *Type:* object

launch_template_override block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#launch_template_override DataDatabricksInstancePool#launch_template_override}

---

##### `FleetOnDemandOption`<sup>Optional</sup> <a name="FleetOnDemandOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.property.fleetOnDemandOption"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption FleetOnDemandOption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a>

fleet_on_demand_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#fleet_on_demand_option DataDatabricksInstancePool#fleet_on_demand_option}

---

##### `FleetSpotOption`<sup>Optional</sup> <a name="FleetSpotOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributes.property.fleetSpotOption"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption FleetSpotOption { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a>

fleet_spot_option block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#fleet_spot_option DataDatabricksInstancePool#fleet_spot_option}

---

### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption {
    string AllocationStrategy,
    double InstancePoolsToUseCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#allocation_strategy DataDatabricksInstancePool#allocation_strategy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#instance_pools_to_use_count DataDatabricksInstancePool#instance_pools_to_use_count}. |

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#allocation_strategy DataDatabricksInstancePool#allocation_strategy}.

---

##### `InstancePoolsToUseCount`<sup>Optional</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption.property.instancePoolsToUseCount"></a>

```csharp
public double InstancePoolsToUseCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#instance_pools_to_use_count DataDatabricksInstancePool#instance_pools_to_use_count}.

---

### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption {
    string AllocationStrategy,
    double InstancePoolsToUseCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#allocation_strategy DataDatabricksInstancePool#allocation_strategy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#instance_pools_to_use_count DataDatabricksInstancePool#instance_pools_to_use_count}. |

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#allocation_strategy DataDatabricksInstancePool#allocation_strategy}.

---

##### `InstancePoolsToUseCount`<sup>Optional</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption.property.instancePoolsToUseCount"></a>

```csharp
public double InstancePoolsToUseCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#instance_pools_to_use_count DataDatabricksInstancePool#instance_pools_to_use_count}.

---

### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride {
    string AvailabilityZone,
    string InstanceType
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#availability_zone DataDatabricksInstancePool#availability_zone}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride.property.instanceType">InstanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#instance_type DataDatabricksInstancePool#instance_type}. |

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#availability_zone DataDatabricksInstancePool#availability_zone}.

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverride.property.instanceType"></a>

```csharp
public string InstanceType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#instance_type DataDatabricksInstancePool#instance_type}.

---

### DataDatabricksInstancePoolPoolInfoPreloadedDockerImage <a name="DataDatabricksInstancePoolPoolInfoPreloadedDockerImage" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoPreloadedDockerImage {
    string Url,
    DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth BasicAuth = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImage.property.url">Url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#url DataDatabricksInstancePool#url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImage.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a></code> | basic_auth block. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImage.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#url DataDatabricksInstancePool#url}.

---

##### `BasicAuth`<sup>Optional</sup> <a name="BasicAuth" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImage.property.basicAuth"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth BasicAuth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a>

basic_auth block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#basic_auth DataDatabricksInstancePool#basic_auth}

---

### DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth <a name="DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth {
    string Password,
    string Username
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth.property.password">Password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#password DataDatabricksInstancePool#password}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth.property.username">Username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#username DataDatabricksInstancePool#username}. |

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#password DataDatabricksInstancePool#password}.

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#username DataDatabricksInstancePool#username}.

---

### DataDatabricksInstancePoolPoolInfoStats <a name="DataDatabricksInstancePoolPoolInfoStats" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoStats {
    double IdleCount = null,
    double PendingIdleCount = null,
    double PendingUsedCount = null,
    double UsedCount = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.idleCount">IdleCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#idle_count DataDatabricksInstancePool#idle_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.pendingIdleCount">PendingIdleCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#pending_idle_count DataDatabricksInstancePool#pending_idle_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.pendingUsedCount">PendingUsedCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#pending_used_count DataDatabricksInstancePool#pending_used_count}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.usedCount">UsedCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#used_count DataDatabricksInstancePool#used_count}. |

---

##### `IdleCount`<sup>Optional</sup> <a name="IdleCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.idleCount"></a>

```csharp
public double IdleCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#idle_count DataDatabricksInstancePool#idle_count}.

---

##### `PendingIdleCount`<sup>Optional</sup> <a name="PendingIdleCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.pendingIdleCount"></a>

```csharp
public double PendingIdleCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#pending_idle_count DataDatabricksInstancePool#pending_idle_count}.

---

##### `PendingUsedCount`<sup>Optional</sup> <a name="PendingUsedCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.pendingUsedCount"></a>

```csharp
public double PendingUsedCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#pending_used_count DataDatabricksInstancePool#pending_used_count}.

---

##### `UsedCount`<sup>Optional</sup> <a name="UsedCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats.property.usedCount"></a>

```csharp
public double UsedCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.79.1/docs/data-sources/instance_pool#used_count DataDatabricksInstancePool#used_count}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference <a name="DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetSpotBidPricePercent">ResetSpotBidPricePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetAvailability"></a>

```csharp
private void ResetAvailability()
```

##### `ResetSpotBidPricePercent` <a name="ResetSpotBidPricePercent" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetSpotBidPricePercent"></a>

```csharp
private void ResetSpotBidPricePercent()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.resetZoneId"></a>

```csharp
private void ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.spotBidPricePercentInput">SpotBidPricePercentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.availability">Availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.spotBidPricePercent">SpotBidPricePercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.availabilityInput"></a>

```csharp
public string AvailabilityInput { get; }
```

- *Type:* string

---

##### `SpotBidPricePercentInput`<sup>Optional</sup> <a name="SpotBidPricePercentInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.spotBidPricePercentInput"></a>

```csharp
public double SpotBidPricePercentInput { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.availability"></a>

```csharp
public string Availability { get; }
```

- *Type:* string

---

##### `SpotBidPricePercent`<sup>Required</sup> <a name="SpotBidPricePercent" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.spotBidPricePercent"></a>

```csharp
public double SpotBidPricePercent { get; }
```

- *Type:* double

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoAwsAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a>

---


### DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference <a name="DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resetAvailability">ResetAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resetSpotBidMaxPrice">ResetSpotBidMaxPrice</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailability` <a name="ResetAvailability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resetAvailability"></a>

```csharp
private void ResetAvailability()
```

##### `ResetSpotBidMaxPrice` <a name="ResetSpotBidMaxPrice" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.resetSpotBidMaxPrice"></a>

```csharp
private void ResetSpotBidMaxPrice()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.availabilityInput">AvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.spotBidMaxPriceInput">SpotBidMaxPriceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.availability">Availability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.spotBidMaxPrice">SpotBidMaxPrice</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityInput`<sup>Optional</sup> <a name="AvailabilityInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.availabilityInput"></a>

```csharp
public string AvailabilityInput { get; }
```

- *Type:* string

---

##### `SpotBidMaxPriceInput`<sup>Optional</sup> <a name="SpotBidMaxPriceInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.spotBidMaxPriceInput"></a>

```csharp
public double SpotBidMaxPriceInput { get; }
```

- *Type:* double

---

##### `Availability`<sup>Required</sup> <a name="Availability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.availability"></a>

```csharp
public string Availability { get; }
```

- *Type:* string

---

##### `SpotBidMaxPrice`<sup>Required</sup> <a name="SpotBidMaxPrice" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.spotBidMaxPrice"></a>

```csharp
public double SpotBidMaxPrice { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoAzureAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a>

---


### DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference <a name="DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resetAzureDiskVolumeType">ResetAzureDiskVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resetEbsVolumeType">ResetEbsVolumeType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureDiskVolumeType` <a name="ResetAzureDiskVolumeType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resetAzureDiskVolumeType"></a>

```csharp
private void ResetAzureDiskVolumeType()
```

##### `ResetEbsVolumeType` <a name="ResetEbsVolumeType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.resetEbsVolumeType"></a>

```csharp
private void ResetEbsVolumeType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.azureDiskVolumeTypeInput">AzureDiskVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.ebsVolumeTypeInput">EbsVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.azureDiskVolumeType">AzureDiskVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.ebsVolumeType">EbsVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureDiskVolumeTypeInput`<sup>Optional</sup> <a name="AzureDiskVolumeTypeInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.azureDiskVolumeTypeInput"></a>

```csharp
public string AzureDiskVolumeTypeInput { get; }
```

- *Type:* string

---

##### `EbsVolumeTypeInput`<sup>Optional</sup> <a name="EbsVolumeTypeInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.ebsVolumeTypeInput"></a>

```csharp
public string EbsVolumeTypeInput { get; }
```

- *Type:* string

---

##### `AzureDiskVolumeType`<sup>Required</sup> <a name="AzureDiskVolumeType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.azureDiskVolumeType"></a>

```csharp
public string AzureDiskVolumeType { get; }
```

- *Type:* string

---

##### `EbsVolumeType`<sup>Required</sup> <a name="EbsVolumeType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.ebsVolumeType"></a>

```csharp
public string EbsVolumeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoDiskSpecDiskType InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a>

---


### DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference <a name="DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.putDiskType">PutDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resetDiskCount">ResetDiskCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resetDiskSize">ResetDiskSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resetDiskType">ResetDiskType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDiskType` <a name="PutDiskType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.putDiskType"></a>

```csharp
private void PutDiskType(DataDatabricksInstancePoolPoolInfoDiskSpecDiskType Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.putDiskType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a>

---

##### `ResetDiskCount` <a name="ResetDiskCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resetDiskCount"></a>

```csharp
private void ResetDiskCount()
```

##### `ResetDiskSize` <a name="ResetDiskSize" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resetDiskSize"></a>

```csharp
private void ResetDiskSize()
```

##### `ResetDiskType` <a name="ResetDiskType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.resetDiskType"></a>

```csharp
private void ResetDiskType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskType">DiskType</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference">DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskCountInput">DiskCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskSizeInput">DiskSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskTypeInput">DiskTypeInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskCount">DiskCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskSize">DiskSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskType"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference DiskType { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference">DataDatabricksInstancePoolPoolInfoDiskSpecDiskTypeOutputReference</a>

---

##### `DiskCountInput`<sup>Optional</sup> <a name="DiskCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskCountInput"></a>

```csharp
public double DiskCountInput { get; }
```

- *Type:* double

---

##### `DiskSizeInput`<sup>Optional</sup> <a name="DiskSizeInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskSizeInput"></a>

```csharp
public double DiskSizeInput { get; }
```

- *Type:* double

---

##### `DiskTypeInput`<sup>Optional</sup> <a name="DiskTypeInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskTypeInput"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoDiskSpecDiskType DiskTypeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecDiskType">DataDatabricksInstancePoolPoolInfoDiskSpecDiskType</a>

---

##### `DiskCount`<sup>Required</sup> <a name="DiskCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskCount"></a>

```csharp
public double DiskCount { get; }
```

- *Type:* double

---

##### `DiskSize`<sup>Required</sup> <a name="DiskSize" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.diskSize"></a>

```csharp
public double DiskSize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoDiskSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a>

---


### DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference <a name="DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resetGcpAvailability">ResetGcpAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resetLocalSsdCount">ResetLocalSsdCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resetZoneId">ResetZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGcpAvailability` <a name="ResetGcpAvailability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resetGcpAvailability"></a>

```csharp
private void ResetGcpAvailability()
```

##### `ResetLocalSsdCount` <a name="ResetLocalSsdCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resetLocalSsdCount"></a>

```csharp
private void ResetLocalSsdCount()
```

##### `ResetZoneId` <a name="ResetZoneId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.resetZoneId"></a>

```csharp
private void ResetZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.gcpAvailabilityInput">GcpAvailabilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.localSsdCountInput">LocalSsdCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.gcpAvailability">GcpAvailability</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.localSsdCount">LocalSsdCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcpAvailabilityInput`<sup>Optional</sup> <a name="GcpAvailabilityInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.gcpAvailabilityInput"></a>

```csharp
public string GcpAvailabilityInput { get; }
```

- *Type:* string

---

##### `LocalSsdCountInput`<sup>Optional</sup> <a name="LocalSsdCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.localSsdCountInput"></a>

```csharp
public double LocalSsdCountInput { get; }
```

- *Type:* double

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `GcpAvailability`<sup>Required</sup> <a name="GcpAvailability" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.gcpAvailability"></a>

```csharp
public string GcpAvailability { get; }
```

- *Type:* string

---

##### `LocalSsdCount`<sup>Required</sup> <a name="LocalSsdCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.localSsdCount"></a>

```csharp
public double LocalSsdCount { get; }
```

- *Type:* double

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoGcpAttributes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a>

---


### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resetInstancePoolsToUseCount">ResetInstancePoolsToUseCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstancePoolsToUseCount` <a name="ResetInstancePoolsToUseCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.resetInstancePoolsToUseCount"></a>

```csharp
private void ResetInstancePoolsToUseCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCountInput">InstancePoolsToUseCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategyInput"></a>

```csharp
public string AllocationStrategyInput { get; }
```

- *Type:* string

---

##### `InstancePoolsToUseCountInput`<sup>Optional</sup> <a name="InstancePoolsToUseCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCountInput"></a>

```csharp
public double InstancePoolsToUseCountInput { get; }
```

- *Type:* double

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; }
```

- *Type:* string

---

##### `InstancePoolsToUseCount`<sup>Required</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.instancePoolsToUseCount"></a>

```csharp
public double InstancePoolsToUseCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a>

---


### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.resetInstancePoolsToUseCount">ResetInstancePoolsToUseCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstancePoolsToUseCount` <a name="ResetInstancePoolsToUseCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.resetInstancePoolsToUseCount"></a>

```csharp
private void ResetInstancePoolsToUseCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategyInput">AllocationStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCountInput">InstancePoolsToUseCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategy">AllocationStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCount">InstancePoolsToUseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllocationStrategyInput`<sup>Optional</sup> <a name="AllocationStrategyInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategyInput"></a>

```csharp
public string AllocationStrategyInput { get; }
```

- *Type:* string

---

##### `InstancePoolsToUseCountInput`<sup>Optional</sup> <a name="InstancePoolsToUseCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCountInput"></a>

```csharp
public double InstancePoolsToUseCountInput { get; }
```

- *Type:* double

---

##### `AllocationStrategy`<sup>Required</sup> <a name="AllocationStrategy" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.allocationStrategy"></a>

```csharp
public string AllocationStrategy { get; }
```

- *Type:* string

---

##### `InstancePoolsToUseCount`<sup>Required</sup> <a name="InstancePoolsToUseCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.instancePoolsToUseCount"></a>

```csharp
public double InstancePoolsToUseCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a>

---


### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.get"></a>

```csharp
private DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZone">AvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZoneInput"></a>

```csharp
public string AvailabilityZoneInput { get; }
```

- *Type:* string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceTypeInput"></a>

```csharp
public string InstanceTypeInput { get; }
```

- *Type:* string

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.availabilityZone"></a>

```csharp
public string AvailabilityZone { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.get"></a>

```csharp
private DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference <a name="DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption">PutFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putFleetSpotOption">PutFleetSpotOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride">PutLaunchTemplateOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resetFleetOnDemandOption">ResetFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resetFleetSpotOption">ResetFleetSpotOption</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFleetOnDemandOption` <a name="PutFleetOnDemandOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption"></a>

```csharp
private void PutFleetOnDemandOption(DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putFleetOnDemandOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a>

---

##### `PutFleetSpotOption` <a name="PutFleetSpotOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putFleetSpotOption"></a>

```csharp
private void PutFleetSpotOption(DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putFleetSpotOption.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a>

---

##### `PutLaunchTemplateOverride` <a name="PutLaunchTemplateOverride" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride"></a>

```csharp
private void PutLaunchTemplateOverride(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.putLaunchTemplateOverride.parameter.value"></a>

- *Type:* object

---

##### `ResetFleetOnDemandOption` <a name="ResetFleetOnDemandOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resetFleetOnDemandOption"></a>

```csharp
private void ResetFleetOnDemandOption()
```

##### `ResetFleetSpotOption` <a name="ResetFleetSpotOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.resetFleetSpotOption"></a>

```csharp
private void ResetFleetSpotOption()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOption">FleetOnDemandOption</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetSpotOption">FleetSpotOption</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.launchTemplateOverride">LaunchTemplateOverride</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOptionInput">FleetOnDemandOptionInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetSpotOptionInput">FleetSpotOptionInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.launchTemplateOverrideInput">LaunchTemplateOverrideInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FleetOnDemandOption`<sup>Required</sup> <a name="FleetOnDemandOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOption"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference FleetOnDemandOption { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOptionOutputReference</a>

---

##### `FleetSpotOption`<sup>Required</sup> <a name="FleetSpotOption" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetSpotOption"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference FleetSpotOption { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOptionOutputReference</a>

---

##### `LaunchTemplateOverride`<sup>Required</sup> <a name="LaunchTemplateOverride" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.launchTemplateOverride"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList LaunchTemplateOverride { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesLaunchTemplateOverrideList</a>

---

##### `FleetOnDemandOptionInput`<sup>Optional</sup> <a name="FleetOnDemandOptionInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetOnDemandOptionInput"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption FleetOnDemandOptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetOnDemandOption</a>

---

##### `FleetSpotOptionInput`<sup>Optional</sup> <a name="FleetSpotOptionInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.fleetSpotOptionInput"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption FleetSpotOptionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesFleetSpotOption</a>

---

##### `LaunchTemplateOverrideInput`<sup>Optional</sup> <a name="LaunchTemplateOverrideInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.launchTemplateOverrideInput"></a>

```csharp
public object LaunchTemplateOverrideInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksInstancePoolPoolInfoOutputReference <a name="DataDatabricksInstancePoolPoolInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putAwsAttributes">PutAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putAzureAttributes">PutAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putDiskSpec">PutDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putGcpAttributes">PutGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putInstancePoolFleetAttributes">PutInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putPreloadedDockerImage">PutPreloadedDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putStats">PutStats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetAwsAttributes">ResetAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetAzureAttributes">ResetAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetCustomTags">ResetCustomTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetDefaultTags">ResetDefaultTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetDiskSpec">ResetDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetEnableElasticDisk">ResetEnableElasticDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetGcpAttributes">ResetGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetInstancePoolFleetAttributes">ResetInstancePoolFleetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetInstancePoolId">ResetInstancePoolId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetMinIdleInstances">ResetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetNodeTypeId">ResetNodeTypeId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetPreloadedDockerImage">ResetPreloadedDockerImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetPreloadedSparkVersions">ResetPreloadedSparkVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetStats">ResetStats</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAwsAttributes` <a name="PutAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putAwsAttributes"></a>

```csharp
private void PutAwsAttributes(DataDatabricksInstancePoolPoolInfoAwsAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putAwsAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a>

---

##### `PutAzureAttributes` <a name="PutAzureAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putAzureAttributes"></a>

```csharp
private void PutAzureAttributes(DataDatabricksInstancePoolPoolInfoAzureAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putAzureAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a>

---

##### `PutDiskSpec` <a name="PutDiskSpec" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putDiskSpec"></a>

```csharp
private void PutDiskSpec(DataDatabricksInstancePoolPoolInfoDiskSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putDiskSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a>

---

##### `PutGcpAttributes` <a name="PutGcpAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putGcpAttributes"></a>

```csharp
private void PutGcpAttributes(DataDatabricksInstancePoolPoolInfoGcpAttributes Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putGcpAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a>

---

##### `PutInstancePoolFleetAttributes` <a name="PutInstancePoolFleetAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putInstancePoolFleetAttributes"></a>

```csharp
private void PutInstancePoolFleetAttributes(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putInstancePoolFleetAttributes.parameter.value"></a>

- *Type:* object

---

##### `PutPreloadedDockerImage` <a name="PutPreloadedDockerImage" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putPreloadedDockerImage"></a>

```csharp
private void PutPreloadedDockerImage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putPreloadedDockerImage.parameter.value"></a>

- *Type:* object

---

##### `PutStats` <a name="PutStats" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putStats"></a>

```csharp
private void PutStats(DataDatabricksInstancePoolPoolInfoStats Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.putStats.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a>

---

##### `ResetAwsAttributes` <a name="ResetAwsAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetAwsAttributes"></a>

```csharp
private void ResetAwsAttributes()
```

##### `ResetAzureAttributes` <a name="ResetAzureAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetAzureAttributes"></a>

```csharp
private void ResetAzureAttributes()
```

##### `ResetCustomTags` <a name="ResetCustomTags" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetCustomTags"></a>

```csharp
private void ResetCustomTags()
```

##### `ResetDefaultTags` <a name="ResetDefaultTags" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetDefaultTags"></a>

```csharp
private void ResetDefaultTags()
```

##### `ResetDiskSpec` <a name="ResetDiskSpec" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetDiskSpec"></a>

```csharp
private void ResetDiskSpec()
```

##### `ResetEnableElasticDisk` <a name="ResetEnableElasticDisk" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetEnableElasticDisk"></a>

```csharp
private void ResetEnableElasticDisk()
```

##### `ResetGcpAttributes` <a name="ResetGcpAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetGcpAttributes"></a>

```csharp
private void ResetGcpAttributes()
```

##### `ResetInstancePoolFleetAttributes` <a name="ResetInstancePoolFleetAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetInstancePoolFleetAttributes"></a>

```csharp
private void ResetInstancePoolFleetAttributes()
```

##### `ResetInstancePoolId` <a name="ResetInstancePoolId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetInstancePoolId"></a>

```csharp
private void ResetInstancePoolId()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetMaxCapacity"></a>

```csharp
private void ResetMaxCapacity()
```

##### `ResetMinIdleInstances` <a name="ResetMinIdleInstances" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetMinIdleInstances"></a>

```csharp
private void ResetMinIdleInstances()
```

##### `ResetNodeTypeId` <a name="ResetNodeTypeId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetNodeTypeId"></a>

```csharp
private void ResetNodeTypeId()
```

##### `ResetPreloadedDockerImage` <a name="ResetPreloadedDockerImage" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetPreloadedDockerImage"></a>

```csharp
private void ResetPreloadedDockerImage()
```

##### `ResetPreloadedSparkVersions` <a name="ResetPreloadedSparkVersions" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetPreloadedSparkVersions"></a>

```csharp
private void ResetPreloadedSparkVersions()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetStats` <a name="ResetStats" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.resetStats"></a>

```csharp
private void ResetStats()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.awsAttributes">AwsAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference">DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.azureAttributes">AzureAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference">DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.diskSpec">DiskSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference">DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.gcpAttributes">GcpAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference">DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolFleetAttributes">InstancePoolFleetAttributes</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedDockerImage">PreloadedDockerImage</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.stats">Stats</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference">DataDatabricksInstancePoolPoolInfoStatsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.awsAttributesInput">AwsAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.azureAttributesInput">AzureAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.customTagsInput">CustomTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.defaultTagsInput">DefaultTagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.diskSpecInput">DiskSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.enableElasticDiskInput">EnableElasticDiskInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.gcpAttributesInput">GcpAttributesInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.idleInstanceAutoterminationMinutesInput">IdleInstanceAutoterminationMinutesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolFleetAttributesInput">InstancePoolFleetAttributesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolIdInput">InstancePoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolNameInput">InstancePoolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.minIdleInstancesInput">MinIdleInstancesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.nodeTypeIdInput">NodeTypeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedDockerImageInput">PreloadedDockerImageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedSparkVersionsInput">PreloadedSparkVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.statsInput">StatsInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.customTags">CustomTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.defaultTags">DefaultTags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.enableElasticDisk">EnableElasticDisk</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.idleInstanceAutoterminationMinutes">IdleInstanceAutoterminationMinutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolId">InstancePoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolName">InstancePoolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.maxCapacity">MaxCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.minIdleInstances">MinIdleInstances</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.nodeTypeId">NodeTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedSparkVersions">PreloadedSparkVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAttributes`<sup>Required</sup> <a name="AwsAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.awsAttributes"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference AwsAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference">DataDatabricksInstancePoolPoolInfoAwsAttributesOutputReference</a>

---

##### `AzureAttributes`<sup>Required</sup> <a name="AzureAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.azureAttributes"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference AzureAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference">DataDatabricksInstancePoolPoolInfoAzureAttributesOutputReference</a>

---

##### `DiskSpec`<sup>Required</sup> <a name="DiskSpec" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.diskSpec"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference DiskSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference">DataDatabricksInstancePoolPoolInfoDiskSpecOutputReference</a>

---

##### `GcpAttributes`<sup>Required</sup> <a name="GcpAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.gcpAttributes"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference GcpAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference">DataDatabricksInstancePoolPoolInfoGcpAttributesOutputReference</a>

---

##### `InstancePoolFleetAttributes`<sup>Required</sup> <a name="InstancePoolFleetAttributes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolFleetAttributes"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList InstancePoolFleetAttributes { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList">DataDatabricksInstancePoolPoolInfoInstancePoolFleetAttributesList</a>

---

##### `PreloadedDockerImage`<sup>Required</sup> <a name="PreloadedDockerImage" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedDockerImage"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList PreloadedDockerImage { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList</a>

---

##### `Stats`<sup>Required</sup> <a name="Stats" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.stats"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoStatsOutputReference Stats { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference">DataDatabricksInstancePoolPoolInfoStatsOutputReference</a>

---

##### `AwsAttributesInput`<sup>Optional</sup> <a name="AwsAttributesInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.awsAttributesInput"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoAwsAttributes AwsAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAwsAttributes">DataDatabricksInstancePoolPoolInfoAwsAttributes</a>

---

##### `AzureAttributesInput`<sup>Optional</sup> <a name="AzureAttributesInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.azureAttributesInput"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoAzureAttributes AzureAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoAzureAttributes">DataDatabricksInstancePoolPoolInfoAzureAttributes</a>

---

##### `CustomTagsInput`<sup>Optional</sup> <a name="CustomTagsInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.customTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultTagsInput`<sup>Optional</sup> <a name="DefaultTagsInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.defaultTagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultTagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DiskSpecInput`<sup>Optional</sup> <a name="DiskSpecInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.diskSpecInput"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoDiskSpec DiskSpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoDiskSpec">DataDatabricksInstancePoolPoolInfoDiskSpec</a>

---

##### `EnableElasticDiskInput`<sup>Optional</sup> <a name="EnableElasticDiskInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.enableElasticDiskInput"></a>

```csharp
public object EnableElasticDiskInput { get; }
```

- *Type:* object

---

##### `GcpAttributesInput`<sup>Optional</sup> <a name="GcpAttributesInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.gcpAttributesInput"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoGcpAttributes GcpAttributesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoGcpAttributes">DataDatabricksInstancePoolPoolInfoGcpAttributes</a>

---

##### `IdleInstanceAutoterminationMinutesInput`<sup>Optional</sup> <a name="IdleInstanceAutoterminationMinutesInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.idleInstanceAutoterminationMinutesInput"></a>

```csharp
public double IdleInstanceAutoterminationMinutesInput { get; }
```

- *Type:* double

---

##### `InstancePoolFleetAttributesInput`<sup>Optional</sup> <a name="InstancePoolFleetAttributesInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolFleetAttributesInput"></a>

```csharp
public object InstancePoolFleetAttributesInput { get; }
```

- *Type:* object

---

##### `InstancePoolIdInput`<sup>Optional</sup> <a name="InstancePoolIdInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolIdInput"></a>

```csharp
public string InstancePoolIdInput { get; }
```

- *Type:* string

---

##### `InstancePoolNameInput`<sup>Optional</sup> <a name="InstancePoolNameInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolNameInput"></a>

```csharp
public string InstancePoolNameInput { get; }
```

- *Type:* string

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.maxCapacityInput"></a>

```csharp
public double MaxCapacityInput { get; }
```

- *Type:* double

---

##### `MinIdleInstancesInput`<sup>Optional</sup> <a name="MinIdleInstancesInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.minIdleInstancesInput"></a>

```csharp
public double MinIdleInstancesInput { get; }
```

- *Type:* double

---

##### `NodeTypeIdInput`<sup>Optional</sup> <a name="NodeTypeIdInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.nodeTypeIdInput"></a>

```csharp
public string NodeTypeIdInput { get; }
```

- *Type:* string

---

##### `PreloadedDockerImageInput`<sup>Optional</sup> <a name="PreloadedDockerImageInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedDockerImageInput"></a>

```csharp
public object PreloadedDockerImageInput { get; }
```

- *Type:* object

---

##### `PreloadedSparkVersionsInput`<sup>Optional</sup> <a name="PreloadedSparkVersionsInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedSparkVersionsInput"></a>

```csharp
public string[] PreloadedSparkVersionsInput { get; }
```

- *Type:* string[]

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `StatsInput`<sup>Optional</sup> <a name="StatsInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.statsInput"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoStats StatsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a>

---

##### `CustomTags`<sup>Required</sup> <a name="CustomTags" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.customTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> CustomTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DefaultTags`<sup>Required</sup> <a name="DefaultTags" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.defaultTags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> DefaultTags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `EnableElasticDisk`<sup>Required</sup> <a name="EnableElasticDisk" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.enableElasticDisk"></a>

```csharp
public object EnableElasticDisk { get; }
```

- *Type:* object

---

##### `IdleInstanceAutoterminationMinutes`<sup>Required</sup> <a name="IdleInstanceAutoterminationMinutes" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.idleInstanceAutoterminationMinutes"></a>

```csharp
public double IdleInstanceAutoterminationMinutes { get; }
```

- *Type:* double

---

##### `InstancePoolId`<sup>Required</sup> <a name="InstancePoolId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolId"></a>

```csharp
public string InstancePoolId { get; }
```

- *Type:* string

---

##### `InstancePoolName`<sup>Required</sup> <a name="InstancePoolName" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.instancePoolName"></a>

```csharp
public string InstancePoolName { get; }
```

- *Type:* string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.maxCapacity"></a>

```csharp
public double MaxCapacity { get; }
```

- *Type:* double

---

##### `MinIdleInstances`<sup>Required</sup> <a name="MinIdleInstances" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.minIdleInstances"></a>

```csharp
public double MinIdleInstances { get; }
```

- *Type:* double

---

##### `NodeTypeId`<sup>Required</sup> <a name="NodeTypeId" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.nodeTypeId"></a>

```csharp
public string NodeTypeId { get; }
```

- *Type:* string

---

##### `PreloadedSparkVersions`<sup>Required</sup> <a name="PreloadedSparkVersions" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.preloadedSparkVersions"></a>

```csharp
public string[] PreloadedSparkVersions { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksInstancePoolPoolInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfo">DataDatabricksInstancePoolPoolInfo</a>

---


### DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference <a name="DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a>

---


### DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList <a name="DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.get"></a>

```csharp
private DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference <a name="DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.putBasicAuth">PutBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.resetBasicAuth">ResetBasicAuth</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBasicAuth` <a name="PutBasicAuth" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.putBasicAuth"></a>

```csharp
private void PutBasicAuth(DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.putBasicAuth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a>

---

##### `ResetBasicAuth` <a name="ResetBasicAuth" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.resetBasicAuth"></a>

```csharp
private void ResetBasicAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.basicAuth">BasicAuth</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.basicAuthInput">BasicAuthInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BasicAuth`<sup>Required</sup> <a name="BasicAuth" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.basicAuth"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference BasicAuth { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuthOutputReference</a>

---

##### `BasicAuthInput`<sup>Optional</sup> <a name="BasicAuthInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.basicAuthInput"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth BasicAuthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth">DataDatabricksInstancePoolPoolInfoPreloadedDockerImageBasicAuth</a>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoPreloadedDockerImageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksInstancePoolPoolInfoStatsOutputReference <a name="DataDatabricksInstancePoolPoolInfoStatsOutputReference" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksInstancePoolPoolInfoStatsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetIdleCount">ResetIdleCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetPendingIdleCount">ResetPendingIdleCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetPendingUsedCount">ResetPendingUsedCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetUsedCount">ResetUsedCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleCount` <a name="ResetIdleCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetIdleCount"></a>

```csharp
private void ResetIdleCount()
```

##### `ResetPendingIdleCount` <a name="ResetPendingIdleCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetPendingIdleCount"></a>

```csharp
private void ResetPendingIdleCount()
```

##### `ResetPendingUsedCount` <a name="ResetPendingUsedCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetPendingUsedCount"></a>

```csharp
private void ResetPendingUsedCount()
```

##### `ResetUsedCount` <a name="ResetUsedCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.resetUsedCount"></a>

```csharp
private void ResetUsedCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.idleCountInput">IdleCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingIdleCountInput">PendingIdleCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingUsedCountInput">PendingUsedCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.usedCountInput">UsedCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.idleCount">IdleCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingIdleCount">PendingIdleCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingUsedCount">PendingUsedCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.usedCount">UsedCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdleCountInput`<sup>Optional</sup> <a name="IdleCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.idleCountInput"></a>

```csharp
public double IdleCountInput { get; }
```

- *Type:* double

---

##### `PendingIdleCountInput`<sup>Optional</sup> <a name="PendingIdleCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingIdleCountInput"></a>

```csharp
public double PendingIdleCountInput { get; }
```

- *Type:* double

---

##### `PendingUsedCountInput`<sup>Optional</sup> <a name="PendingUsedCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingUsedCountInput"></a>

```csharp
public double PendingUsedCountInput { get; }
```

- *Type:* double

---

##### `UsedCountInput`<sup>Optional</sup> <a name="UsedCountInput" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.usedCountInput"></a>

```csharp
public double UsedCountInput { get; }
```

- *Type:* double

---

##### `IdleCount`<sup>Required</sup> <a name="IdleCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.idleCount"></a>

```csharp
public double IdleCount { get; }
```

- *Type:* double

---

##### `PendingIdleCount`<sup>Required</sup> <a name="PendingIdleCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingIdleCount"></a>

```csharp
public double PendingIdleCount { get; }
```

- *Type:* double

---

##### `PendingUsedCount`<sup>Required</sup> <a name="PendingUsedCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.pendingUsedCount"></a>

```csharp
public double PendingUsedCount { get; }
```

- *Type:* double

---

##### `UsedCount`<sup>Required</sup> <a name="UsedCount" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.usedCount"></a>

```csharp
public double UsedCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStatsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksInstancePoolPoolInfoStats InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksInstancePool.DataDatabricksInstancePoolPoolInfoStats">DataDatabricksInstancePoolPoolInfoStats</a>

---



