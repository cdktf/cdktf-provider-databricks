# `dataDatabricksMwsWorkspaces` Submodule <a name="`dataDatabricksMwsWorkspaces` Submodule" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksMwsWorkspaces <a name="DataDatabricksMwsWorkspaces" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces"></a>

Represents a {@link https://www.terraform.io/docs/providers/databricks/d/mws_workspaces databricks_mws_workspaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMwsWorkspaces(Construct Scope, string Id, DataDatabricksMwsWorkspacesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig">DataDatabricksMwsWorkspacesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig">DataDatabricksMwsWorkspacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.resetIds">ResetIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIds` <a name="ResetIds" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.resetIds"></a>

```csharp
private void ResetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMwsWorkspaces.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMwsWorkspaces.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksMwsWorkspaces.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.idsInput">IdsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.ids">Ids</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.idsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> IdsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.ids"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> Ids { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspaces.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksMwsWorkspacesConfig <a name="DataDatabricksMwsWorkspacesConfig" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksMwsWorkspacesConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, double> Ids = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/mws_workspaces#id DataDatabricksMwsWorkspaces#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.ids">Ids</a></code> | <code>System.Collections.Generic.IDictionary<string, double></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/mws_workspaces#ids DataDatabricksMwsWorkspaces#ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/mws_workspaces#id DataDatabricksMwsWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="@cdktf/provider-databricks.dataDatabricksMwsWorkspaces.DataDatabricksMwsWorkspacesConfig.property.ids"></a>

```csharp
public System.Collections.Generic.IDictionary<string, double> Ids { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, double>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/databricks/d/mws_workspaces#ids DataDatabricksMwsWorkspaces#ids}.

---


