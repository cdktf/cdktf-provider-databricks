# `dataDatabricksServingEndpoints` Submodule <a name="`dataDatabricksServingEndpoints` Submodule" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksServingEndpoints <a name="DataDatabricksServingEndpoints" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints databricks_serving_endpoints}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpoints(Construct Scope, string Id, DataDatabricksServingEndpointsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig">DataDatabricksServingEndpointsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig">DataDatabricksServingEndpointsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.putEndpoints">PutEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.resetEndpoints">ResetEndpoints</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutEndpoints` <a name="PutEndpoints" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.putEndpoints"></a>

```csharp
private void PutEndpoints(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.putEndpoints.parameter.value"></a>

- *Type:* object

---

##### `ResetEndpoints` <a name="ResetEndpoints" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.resetEndpoints"></a>

```csharp
private void ResetEndpoints()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksServingEndpoints resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServingEndpoints.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServingEndpoints.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServingEndpoints.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksServingEndpoints.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksServingEndpoints resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksServingEndpoints to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksServingEndpoints that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksServingEndpoints to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList">DataDatabricksServingEndpointsEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.endpointsInput">EndpointsInput</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.endpoints"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList">DataDatabricksServingEndpointsEndpointsList</a>

---

##### `EndpointsInput`<sup>Optional</sup> <a name="EndpointsInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.endpointsInput"></a>

```csharp
public object EndpointsInput { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpoints.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksServingEndpointsConfig <a name="DataDatabricksServingEndpointsConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object Endpoints = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.endpoints">Endpoints</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#endpoints DataDatabricksServingEndpoints#endpoints}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Endpoints`<sup>Optional</sup> <a name="Endpoints" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsConfig.property.endpoints"></a>

```csharp
public object Endpoints { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#endpoints DataDatabricksServingEndpoints#endpoints}.

---

### DataDatabricksServingEndpointsEndpoints <a name="DataDatabricksServingEndpointsEndpoints" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpoints {
    object AiGateway = null,
    object Config = null,
    double CreationTimestamp = null,
    string Creator = null,
    string Id = null,
    double LastUpdatedTimestamp = null,
    string Name = null,
    object State = null,
    object Tags = null,
    string Task = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.aiGateway">AiGateway</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#ai_gateway DataDatabricksServingEndpoints#ai_gateway}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.config">Config</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#config DataDatabricksServingEndpoints#config}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.creationTimestamp">CreationTimestamp</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#creation_timestamp DataDatabricksServingEndpoints#creation_timestamp}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.creator">Creator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#creator DataDatabricksServingEndpoints#creator}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#id DataDatabricksServingEndpoints#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#last_updated_timestamp DataDatabricksServingEndpoints#last_updated_timestamp}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.state">State</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#state DataDatabricksServingEndpoints#state}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.tags">Tags</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#tags DataDatabricksServingEndpoints#tags}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.task">Task</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#task DataDatabricksServingEndpoints#task}. |

---

##### `AiGateway`<sup>Optional</sup> <a name="AiGateway" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.aiGateway"></a>

```csharp
public object AiGateway { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#ai_gateway DataDatabricksServingEndpoints#ai_gateway}.

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.config"></a>

```csharp
public object Config { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#config DataDatabricksServingEndpoints#config}.

---

##### `CreationTimestamp`<sup>Optional</sup> <a name="CreationTimestamp" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.creationTimestamp"></a>

```csharp
public double CreationTimestamp { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#creation_timestamp DataDatabricksServingEndpoints#creation_timestamp}.

---

##### `Creator`<sup>Optional</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.creator"></a>

```csharp
public string Creator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#creator DataDatabricksServingEndpoints#creator}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#id DataDatabricksServingEndpoints#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LastUpdatedTimestamp`<sup>Optional</sup> <a name="LastUpdatedTimestamp" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.lastUpdatedTimestamp"></a>

```csharp
public double LastUpdatedTimestamp { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#last_updated_timestamp DataDatabricksServingEndpoints#last_updated_timestamp}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}.

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.state"></a>

```csharp
public object State { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#state DataDatabricksServingEndpoints#state}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.tags"></a>

```csharp
public object Tags { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#tags DataDatabricksServingEndpoints#tags}.

---

##### `Task`<sup>Optional</sup> <a name="Task" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpoints.property.task"></a>

```csharp
public string Task { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#task DataDatabricksServingEndpoints#task}.

---

### DataDatabricksServingEndpointsEndpointsAiGateway <a name="DataDatabricksServingEndpointsEndpointsAiGateway" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGateway"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGateway.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGateway {
    object Guardrails = null,
    object InferenceTableConfig = null,
    object RateLimits = null,
    object UsageTrackingConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGateway.property.guardrails">Guardrails</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#guardrails DataDatabricksServingEndpoints#guardrails}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGateway.property.inferenceTableConfig">InferenceTableConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#inference_table_config DataDatabricksServingEndpoints#inference_table_config}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGateway.property.rateLimits">RateLimits</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#rate_limits DataDatabricksServingEndpoints#rate_limits}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGateway.property.usageTrackingConfig">UsageTrackingConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#usage_tracking_config DataDatabricksServingEndpoints#usage_tracking_config}. |

---

##### `Guardrails`<sup>Optional</sup> <a name="Guardrails" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGateway.property.guardrails"></a>

```csharp
public object Guardrails { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#guardrails DataDatabricksServingEndpoints#guardrails}.

---

##### `InferenceTableConfig`<sup>Optional</sup> <a name="InferenceTableConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGateway.property.inferenceTableConfig"></a>

```csharp
public object InferenceTableConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#inference_table_config DataDatabricksServingEndpoints#inference_table_config}.

---

##### `RateLimits`<sup>Optional</sup> <a name="RateLimits" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGateway.property.rateLimits"></a>

```csharp
public object RateLimits { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#rate_limits DataDatabricksServingEndpoints#rate_limits}.

---

##### `UsageTrackingConfig`<sup>Optional</sup> <a name="UsageTrackingConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGateway.property.usageTrackingConfig"></a>

```csharp
public object UsageTrackingConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#usage_tracking_config DataDatabricksServingEndpoints#usage_tracking_config}.

---

### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails {
    object Input = null,
    object Output = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails.property.input">Input</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#input DataDatabricksServingEndpoints#input}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails.property.output">Output</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#output DataDatabricksServingEndpoints#output}. |

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails.property.input"></a>

```csharp
public object Input { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#input DataDatabricksServingEndpoints#input}.

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrails.property.output"></a>

```csharp
public object Output { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#output DataDatabricksServingEndpoints#output}.

---

### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput {
    string[] InvalidKeywords = null,
    object Pii = null,
    object Safety = null,
    string[] ValidTopics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput.property.invalidKeywords">InvalidKeywords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#invalid_keywords DataDatabricksServingEndpoints#invalid_keywords}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput.property.pii">Pii</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#pii DataDatabricksServingEndpoints#pii}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput.property.safety">Safety</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#safety DataDatabricksServingEndpoints#safety}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput.property.validTopics">ValidTopics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#valid_topics DataDatabricksServingEndpoints#valid_topics}. |

---

##### `InvalidKeywords`<sup>Optional</sup> <a name="InvalidKeywords" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput.property.invalidKeywords"></a>

```csharp
public string[] InvalidKeywords { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#invalid_keywords DataDatabricksServingEndpoints#invalid_keywords}.

---

##### `Pii`<sup>Optional</sup> <a name="Pii" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput.property.pii"></a>

```csharp
public object Pii { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#pii DataDatabricksServingEndpoints#pii}.

---

##### `Safety`<sup>Optional</sup> <a name="Safety" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput.property.safety"></a>

```csharp
public object Safety { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#safety DataDatabricksServingEndpoints#safety}.

---

##### `ValidTopics`<sup>Optional</sup> <a name="ValidTopics" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInput.property.validTopics"></a>

```csharp
public string[] ValidTopics { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#valid_topics DataDatabricksServingEndpoints#valid_topics}.

---

### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii {
    string Behavior = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii.property.behavior">Behavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#behavior DataDatabricksServingEndpoints#behavior}. |

---

##### `Behavior`<sup>Optional</sup> <a name="Behavior" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPii.property.behavior"></a>

```csharp
public string Behavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#behavior DataDatabricksServingEndpoints#behavior}.

---

### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput {
    string[] InvalidKeywords = null,
    object Pii = null,
    object Safety = null,
    string[] ValidTopics = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput.property.invalidKeywords">InvalidKeywords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#invalid_keywords DataDatabricksServingEndpoints#invalid_keywords}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput.property.pii">Pii</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#pii DataDatabricksServingEndpoints#pii}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput.property.safety">Safety</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#safety DataDatabricksServingEndpoints#safety}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput.property.validTopics">ValidTopics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#valid_topics DataDatabricksServingEndpoints#valid_topics}. |

---

##### `InvalidKeywords`<sup>Optional</sup> <a name="InvalidKeywords" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput.property.invalidKeywords"></a>

```csharp
public string[] InvalidKeywords { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#invalid_keywords DataDatabricksServingEndpoints#invalid_keywords}.

---

##### `Pii`<sup>Optional</sup> <a name="Pii" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput.property.pii"></a>

```csharp
public object Pii { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#pii DataDatabricksServingEndpoints#pii}.

---

##### `Safety`<sup>Optional</sup> <a name="Safety" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput.property.safety"></a>

```csharp
public object Safety { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#safety DataDatabricksServingEndpoints#safety}.

---

##### `ValidTopics`<sup>Optional</sup> <a name="ValidTopics" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutput.property.validTopics"></a>

```csharp
public string[] ValidTopics { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#valid_topics DataDatabricksServingEndpoints#valid_topics}.

---

### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii {
    string Behavior = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii.property.behavior">Behavior</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#behavior DataDatabricksServingEndpoints#behavior}. |

---

##### `Behavior`<sup>Optional</sup> <a name="Behavior" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPii.property.behavior"></a>

```csharp
public string Behavior { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#behavior DataDatabricksServingEndpoints#behavior}.

---

### DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig <a name="DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig {
    string CatalogName = null,
    object Enabled = null,
    string SchemaName = null,
    string TableNamePrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#catalog_name DataDatabricksServingEndpoints#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#enabled DataDatabricksServingEndpoints#enabled}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#schema_name DataDatabricksServingEndpoints#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig.property.tableNamePrefix">TableNamePrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#table_name_prefix DataDatabricksServingEndpoints#table_name_prefix}. |

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#catalog_name DataDatabricksServingEndpoints#catalog_name}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#enabled DataDatabricksServingEndpoints#enabled}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#schema_name DataDatabricksServingEndpoints#schema_name}.

---

##### `TableNamePrefix`<sup>Optional</sup> <a name="TableNamePrefix" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfig.property.tableNamePrefix"></a>

```csharp
public string TableNamePrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#table_name_prefix DataDatabricksServingEndpoints#table_name_prefix}.

---

### DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits <a name="DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits {
    double Calls,
    string RenewalPeriod,
    string Key = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits.property.calls">Calls</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#calls DataDatabricksServingEndpoints#calls}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits.property.renewalPeriod">RenewalPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#renewal_period DataDatabricksServingEndpoints#renewal_period}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#key DataDatabricksServingEndpoints#key}. |

---

##### `Calls`<sup>Required</sup> <a name="Calls" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits.property.calls"></a>

```csharp
public double Calls { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#calls DataDatabricksServingEndpoints#calls}.

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits.property.renewalPeriod"></a>

```csharp
public string RenewalPeriod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#renewal_period DataDatabricksServingEndpoints#renewal_period}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimits.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#key DataDatabricksServingEndpoints#key}.

---

### DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig <a name="DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig {
    object Enabled = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#enabled DataDatabricksServingEndpoints#enabled}. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#enabled DataDatabricksServingEndpoints#enabled}.

---

### DataDatabricksServingEndpointsEndpointsConfig <a name="DataDatabricksServingEndpointsEndpointsConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfig {
    object ServedEntities = null,
    object ServedModels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfig.property.servedEntities">ServedEntities</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#served_entities DataDatabricksServingEndpoints#served_entities}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfig.property.servedModels">ServedModels</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#served_models DataDatabricksServingEndpoints#served_models}. |

---

##### `ServedEntities`<sup>Optional</sup> <a name="ServedEntities" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfig.property.servedEntities"></a>

```csharp
public object ServedEntities { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#served_entities DataDatabricksServingEndpoints#served_entities}.

---

##### `ServedModels`<sup>Optional</sup> <a name="ServedModels" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfig.property.servedModels"></a>

```csharp
public object ServedModels { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#served_models DataDatabricksServingEndpoints#served_models}.

---

### DataDatabricksServingEndpointsEndpointsConfigServedEntities <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntities" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntities.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntities {
    string EntityName = null,
    string EntityVersion = null,
    object ExternalModel = null,
    object FoundationModel = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntities.property.entityName">EntityName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#entity_name DataDatabricksServingEndpoints#entity_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntities.property.entityVersion">EntityVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#entity_version DataDatabricksServingEndpoints#entity_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntities.property.externalModel">ExternalModel</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#external_model DataDatabricksServingEndpoints#external_model}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntities.property.foundationModel">FoundationModel</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#foundation_model DataDatabricksServingEndpoints#foundation_model}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntities.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}. |

---

##### `EntityName`<sup>Optional</sup> <a name="EntityName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntities.property.entityName"></a>

```csharp
public string EntityName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#entity_name DataDatabricksServingEndpoints#entity_name}.

---

##### `EntityVersion`<sup>Optional</sup> <a name="EntityVersion" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntities.property.entityVersion"></a>

```csharp
public string EntityVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#entity_version DataDatabricksServingEndpoints#entity_version}.

---

##### `ExternalModel`<sup>Optional</sup> <a name="ExternalModel" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntities.property.externalModel"></a>

```csharp
public object ExternalModel { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#external_model DataDatabricksServingEndpoints#external_model}.

---

##### `FoundationModel`<sup>Optional</sup> <a name="FoundationModel" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntities.property.foundationModel"></a>

```csharp
public object FoundationModel { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#foundation_model DataDatabricksServingEndpoints#foundation_model}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntities.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}.

---

### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel {
    string Name,
    string Provider,
    string Task,
    object Ai21LabsConfig = null,
    object AmazonBedrockConfig = null,
    object AnthropicConfig = null,
    object CohereConfig = null,
    object DatabricksModelServingConfig = null,
    object GoogleCloudVertexAiConfig = null,
    object OpenaiConfig = null,
    object PalmConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.provider">Provider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#provider DataDatabricksServingEndpoints#provider}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.task">Task</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#task DataDatabricksServingEndpoints#task}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.ai21LabsConfig">Ai21LabsConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#ai21labs_config DataDatabricksServingEndpoints#ai21labs_config}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.amazonBedrockConfig">AmazonBedrockConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#amazon_bedrock_config DataDatabricksServingEndpoints#amazon_bedrock_config}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.anthropicConfig">AnthropicConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#anthropic_config DataDatabricksServingEndpoints#anthropic_config}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.cohereConfig">CohereConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#cohere_config DataDatabricksServingEndpoints#cohere_config}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.databricksModelServingConfig">DatabricksModelServingConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#databricks_model_serving_config DataDatabricksServingEndpoints#databricks_model_serving_config}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.googleCloudVertexAiConfig">GoogleCloudVertexAiConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#google_cloud_vertex_ai_config DataDatabricksServingEndpoints#google_cloud_vertex_ai_config}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.openaiConfig">OpenaiConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_config DataDatabricksServingEndpoints#openai_config}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.palmConfig">PalmConfig</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#palm_config DataDatabricksServingEndpoints#palm_config}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}.

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.provider"></a>

```csharp
public string Provider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#provider DataDatabricksServingEndpoints#provider}.

---

##### `Task`<sup>Required</sup> <a name="Task" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.task"></a>

```csharp
public string Task { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#task DataDatabricksServingEndpoints#task}.

---

##### `Ai21LabsConfig`<sup>Optional</sup> <a name="Ai21LabsConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.ai21LabsConfig"></a>

```csharp
public object Ai21LabsConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#ai21labs_config DataDatabricksServingEndpoints#ai21labs_config}.

---

##### `AmazonBedrockConfig`<sup>Optional</sup> <a name="AmazonBedrockConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.amazonBedrockConfig"></a>

```csharp
public object AmazonBedrockConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#amazon_bedrock_config DataDatabricksServingEndpoints#amazon_bedrock_config}.

---

##### `AnthropicConfig`<sup>Optional</sup> <a name="AnthropicConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.anthropicConfig"></a>

```csharp
public object AnthropicConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#anthropic_config DataDatabricksServingEndpoints#anthropic_config}.

---

##### `CohereConfig`<sup>Optional</sup> <a name="CohereConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.cohereConfig"></a>

```csharp
public object CohereConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#cohere_config DataDatabricksServingEndpoints#cohere_config}.

---

##### `DatabricksModelServingConfig`<sup>Optional</sup> <a name="DatabricksModelServingConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.databricksModelServingConfig"></a>

```csharp
public object DatabricksModelServingConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#databricks_model_serving_config DataDatabricksServingEndpoints#databricks_model_serving_config}.

---

##### `GoogleCloudVertexAiConfig`<sup>Optional</sup> <a name="GoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.googleCloudVertexAiConfig"></a>

```csharp
public object GoogleCloudVertexAiConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#google_cloud_vertex_ai_config DataDatabricksServingEndpoints#google_cloud_vertex_ai_config}.

---

##### `OpenaiConfig`<sup>Optional</sup> <a name="OpenaiConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.openaiConfig"></a>

```csharp
public object OpenaiConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_config DataDatabricksServingEndpoints#openai_config}.

---

##### `PalmConfig`<sup>Optional</sup> <a name="PalmConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModel.property.palmConfig"></a>

```csharp
public object PalmConfig { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#palm_config DataDatabricksServingEndpoints#palm_config}.

---

### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig {
    string Ai21LabsApiKey = null,
    string Ai21LabsApiKeyPlaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKey">Ai21LabsApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#ai21labs_api_key DataDatabricksServingEndpoints#ai21labs_api_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKeyPlaintext">Ai21LabsApiKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#ai21labs_api_key_plaintext DataDatabricksServingEndpoints#ai21labs_api_key_plaintext}. |

---

##### `Ai21LabsApiKey`<sup>Optional</sup> <a name="Ai21LabsApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKey"></a>

```csharp
public string Ai21LabsApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#ai21labs_api_key DataDatabricksServingEndpoints#ai21labs_api_key}.

---

##### `Ai21LabsApiKeyPlaintext`<sup>Optional</sup> <a name="Ai21LabsApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfig.property.ai21LabsApiKeyPlaintext"></a>

```csharp
public string Ai21LabsApiKeyPlaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#ai21labs_api_key_plaintext DataDatabricksServingEndpoints#ai21labs_api_key_plaintext}.

---

### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig {
    string AwsRegion,
    string BedrockProvider,
    string AwsAccessKeyId = null,
    string AwsAccessKeyIdPlaintext = null,
    string AwsSecretAccessKey = null,
    string AwsSecretAccessKeyPlaintext = null,
    string InstanceProfileArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsRegion">AwsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#aws_region DataDatabricksServingEndpoints#aws_region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.bedrockProvider">BedrockProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#bedrock_provider DataDatabricksServingEndpoints#bedrock_provider}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#aws_access_key_id DataDatabricksServingEndpoints#aws_access_key_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyIdPlaintext">AwsAccessKeyIdPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#aws_access_key_id_plaintext DataDatabricksServingEndpoints#aws_access_key_id_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#aws_secret_access_key DataDatabricksServingEndpoints#aws_secret_access_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKeyPlaintext">AwsSecretAccessKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#aws_secret_access_key_plaintext DataDatabricksServingEndpoints#aws_secret_access_key_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#instance_profile_arn DataDatabricksServingEndpoints#instance_profile_arn}. |

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsRegion"></a>

```csharp
public string AwsRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#aws_region DataDatabricksServingEndpoints#aws_region}.

---

##### `BedrockProvider`<sup>Required</sup> <a name="BedrockProvider" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.bedrockProvider"></a>

```csharp
public string BedrockProvider { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#bedrock_provider DataDatabricksServingEndpoints#bedrock_provider}.

---

##### `AwsAccessKeyId`<sup>Optional</sup> <a name="AwsAccessKeyId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyId"></a>

```csharp
public string AwsAccessKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#aws_access_key_id DataDatabricksServingEndpoints#aws_access_key_id}.

---

##### `AwsAccessKeyIdPlaintext`<sup>Optional</sup> <a name="AwsAccessKeyIdPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsAccessKeyIdPlaintext"></a>

```csharp
public string AwsAccessKeyIdPlaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#aws_access_key_id_plaintext DataDatabricksServingEndpoints#aws_access_key_id_plaintext}.

---

##### `AwsSecretAccessKey`<sup>Optional</sup> <a name="AwsSecretAccessKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKey"></a>

```csharp
public string AwsSecretAccessKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#aws_secret_access_key DataDatabricksServingEndpoints#aws_secret_access_key}.

---

##### `AwsSecretAccessKeyPlaintext`<sup>Optional</sup> <a name="AwsSecretAccessKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.awsSecretAccessKeyPlaintext"></a>

```csharp
public string AwsSecretAccessKeyPlaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#aws_secret_access_key_plaintext DataDatabricksServingEndpoints#aws_secret_access_key_plaintext}.

---

##### `InstanceProfileArn`<sup>Optional</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfig.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#instance_profile_arn DataDatabricksServingEndpoints#instance_profile_arn}.

---

### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig {
    string AnthropicApiKey = null,
    string AnthropicApiKeyPlaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKey">AnthropicApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#anthropic_api_key DataDatabricksServingEndpoints#anthropic_api_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKeyPlaintext">AnthropicApiKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#anthropic_api_key_plaintext DataDatabricksServingEndpoints#anthropic_api_key_plaintext}. |

---

##### `AnthropicApiKey`<sup>Optional</sup> <a name="AnthropicApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKey"></a>

```csharp
public string AnthropicApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#anthropic_api_key DataDatabricksServingEndpoints#anthropic_api_key}.

---

##### `AnthropicApiKeyPlaintext`<sup>Optional</sup> <a name="AnthropicApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfig.property.anthropicApiKeyPlaintext"></a>

```csharp
public string AnthropicApiKeyPlaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#anthropic_api_key_plaintext DataDatabricksServingEndpoints#anthropic_api_key_plaintext}.

---

### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig {
    string CohereApiBase = null,
    string CohereApiKey = null,
    string CohereApiKeyPlaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig.property.cohereApiBase">CohereApiBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#cohere_api_base DataDatabricksServingEndpoints#cohere_api_base}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKey">CohereApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#cohere_api_key DataDatabricksServingEndpoints#cohere_api_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKeyPlaintext">CohereApiKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#cohere_api_key_plaintext DataDatabricksServingEndpoints#cohere_api_key_plaintext}. |

---

##### `CohereApiBase`<sup>Optional</sup> <a name="CohereApiBase" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig.property.cohereApiBase"></a>

```csharp
public string CohereApiBase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#cohere_api_base DataDatabricksServingEndpoints#cohere_api_base}.

---

##### `CohereApiKey`<sup>Optional</sup> <a name="CohereApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKey"></a>

```csharp
public string CohereApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#cohere_api_key DataDatabricksServingEndpoints#cohere_api_key}.

---

##### `CohereApiKeyPlaintext`<sup>Optional</sup> <a name="CohereApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfig.property.cohereApiKeyPlaintext"></a>

```csharp
public string CohereApiKeyPlaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#cohere_api_key_plaintext DataDatabricksServingEndpoints#cohere_api_key_plaintext}.

---

### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig {
    string DatabricksWorkspaceUrl,
    string DatabricksApiToken = null,
    string DatabricksApiTokenPlaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksWorkspaceUrl">DatabricksWorkspaceUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#databricks_workspace_url DataDatabricksServingEndpoints#databricks_workspace_url}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiToken">DatabricksApiToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#databricks_api_token DataDatabricksServingEndpoints#databricks_api_token}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiTokenPlaintext">DatabricksApiTokenPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#databricks_api_token_plaintext DataDatabricksServingEndpoints#databricks_api_token_plaintext}. |

---

##### `DatabricksWorkspaceUrl`<sup>Required</sup> <a name="DatabricksWorkspaceUrl" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksWorkspaceUrl"></a>

```csharp
public string DatabricksWorkspaceUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#databricks_workspace_url DataDatabricksServingEndpoints#databricks_workspace_url}.

---

##### `DatabricksApiToken`<sup>Optional</sup> <a name="DatabricksApiToken" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiToken"></a>

```csharp
public string DatabricksApiToken { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#databricks_api_token DataDatabricksServingEndpoints#databricks_api_token}.

---

##### `DatabricksApiTokenPlaintext`<sup>Optional</sup> <a name="DatabricksApiTokenPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfig.property.databricksApiTokenPlaintext"></a>

```csharp
public string DatabricksApiTokenPlaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#databricks_api_token_plaintext DataDatabricksServingEndpoints#databricks_api_token_plaintext}.

---

### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig {
    string ProjectId,
    string Region,
    string PrivateKey = null,
    string PrivateKeyPlaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#project_id DataDatabricksServingEndpoints#project_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#region DataDatabricksServingEndpoints#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#private_key DataDatabricksServingEndpoints#private_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKeyPlaintext">PrivateKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#private_key_plaintext DataDatabricksServingEndpoints#private_key_plaintext}. |

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#project_id DataDatabricksServingEndpoints#project_id}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#region DataDatabricksServingEndpoints#region}.

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#private_key DataDatabricksServingEndpoints#private_key}.

---

##### `PrivateKeyPlaintext`<sup>Optional</sup> <a name="PrivateKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfig.property.privateKeyPlaintext"></a>

```csharp
public string PrivateKeyPlaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#private_key_plaintext DataDatabricksServingEndpoints#private_key_plaintext}.

---

### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig {
    string MicrosoftEntraClientId = null,
    string MicrosoftEntraClientSecret = null,
    string MicrosoftEntraClientSecretPlaintext = null,
    string MicrosoftEntraTenantId = null,
    string OpenaiApiBase = null,
    string OpenaiApiKey = null,
    string OpenaiApiKeyPlaintext = null,
    string OpenaiApiType = null,
    string OpenaiApiVersion = null,
    string OpenaiDeploymentName = null,
    string OpenaiOrganization = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientId">MicrosoftEntraClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#microsoft_entra_client_id DataDatabricksServingEndpoints#microsoft_entra_client_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecret">MicrosoftEntraClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#microsoft_entra_client_secret DataDatabricksServingEndpoints#microsoft_entra_client_secret}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecretPlaintext">MicrosoftEntraClientSecretPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#microsoft_entra_client_secret_plaintext DataDatabricksServingEndpoints#microsoft_entra_client_secret_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraTenantId">MicrosoftEntraTenantId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#microsoft_entra_tenant_id DataDatabricksServingEndpoints#microsoft_entra_tenant_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiBase">OpenaiApiBase</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_api_base DataDatabricksServingEndpoints#openai_api_base}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKey">OpenaiApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_api_key DataDatabricksServingEndpoints#openai_api_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKeyPlaintext">OpenaiApiKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_api_key_plaintext DataDatabricksServingEndpoints#openai_api_key_plaintext}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiType">OpenaiApiType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_api_type DataDatabricksServingEndpoints#openai_api_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiVersion">OpenaiApiVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_api_version DataDatabricksServingEndpoints#openai_api_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiDeploymentName">OpenaiDeploymentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_deployment_name DataDatabricksServingEndpoints#openai_deployment_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiOrganization">OpenaiOrganization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_organization DataDatabricksServingEndpoints#openai_organization}. |

---

##### `MicrosoftEntraClientId`<sup>Optional</sup> <a name="MicrosoftEntraClientId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientId"></a>

```csharp
public string MicrosoftEntraClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#microsoft_entra_client_id DataDatabricksServingEndpoints#microsoft_entra_client_id}.

---

##### `MicrosoftEntraClientSecret`<sup>Optional</sup> <a name="MicrosoftEntraClientSecret" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecret"></a>

```csharp
public string MicrosoftEntraClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#microsoft_entra_client_secret DataDatabricksServingEndpoints#microsoft_entra_client_secret}.

---

##### `MicrosoftEntraClientSecretPlaintext`<sup>Optional</sup> <a name="MicrosoftEntraClientSecretPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraClientSecretPlaintext"></a>

```csharp
public string MicrosoftEntraClientSecretPlaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#microsoft_entra_client_secret_plaintext DataDatabricksServingEndpoints#microsoft_entra_client_secret_plaintext}.

---

##### `MicrosoftEntraTenantId`<sup>Optional</sup> <a name="MicrosoftEntraTenantId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.microsoftEntraTenantId"></a>

```csharp
public string MicrosoftEntraTenantId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#microsoft_entra_tenant_id DataDatabricksServingEndpoints#microsoft_entra_tenant_id}.

---

##### `OpenaiApiBase`<sup>Optional</sup> <a name="OpenaiApiBase" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiBase"></a>

```csharp
public string OpenaiApiBase { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_api_base DataDatabricksServingEndpoints#openai_api_base}.

---

##### `OpenaiApiKey`<sup>Optional</sup> <a name="OpenaiApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKey"></a>

```csharp
public string OpenaiApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_api_key DataDatabricksServingEndpoints#openai_api_key}.

---

##### `OpenaiApiKeyPlaintext`<sup>Optional</sup> <a name="OpenaiApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiKeyPlaintext"></a>

```csharp
public string OpenaiApiKeyPlaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_api_key_plaintext DataDatabricksServingEndpoints#openai_api_key_plaintext}.

---

##### `OpenaiApiType`<sup>Optional</sup> <a name="OpenaiApiType" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiType"></a>

```csharp
public string OpenaiApiType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_api_type DataDatabricksServingEndpoints#openai_api_type}.

---

##### `OpenaiApiVersion`<sup>Optional</sup> <a name="OpenaiApiVersion" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiApiVersion"></a>

```csharp
public string OpenaiApiVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_api_version DataDatabricksServingEndpoints#openai_api_version}.

---

##### `OpenaiDeploymentName`<sup>Optional</sup> <a name="OpenaiDeploymentName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiDeploymentName"></a>

```csharp
public string OpenaiDeploymentName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_deployment_name DataDatabricksServingEndpoints#openai_deployment_name}.

---

##### `OpenaiOrganization`<sup>Optional</sup> <a name="OpenaiOrganization" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfig.property.openaiOrganization"></a>

```csharp
public string OpenaiOrganization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#openai_organization DataDatabricksServingEndpoints#openai_organization}.

---

### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig {
    string PalmApiKey = null,
    string PalmApiKeyPlaintext = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig.property.palmApiKey">PalmApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#palm_api_key DataDatabricksServingEndpoints#palm_api_key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig.property.palmApiKeyPlaintext">PalmApiKeyPlaintext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#palm_api_key_plaintext DataDatabricksServingEndpoints#palm_api_key_plaintext}. |

---

##### `PalmApiKey`<sup>Optional</sup> <a name="PalmApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig.property.palmApiKey"></a>

```csharp
public string PalmApiKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#palm_api_key DataDatabricksServingEndpoints#palm_api_key}.

---

##### `PalmApiKeyPlaintext`<sup>Optional</sup> <a name="PalmApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfig.property.palmApiKeyPlaintext"></a>

```csharp
public string PalmApiKeyPlaintext { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#palm_api_key_plaintext DataDatabricksServingEndpoints#palm_api_key_plaintext}.

---

### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel {
    string Description = null,
    string DisplayName = null,
    string Docs = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#description DataDatabricksServingEndpoints#description}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#display_name DataDatabricksServingEndpoints#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel.property.docs">Docs</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#docs DataDatabricksServingEndpoints#docs}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#description DataDatabricksServingEndpoints#description}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#display_name DataDatabricksServingEndpoints#display_name}.

---

##### `Docs`<sup>Optional</sup> <a name="Docs" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel.property.docs"></a>

```csharp
public string Docs { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#docs DataDatabricksServingEndpoints#docs}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModel.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}.

---

### DataDatabricksServingEndpointsEndpointsConfigServedModels <a name="DataDatabricksServingEndpointsEndpointsConfigServedModels" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedModels {
    string ModelName = null,
    string ModelVersion = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModels.property.modelName">ModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#model_name DataDatabricksServingEndpoints#model_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModels.property.modelVersion">ModelVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#model_version DataDatabricksServingEndpoints#model_version}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModels.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}. |

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModels.property.modelName"></a>

```csharp
public string ModelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#model_name DataDatabricksServingEndpoints#model_name}.

---

##### `ModelVersion`<sup>Optional</sup> <a name="ModelVersion" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModels.property.modelVersion"></a>

```csharp
public string ModelVersion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#model_version DataDatabricksServingEndpoints#model_version}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModels.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#name DataDatabricksServingEndpoints#name}.

---

### DataDatabricksServingEndpointsEndpointsState <a name="DataDatabricksServingEndpointsEndpointsState" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsState.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsState {
    string ConfigUpdate = null,
    string Ready = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsState.property.configUpdate">ConfigUpdate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#config_update DataDatabricksServingEndpoints#config_update}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsState.property.ready">Ready</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#ready DataDatabricksServingEndpoints#ready}. |

---

##### `ConfigUpdate`<sup>Optional</sup> <a name="ConfigUpdate" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsState.property.configUpdate"></a>

```csharp
public string ConfigUpdate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#config_update DataDatabricksServingEndpoints#config_update}.

---

##### `Ready`<sup>Optional</sup> <a name="Ready" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsState.property.ready"></a>

```csharp
public string Ready { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#ready DataDatabricksServingEndpoints#ready}.

---

### DataDatabricksServingEndpointsEndpointsTags <a name="DataDatabricksServingEndpointsEndpointsTags" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsTags {
    string Key,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTags.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#key DataDatabricksServingEndpoints#key}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTags.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#value DataDatabricksServingEndpoints#value}. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTags.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#key DataDatabricksServingEndpoints#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTags.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.70.0/docs/data-sources/serving_endpoints#value DataDatabricksServingEndpoints#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.putPii">PutPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.resetInvalidKeywords">ResetInvalidKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.resetPii">ResetPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.resetSafety">ResetSafety</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.resetValidTopics">ResetValidTopics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPii` <a name="PutPii" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.putPii"></a>

```csharp
private void PutPii(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.putPii.parameter.value"></a>

- *Type:* object

---

##### `ResetInvalidKeywords` <a name="ResetInvalidKeywords" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.resetInvalidKeywords"></a>

```csharp
private void ResetInvalidKeywords()
```

##### `ResetPii` <a name="ResetPii" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.resetPii"></a>

```csharp
private void ResetPii()
```

##### `ResetSafety` <a name="ResetSafety" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.resetSafety"></a>

```csharp
private void ResetSafety()
```

##### `ResetValidTopics` <a name="ResetValidTopics" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.resetValidTopics"></a>

```csharp
private void ResetValidTopics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.pii">Pii</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList">DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.invalidKeywordsInput">InvalidKeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.piiInput">PiiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.safetyInput">SafetyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.validTopicsInput">ValidTopicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.invalidKeywords">InvalidKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.safety">Safety</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.validTopics">ValidTopics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Pii`<sup>Required</sup> <a name="Pii" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.pii"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList Pii { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList">DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList</a>

---

##### `InvalidKeywordsInput`<sup>Optional</sup> <a name="InvalidKeywordsInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.invalidKeywordsInput"></a>

```csharp
public string[] InvalidKeywordsInput { get; }
```

- *Type:* string[]

---

##### `PiiInput`<sup>Optional</sup> <a name="PiiInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.piiInput"></a>

```csharp
public object PiiInput { get; }
```

- *Type:* object

---

##### `SafetyInput`<sup>Optional</sup> <a name="SafetyInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.safetyInput"></a>

```csharp
public object SafetyInput { get; }
```

- *Type:* object

---

##### `ValidTopicsInput`<sup>Optional</sup> <a name="ValidTopicsInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.validTopicsInput"></a>

```csharp
public string[] ValidTopicsInput { get; }
```

- *Type:* string[]

---

##### `InvalidKeywords`<sup>Required</sup> <a name="InvalidKeywords" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.invalidKeywords"></a>

```csharp
public string[] InvalidKeywords { get; }
```

- *Type:* string[]

---

##### `Safety`<sup>Required</sup> <a name="Safety" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.safety"></a>

```csharp
public object Safety { get; }
```

- *Type:* object

---

##### `ValidTopics`<sup>Required</sup> <a name="ValidTopics" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.validTopics"></a>

```csharp
public string[] ValidTopics { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.resetBehavior">ResetBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBehavior` <a name="ResetBehavior" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.resetBehavior"></a>

```csharp
private void ResetBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.property.behavior">Behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.property.behaviorInput"></a>

```csharp
public string BehaviorInput { get; }
```

- *Type:* string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.property.behavior"></a>

```csharp
public string Behavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputPiiOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.putPii">PutPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.resetInvalidKeywords">ResetInvalidKeywords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.resetPii">ResetPii</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.resetSafety">ResetSafety</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.resetValidTopics">ResetValidTopics</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPii` <a name="PutPii" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.putPii"></a>

```csharp
private void PutPii(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.putPii.parameter.value"></a>

- *Type:* object

---

##### `ResetInvalidKeywords` <a name="ResetInvalidKeywords" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.resetInvalidKeywords"></a>

```csharp
private void ResetInvalidKeywords()
```

##### `ResetPii` <a name="ResetPii" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.resetPii"></a>

```csharp
private void ResetPii()
```

##### `ResetSafety` <a name="ResetSafety" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.resetSafety"></a>

```csharp
private void ResetSafety()
```

##### `ResetValidTopics` <a name="ResetValidTopics" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.resetValidTopics"></a>

```csharp
private void ResetValidTopics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.pii">Pii</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList">DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.invalidKeywordsInput">InvalidKeywordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.piiInput">PiiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.safetyInput">SafetyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.validTopicsInput">ValidTopicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.invalidKeywords">InvalidKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.safety">Safety</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.validTopics">ValidTopics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Pii`<sup>Required</sup> <a name="Pii" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.pii"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList Pii { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList">DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList</a>

---

##### `InvalidKeywordsInput`<sup>Optional</sup> <a name="InvalidKeywordsInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.invalidKeywordsInput"></a>

```csharp
public string[] InvalidKeywordsInput { get; }
```

- *Type:* string[]

---

##### `PiiInput`<sup>Optional</sup> <a name="PiiInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.piiInput"></a>

```csharp
public object PiiInput { get; }
```

- *Type:* object

---

##### `SafetyInput`<sup>Optional</sup> <a name="SafetyInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.safetyInput"></a>

```csharp
public object SafetyInput { get; }
```

- *Type:* object

---

##### `ValidTopicsInput`<sup>Optional</sup> <a name="ValidTopicsInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.validTopicsInput"></a>

```csharp
public string[] ValidTopicsInput { get; }
```

- *Type:* string[]

---

##### `InvalidKeywords`<sup>Required</sup> <a name="InvalidKeywords" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.invalidKeywords"></a>

```csharp
public string[] InvalidKeywords { get; }
```

- *Type:* string[]

---

##### `Safety`<sup>Required</sup> <a name="Safety" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.safety"></a>

```csharp
public object Safety { get; }
```

- *Type:* object

---

##### `ValidTopics`<sup>Required</sup> <a name="ValidTopics" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.validTopics"></a>

```csharp
public string[] ValidTopics { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.resetBehavior">ResetBehavior</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBehavior` <a name="ResetBehavior" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.resetBehavior"></a>

```csharp
private void ResetBehavior()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.property.behavior">Behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.property.behaviorInput"></a>

```csharp
public string BehaviorInput { get; }
```

- *Type:* string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.property.behavior"></a>

```csharp
public string Behavior { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputPiiOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference <a name="DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.putInput">PutInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.putOutput">PutOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInput` <a name="PutInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.putInput"></a>

```csharp
private void PutInput(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.putInput.parameter.value"></a>

- *Type:* object

---

##### `PutOutput` <a name="PutOutput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.putOutput"></a>

```csharp
private void PutOutput(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.putOutput.parameter.value"></a>

- *Type:* object

---

##### `ResetInput` <a name="ResetInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.resetInput"></a>

```csharp
private void ResetInput()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.resetOutput"></a>

```csharp
private void ResetOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.input">Input</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList">DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.output">Output</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList">DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.inputInput">InputInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.outputInput">OutputInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.input"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList Input { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList">DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsInputList</a>

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.output"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList Output { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList">DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputList</a>

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.inputInput"></a>

```csharp
public object InputInput { get; }
```

- *Type:* object

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.outputInput"></a>

```csharp
public object OutputInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList <a name="DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference <a name="DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.resetTableNamePrefix">ResetTableNamePrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

##### `ResetTableNamePrefix` <a name="ResetTableNamePrefix" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.resetTableNamePrefix"></a>

```csharp
private void ResetTableNamePrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefixInput">TableNamePrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefix">TableNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `TableNamePrefixInput`<sup>Optional</sup> <a name="TableNamePrefixInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefixInput"></a>

```csharp
public string TableNamePrefixInput { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `TableNamePrefix`<sup>Required</sup> <a name="TableNamePrefix" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.tableNamePrefix"></a>

```csharp
public string TableNamePrefix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayList <a name="DataDatabricksServingEndpointsEndpointsAiGatewayList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference <a name="DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.putGuardrails">PutGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.putInferenceTableConfig">PutInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.putRateLimits">PutRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.putUsageTrackingConfig">PutUsageTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.resetGuardrails">ResetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.resetInferenceTableConfig">ResetInferenceTableConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.resetRateLimits">ResetRateLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.resetUsageTrackingConfig">ResetUsageTrackingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGuardrails` <a name="PutGuardrails" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.putGuardrails"></a>

```csharp
private void PutGuardrails(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.putGuardrails.parameter.value"></a>

- *Type:* object

---

##### `PutInferenceTableConfig` <a name="PutInferenceTableConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.putInferenceTableConfig"></a>

```csharp
private void PutInferenceTableConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.putInferenceTableConfig.parameter.value"></a>

- *Type:* object

---

##### `PutRateLimits` <a name="PutRateLimits" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.putRateLimits"></a>

```csharp
private void PutRateLimits(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.putRateLimits.parameter.value"></a>

- *Type:* object

---

##### `PutUsageTrackingConfig` <a name="PutUsageTrackingConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.putUsageTrackingConfig"></a>

```csharp
private void PutUsageTrackingConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.putUsageTrackingConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetGuardrails` <a name="ResetGuardrails" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.resetGuardrails"></a>

```csharp
private void ResetGuardrails()
```

##### `ResetInferenceTableConfig` <a name="ResetInferenceTableConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.resetInferenceTableConfig"></a>

```csharp
private void ResetInferenceTableConfig()
```

##### `ResetRateLimits` <a name="ResetRateLimits" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.resetRateLimits"></a>

```csharp
private void ResetRateLimits()
```

##### `ResetUsageTrackingConfig` <a name="ResetUsageTrackingConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.resetUsageTrackingConfig"></a>

```csharp
private void ResetUsageTrackingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.guardrails">Guardrails</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList">DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.inferenceTableConfig">InferenceTableConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList">DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.rateLimits">RateLimits</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList">DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.usageTrackingConfig">UsageTrackingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList">DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.guardrailsInput">GuardrailsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.inferenceTableConfigInput">InferenceTableConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.rateLimitsInput">RateLimitsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.usageTrackingConfigInput">UsageTrackingConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Guardrails`<sup>Required</sup> <a name="Guardrails" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.guardrails"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList Guardrails { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList">DataDatabricksServingEndpointsEndpointsAiGatewayGuardrailsList</a>

---

##### `InferenceTableConfig`<sup>Required</sup> <a name="InferenceTableConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.inferenceTableConfig"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList InferenceTableConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList">DataDatabricksServingEndpointsEndpointsAiGatewayInferenceTableConfigList</a>

---

##### `RateLimits`<sup>Required</sup> <a name="RateLimits" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.rateLimits"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList RateLimits { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList">DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList</a>

---

##### `UsageTrackingConfig`<sup>Required</sup> <a name="UsageTrackingConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.usageTrackingConfig"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList UsageTrackingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList">DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList</a>

---

##### `GuardrailsInput`<sup>Optional</sup> <a name="GuardrailsInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.guardrailsInput"></a>

```csharp
public object GuardrailsInput { get; }
```

- *Type:* object

---

##### `InferenceTableConfigInput`<sup>Optional</sup> <a name="InferenceTableConfigInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.inferenceTableConfigInput"></a>

```csharp
public object InferenceTableConfigInput { get; }
```

- *Type:* object

---

##### `RateLimitsInput`<sup>Optional</sup> <a name="RateLimitsInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.rateLimitsInput"></a>

```csharp
public object RateLimitsInput { get; }
```

- *Type:* object

---

##### `UsageTrackingConfigInput`<sup>Optional</sup> <a name="UsageTrackingConfigInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.usageTrackingConfigInput"></a>

```csharp
public object UsageTrackingConfigInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList <a name="DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference <a name="DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.resetKey"></a>

```csharp
private void ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.callsInput">CallsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.renewalPeriodInput">RenewalPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.calls">Calls</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.renewalPeriod">RenewalPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CallsInput`<sup>Optional</sup> <a name="CallsInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.callsInput"></a>

```csharp
public double CallsInput { get; }
```

- *Type:* double

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `RenewalPeriodInput`<sup>Optional</sup> <a name="RenewalPeriodInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.renewalPeriodInput"></a>

```csharp
public string RenewalPeriodInput { get; }
```

- *Type:* string

---

##### `Calls`<sup>Required</sup> <a name="Calls" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.calls"></a>

```csharp
public double Calls { get; }
```

- *Type:* double

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `RenewalPeriod`<sup>Required</sup> <a name="RenewalPeriod" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.renewalPeriod"></a>

```csharp
public string RenewalPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayRateLimitsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList <a name="DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference <a name="DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayUsageTrackingConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigList <a name="DataDatabricksServingEndpointsEndpointsConfigList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigOutputReference <a name="DataDatabricksServingEndpointsEndpointsConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.putServedEntities">PutServedEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.putServedModels">PutServedModels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.resetServedEntities">ResetServedEntities</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.resetServedModels">ResetServedModels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServedEntities` <a name="PutServedEntities" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.putServedEntities"></a>

```csharp
private void PutServedEntities(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.putServedEntities.parameter.value"></a>

- *Type:* object

---

##### `PutServedModels` <a name="PutServedModels" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.putServedModels"></a>

```csharp
private void PutServedModels(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.putServedModels.parameter.value"></a>

- *Type:* object

---

##### `ResetServedEntities` <a name="ResetServedEntities" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.resetServedEntities"></a>

```csharp
private void ResetServedEntities()
```

##### `ResetServedModels` <a name="ResetServedModels" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.resetServedModels"></a>

```csharp
private void ResetServedModels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.servedEntities">ServedEntities</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.servedModels">ServedModels</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList">DataDatabricksServingEndpointsEndpointsConfigServedModelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.servedEntitiesInput">ServedEntitiesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.servedModelsInput">ServedModelsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ServedEntities`<sup>Required</sup> <a name="ServedEntities" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.servedEntities"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList ServedEntities { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList</a>

---

##### `ServedModels`<sup>Required</sup> <a name="ServedModels" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.servedModels"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsConfigServedModelsList ServedModels { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList">DataDatabricksServingEndpointsEndpointsConfigServedModelsList</a>

---

##### `ServedEntitiesInput`<sup>Optional</sup> <a name="ServedEntitiesInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.servedEntitiesInput"></a>

```csharp
public object ServedEntitiesInput { get; }
```

- *Type:* object

---

##### `ServedModelsInput`<sup>Optional</sup> <a name="ServedModelsInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.servedModelsInput"></a>

```csharp
public object ServedModelsInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKey">ResetAi21LabsApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKeyPlaintext">ResetAi21LabsApiKeyPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAi21LabsApiKey` <a name="ResetAi21LabsApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKey"></a>

```csharp
private void ResetAi21LabsApiKey()
```

##### `ResetAi21LabsApiKeyPlaintext` <a name="ResetAi21LabsApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.resetAi21LabsApiKeyPlaintext"></a>

```csharp
private void ResetAi21LabsApiKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyInput">Ai21LabsApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintextInput">Ai21LabsApiKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKey">Ai21LabsApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintext">Ai21LabsApiKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ai21LabsApiKeyInput`<sup>Optional</sup> <a name="Ai21LabsApiKeyInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyInput"></a>

```csharp
public string Ai21LabsApiKeyInput { get; }
```

- *Type:* string

---

##### `Ai21LabsApiKeyPlaintextInput`<sup>Optional</sup> <a name="Ai21LabsApiKeyPlaintextInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintextInput"></a>

```csharp
public string Ai21LabsApiKeyPlaintextInput { get; }
```

- *Type:* string

---

##### `Ai21LabsApiKey`<sup>Required</sup> <a name="Ai21LabsApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKey"></a>

```csharp
public string Ai21LabsApiKey { get; }
```

- *Type:* string

---

##### `Ai21LabsApiKeyPlaintext`<sup>Required</sup> <a name="Ai21LabsApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.ai21LabsApiKeyPlaintext"></a>

```csharp
public string Ai21LabsApiKeyPlaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyId">ResetAwsAccessKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyIdPlaintext">ResetAwsAccessKeyIdPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKey">ResetAwsSecretAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKeyPlaintext">ResetAwsSecretAccessKeyPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetInstanceProfileArn">ResetInstanceProfileArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAwsAccessKeyId` <a name="ResetAwsAccessKeyId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyId"></a>

```csharp
private void ResetAwsAccessKeyId()
```

##### `ResetAwsAccessKeyIdPlaintext` <a name="ResetAwsAccessKeyIdPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsAccessKeyIdPlaintext"></a>

```csharp
private void ResetAwsAccessKeyIdPlaintext()
```

##### `ResetAwsSecretAccessKey` <a name="ResetAwsSecretAccessKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKey"></a>

```csharp
private void ResetAwsSecretAccessKey()
```

##### `ResetAwsSecretAccessKeyPlaintext` <a name="ResetAwsSecretAccessKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetAwsSecretAccessKeyPlaintext"></a>

```csharp
private void ResetAwsSecretAccessKeyPlaintext()
```

##### `ResetInstanceProfileArn` <a name="ResetInstanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.resetInstanceProfileArn"></a>

```csharp
private void ResetInstanceProfileArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdInput">AwsAccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintextInput">AwsAccessKeyIdPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyInput">AwsSecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintextInput">AwsSecretAccessKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProviderInput">BedrockProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.instanceProfileArnInput">InstanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyId">AwsAccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintext">AwsAccessKeyIdPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegion">AwsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKey">AwsSecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintext">AwsSecretAccessKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProvider">BedrockProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.instanceProfileArn">InstanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AwsAccessKeyIdInput`<sup>Optional</sup> <a name="AwsAccessKeyIdInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdInput"></a>

```csharp
public string AwsAccessKeyIdInput { get; }
```

- *Type:* string

---

##### `AwsAccessKeyIdPlaintextInput`<sup>Optional</sup> <a name="AwsAccessKeyIdPlaintextInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintextInput"></a>

```csharp
public string AwsAccessKeyIdPlaintextInput { get; }
```

- *Type:* string

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegionInput"></a>

```csharp
public string AwsRegionInput { get; }
```

- *Type:* string

---

##### `AwsSecretAccessKeyInput`<sup>Optional</sup> <a name="AwsSecretAccessKeyInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyInput"></a>

```csharp
public string AwsSecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AwsSecretAccessKeyPlaintextInput`<sup>Optional</sup> <a name="AwsSecretAccessKeyPlaintextInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintextInput"></a>

```csharp
public string AwsSecretAccessKeyPlaintextInput { get; }
```

- *Type:* string

---

##### `BedrockProviderInput`<sup>Optional</sup> <a name="BedrockProviderInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProviderInput"></a>

```csharp
public string BedrockProviderInput { get; }
```

- *Type:* string

---

##### `InstanceProfileArnInput`<sup>Optional</sup> <a name="InstanceProfileArnInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.instanceProfileArnInput"></a>

```csharp
public string InstanceProfileArnInput { get; }
```

- *Type:* string

---

##### `AwsAccessKeyId`<sup>Required</sup> <a name="AwsAccessKeyId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyId"></a>

```csharp
public string AwsAccessKeyId { get; }
```

- *Type:* string

---

##### `AwsAccessKeyIdPlaintext`<sup>Required</sup> <a name="AwsAccessKeyIdPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsAccessKeyIdPlaintext"></a>

```csharp
public string AwsAccessKeyIdPlaintext { get; }
```

- *Type:* string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsRegion"></a>

```csharp
public string AwsRegion { get; }
```

- *Type:* string

---

##### `AwsSecretAccessKey`<sup>Required</sup> <a name="AwsSecretAccessKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKey"></a>

```csharp
public string AwsSecretAccessKey { get; }
```

- *Type:* string

---

##### `AwsSecretAccessKeyPlaintext`<sup>Required</sup> <a name="AwsSecretAccessKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.awsSecretAccessKeyPlaintext"></a>

```csharp
public string AwsSecretAccessKeyPlaintext { get; }
```

- *Type:* string

---

##### `BedrockProvider`<sup>Required</sup> <a name="BedrockProvider" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.bedrockProvider"></a>

```csharp
public string BedrockProvider { get; }
```

- *Type:* string

---

##### `InstanceProfileArn`<sup>Required</sup> <a name="InstanceProfileArn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.instanceProfileArn"></a>

```csharp
public string InstanceProfileArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKey">ResetAnthropicApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKeyPlaintext">ResetAnthropicApiKeyPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnthropicApiKey` <a name="ResetAnthropicApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKey"></a>

```csharp
private void ResetAnthropicApiKey()
```

##### `ResetAnthropicApiKeyPlaintext` <a name="ResetAnthropicApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.resetAnthropicApiKeyPlaintext"></a>

```csharp
private void ResetAnthropicApiKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyInput">AnthropicApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintextInput">AnthropicApiKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKey">AnthropicApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintext">AnthropicApiKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AnthropicApiKeyInput`<sup>Optional</sup> <a name="AnthropicApiKeyInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyInput"></a>

```csharp
public string AnthropicApiKeyInput { get; }
```

- *Type:* string

---

##### `AnthropicApiKeyPlaintextInput`<sup>Optional</sup> <a name="AnthropicApiKeyPlaintextInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintextInput"></a>

```csharp
public string AnthropicApiKeyPlaintextInput { get; }
```

- *Type:* string

---

##### `AnthropicApiKey`<sup>Required</sup> <a name="AnthropicApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKey"></a>

```csharp
public string AnthropicApiKey { get; }
```

- *Type:* string

---

##### `AnthropicApiKeyPlaintext`<sup>Required</sup> <a name="AnthropicApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.anthropicApiKeyPlaintext"></a>

```csharp
public string AnthropicApiKeyPlaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiBase">ResetCohereApiBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKey">ResetCohereApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKeyPlaintext">ResetCohereApiKeyPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCohereApiBase` <a name="ResetCohereApiBase" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiBase"></a>

```csharp
private void ResetCohereApiBase()
```

##### `ResetCohereApiKey` <a name="ResetCohereApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKey"></a>

```csharp
private void ResetCohereApiKey()
```

##### `ResetCohereApiKeyPlaintext` <a name="ResetCohereApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.resetCohereApiKeyPlaintext"></a>

```csharp
private void ResetCohereApiKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBaseInput">CohereApiBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyInput">CohereApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintextInput">CohereApiKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBase">CohereApiBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKey">CohereApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintext">CohereApiKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CohereApiBaseInput`<sup>Optional</sup> <a name="CohereApiBaseInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBaseInput"></a>

```csharp
public string CohereApiBaseInput { get; }
```

- *Type:* string

---

##### `CohereApiKeyInput`<sup>Optional</sup> <a name="CohereApiKeyInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyInput"></a>

```csharp
public string CohereApiKeyInput { get; }
```

- *Type:* string

---

##### `CohereApiKeyPlaintextInput`<sup>Optional</sup> <a name="CohereApiKeyPlaintextInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintextInput"></a>

```csharp
public string CohereApiKeyPlaintextInput { get; }
```

- *Type:* string

---

##### `CohereApiBase`<sup>Required</sup> <a name="CohereApiBase" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiBase"></a>

```csharp
public string CohereApiBase { get; }
```

- *Type:* string

---

##### `CohereApiKey`<sup>Required</sup> <a name="CohereApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKey"></a>

```csharp
public string CohereApiKey { get; }
```

- *Type:* string

---

##### `CohereApiKeyPlaintext`<sup>Required</sup> <a name="CohereApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.cohereApiKeyPlaintext"></a>

```csharp
public string CohereApiKeyPlaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiToken">ResetDatabricksApiToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiTokenPlaintext">ResetDatabricksApiTokenPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDatabricksApiToken` <a name="ResetDatabricksApiToken" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiToken"></a>

```csharp
private void ResetDatabricksApiToken()
```

##### `ResetDatabricksApiTokenPlaintext` <a name="ResetDatabricksApiTokenPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.resetDatabricksApiTokenPlaintext"></a>

```csharp
private void ResetDatabricksApiTokenPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenInput">DatabricksApiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintextInput">DatabricksApiTokenPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrlInput">DatabricksWorkspaceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiToken">DatabricksApiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintext">DatabricksApiTokenPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrl">DatabricksWorkspaceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DatabricksApiTokenInput`<sup>Optional</sup> <a name="DatabricksApiTokenInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenInput"></a>

```csharp
public string DatabricksApiTokenInput { get; }
```

- *Type:* string

---

##### `DatabricksApiTokenPlaintextInput`<sup>Optional</sup> <a name="DatabricksApiTokenPlaintextInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintextInput"></a>

```csharp
public string DatabricksApiTokenPlaintextInput { get; }
```

- *Type:* string

---

##### `DatabricksWorkspaceUrlInput`<sup>Optional</sup> <a name="DatabricksWorkspaceUrlInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrlInput"></a>

```csharp
public string DatabricksWorkspaceUrlInput { get; }
```

- *Type:* string

---

##### `DatabricksApiToken`<sup>Required</sup> <a name="DatabricksApiToken" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiToken"></a>

```csharp
public string DatabricksApiToken { get; }
```

- *Type:* string

---

##### `DatabricksApiTokenPlaintext`<sup>Required</sup> <a name="DatabricksApiTokenPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksApiTokenPlaintext"></a>

```csharp
public string DatabricksApiTokenPlaintext { get; }
```

- *Type:* string

---

##### `DatabricksWorkspaceUrl`<sup>Required</sup> <a name="DatabricksWorkspaceUrl" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.databricksWorkspaceUrl"></a>

```csharp
public string DatabricksWorkspaceUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKeyPlaintext">ResetPrivateKeyPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetPrivateKeyPlaintext` <a name="ResetPrivateKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.resetPrivateKeyPlaintext"></a>

```csharp
private void ResetPrivateKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintextInput">PrivateKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintext">PrivateKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `PrivateKeyPlaintextInput`<sup>Optional</sup> <a name="PrivateKeyPlaintextInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintextInput"></a>

```csharp
public string PrivateKeyPlaintextInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PrivateKeyPlaintext`<sup>Required</sup> <a name="PrivateKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.privateKeyPlaintext"></a>

```csharp
public string PrivateKeyPlaintext { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientId">ResetMicrosoftEntraClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecret">ResetMicrosoftEntraClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecretPlaintext">ResetMicrosoftEntraClientSecretPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraTenantId">ResetMicrosoftEntraTenantId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiBase">ResetOpenaiApiBase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKey">ResetOpenaiApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKeyPlaintext">ResetOpenaiApiKeyPlaintext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiType">ResetOpenaiApiType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiVersion">ResetOpenaiApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiDeploymentName">ResetOpenaiDeploymentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiOrganization">ResetOpenaiOrganization</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMicrosoftEntraClientId` <a name="ResetMicrosoftEntraClientId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientId"></a>

```csharp
private void ResetMicrosoftEntraClientId()
```

##### `ResetMicrosoftEntraClientSecret` <a name="ResetMicrosoftEntraClientSecret" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecret"></a>

```csharp
private void ResetMicrosoftEntraClientSecret()
```

##### `ResetMicrosoftEntraClientSecretPlaintext` <a name="ResetMicrosoftEntraClientSecretPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraClientSecretPlaintext"></a>

```csharp
private void ResetMicrosoftEntraClientSecretPlaintext()
```

##### `ResetMicrosoftEntraTenantId` <a name="ResetMicrosoftEntraTenantId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetMicrosoftEntraTenantId"></a>

```csharp
private void ResetMicrosoftEntraTenantId()
```

##### `ResetOpenaiApiBase` <a name="ResetOpenaiApiBase" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiBase"></a>

```csharp
private void ResetOpenaiApiBase()
```

##### `ResetOpenaiApiKey` <a name="ResetOpenaiApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKey"></a>

```csharp
private void ResetOpenaiApiKey()
```

##### `ResetOpenaiApiKeyPlaintext` <a name="ResetOpenaiApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiKeyPlaintext"></a>

```csharp
private void ResetOpenaiApiKeyPlaintext()
```

##### `ResetOpenaiApiType` <a name="ResetOpenaiApiType" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiType"></a>

```csharp
private void ResetOpenaiApiType()
```

##### `ResetOpenaiApiVersion` <a name="ResetOpenaiApiVersion" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiApiVersion"></a>

```csharp
private void ResetOpenaiApiVersion()
```

##### `ResetOpenaiDeploymentName` <a name="ResetOpenaiDeploymentName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiDeploymentName"></a>

```csharp
private void ResetOpenaiDeploymentName()
```

##### `ResetOpenaiOrganization` <a name="ResetOpenaiOrganization" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.resetOpenaiOrganization"></a>

```csharp
private void ResetOpenaiOrganization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientIdInput">MicrosoftEntraClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretInput">MicrosoftEntraClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintextInput">MicrosoftEntraClientSecretPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantIdInput">MicrosoftEntraTenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBaseInput">OpenaiApiBaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyInput">OpenaiApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintextInput">OpenaiApiKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiTypeInput">OpenaiApiTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersionInput">OpenaiApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentNameInput">OpenaiDeploymentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganizationInput">OpenaiOrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientId">MicrosoftEntraClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecret">MicrosoftEntraClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintext">MicrosoftEntraClientSecretPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantId">MicrosoftEntraTenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBase">OpenaiApiBase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKey">OpenaiApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintext">OpenaiApiKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiType">OpenaiApiType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersion">OpenaiApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentName">OpenaiDeploymentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganization">OpenaiOrganization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MicrosoftEntraClientIdInput`<sup>Optional</sup> <a name="MicrosoftEntraClientIdInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientIdInput"></a>

```csharp
public string MicrosoftEntraClientIdInput { get; }
```

- *Type:* string

---

##### `MicrosoftEntraClientSecretInput`<sup>Optional</sup> <a name="MicrosoftEntraClientSecretInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretInput"></a>

```csharp
public string MicrosoftEntraClientSecretInput { get; }
```

- *Type:* string

---

##### `MicrosoftEntraClientSecretPlaintextInput`<sup>Optional</sup> <a name="MicrosoftEntraClientSecretPlaintextInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintextInput"></a>

```csharp
public string MicrosoftEntraClientSecretPlaintextInput { get; }
```

- *Type:* string

---

##### `MicrosoftEntraTenantIdInput`<sup>Optional</sup> <a name="MicrosoftEntraTenantIdInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantIdInput"></a>

```csharp
public string MicrosoftEntraTenantIdInput { get; }
```

- *Type:* string

---

##### `OpenaiApiBaseInput`<sup>Optional</sup> <a name="OpenaiApiBaseInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBaseInput"></a>

```csharp
public string OpenaiApiBaseInput { get; }
```

- *Type:* string

---

##### `OpenaiApiKeyInput`<sup>Optional</sup> <a name="OpenaiApiKeyInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyInput"></a>

```csharp
public string OpenaiApiKeyInput { get; }
```

- *Type:* string

---

##### `OpenaiApiKeyPlaintextInput`<sup>Optional</sup> <a name="OpenaiApiKeyPlaintextInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintextInput"></a>

```csharp
public string OpenaiApiKeyPlaintextInput { get; }
```

- *Type:* string

---

##### `OpenaiApiTypeInput`<sup>Optional</sup> <a name="OpenaiApiTypeInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiTypeInput"></a>

```csharp
public string OpenaiApiTypeInput { get; }
```

- *Type:* string

---

##### `OpenaiApiVersionInput`<sup>Optional</sup> <a name="OpenaiApiVersionInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersionInput"></a>

```csharp
public string OpenaiApiVersionInput { get; }
```

- *Type:* string

---

##### `OpenaiDeploymentNameInput`<sup>Optional</sup> <a name="OpenaiDeploymentNameInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentNameInput"></a>

```csharp
public string OpenaiDeploymentNameInput { get; }
```

- *Type:* string

---

##### `OpenaiOrganizationInput`<sup>Optional</sup> <a name="OpenaiOrganizationInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganizationInput"></a>

```csharp
public string OpenaiOrganizationInput { get; }
```

- *Type:* string

---

##### `MicrosoftEntraClientId`<sup>Required</sup> <a name="MicrosoftEntraClientId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientId"></a>

```csharp
public string MicrosoftEntraClientId { get; }
```

- *Type:* string

---

##### `MicrosoftEntraClientSecret`<sup>Required</sup> <a name="MicrosoftEntraClientSecret" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecret"></a>

```csharp
public string MicrosoftEntraClientSecret { get; }
```

- *Type:* string

---

##### `MicrosoftEntraClientSecretPlaintext`<sup>Required</sup> <a name="MicrosoftEntraClientSecretPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraClientSecretPlaintext"></a>

```csharp
public string MicrosoftEntraClientSecretPlaintext { get; }
```

- *Type:* string

---

##### `MicrosoftEntraTenantId`<sup>Required</sup> <a name="MicrosoftEntraTenantId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.microsoftEntraTenantId"></a>

```csharp
public string MicrosoftEntraTenantId { get; }
```

- *Type:* string

---

##### `OpenaiApiBase`<sup>Required</sup> <a name="OpenaiApiBase" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiBase"></a>

```csharp
public string OpenaiApiBase { get; }
```

- *Type:* string

---

##### `OpenaiApiKey`<sup>Required</sup> <a name="OpenaiApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKey"></a>

```csharp
public string OpenaiApiKey { get; }
```

- *Type:* string

---

##### `OpenaiApiKeyPlaintext`<sup>Required</sup> <a name="OpenaiApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiKeyPlaintext"></a>

```csharp
public string OpenaiApiKeyPlaintext { get; }
```

- *Type:* string

---

##### `OpenaiApiType`<sup>Required</sup> <a name="OpenaiApiType" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiType"></a>

```csharp
public string OpenaiApiType { get; }
```

- *Type:* string

---

##### `OpenaiApiVersion`<sup>Required</sup> <a name="OpenaiApiVersion" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiApiVersion"></a>

```csharp
public string OpenaiApiVersion { get; }
```

- *Type:* string

---

##### `OpenaiDeploymentName`<sup>Required</sup> <a name="OpenaiDeploymentName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiDeploymentName"></a>

```csharp
public string OpenaiDeploymentName { get; }
```

- *Type:* string

---

##### `OpenaiOrganization`<sup>Required</sup> <a name="OpenaiOrganization" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.openaiOrganization"></a>

```csharp
public string OpenaiOrganization { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putAi21LabsConfig">PutAi21LabsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putAmazonBedrockConfig">PutAmazonBedrockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putAnthropicConfig">PutAnthropicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putCohereConfig">PutCohereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putDatabricksModelServingConfig">PutDatabricksModelServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putGoogleCloudVertexAiConfig">PutGoogleCloudVertexAiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putOpenaiConfig">PutOpenaiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putPalmConfig">PutPalmConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetAi21LabsConfig">ResetAi21LabsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetAmazonBedrockConfig">ResetAmazonBedrockConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetAnthropicConfig">ResetAnthropicConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetCohereConfig">ResetCohereConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetDatabricksModelServingConfig">ResetDatabricksModelServingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetGoogleCloudVertexAiConfig">ResetGoogleCloudVertexAiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetOpenaiConfig">ResetOpenaiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetPalmConfig">ResetPalmConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAi21LabsConfig` <a name="PutAi21LabsConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putAi21LabsConfig"></a>

```csharp
private void PutAi21LabsConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putAi21LabsConfig.parameter.value"></a>

- *Type:* object

---

##### `PutAmazonBedrockConfig` <a name="PutAmazonBedrockConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putAmazonBedrockConfig"></a>

```csharp
private void PutAmazonBedrockConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putAmazonBedrockConfig.parameter.value"></a>

- *Type:* object

---

##### `PutAnthropicConfig` <a name="PutAnthropicConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putAnthropicConfig"></a>

```csharp
private void PutAnthropicConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putAnthropicConfig.parameter.value"></a>

- *Type:* object

---

##### `PutCohereConfig` <a name="PutCohereConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putCohereConfig"></a>

```csharp
private void PutCohereConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putCohereConfig.parameter.value"></a>

- *Type:* object

---

##### `PutDatabricksModelServingConfig` <a name="PutDatabricksModelServingConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putDatabricksModelServingConfig"></a>

```csharp
private void PutDatabricksModelServingConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putDatabricksModelServingConfig.parameter.value"></a>

- *Type:* object

---

##### `PutGoogleCloudVertexAiConfig` <a name="PutGoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putGoogleCloudVertexAiConfig"></a>

```csharp
private void PutGoogleCloudVertexAiConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putGoogleCloudVertexAiConfig.parameter.value"></a>

- *Type:* object

---

##### `PutOpenaiConfig` <a name="PutOpenaiConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putOpenaiConfig"></a>

```csharp
private void PutOpenaiConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putOpenaiConfig.parameter.value"></a>

- *Type:* object

---

##### `PutPalmConfig` <a name="PutPalmConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putPalmConfig"></a>

```csharp
private void PutPalmConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.putPalmConfig.parameter.value"></a>

- *Type:* object

---

##### `ResetAi21LabsConfig` <a name="ResetAi21LabsConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetAi21LabsConfig"></a>

```csharp
private void ResetAi21LabsConfig()
```

##### `ResetAmazonBedrockConfig` <a name="ResetAmazonBedrockConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetAmazonBedrockConfig"></a>

```csharp
private void ResetAmazonBedrockConfig()
```

##### `ResetAnthropicConfig` <a name="ResetAnthropicConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetAnthropicConfig"></a>

```csharp
private void ResetAnthropicConfig()
```

##### `ResetCohereConfig` <a name="ResetCohereConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetCohereConfig"></a>

```csharp
private void ResetCohereConfig()
```

##### `ResetDatabricksModelServingConfig` <a name="ResetDatabricksModelServingConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetDatabricksModelServingConfig"></a>

```csharp
private void ResetDatabricksModelServingConfig()
```

##### `ResetGoogleCloudVertexAiConfig` <a name="ResetGoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetGoogleCloudVertexAiConfig"></a>

```csharp
private void ResetGoogleCloudVertexAiConfig()
```

##### `ResetOpenaiConfig` <a name="ResetOpenaiConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetOpenaiConfig"></a>

```csharp
private void ResetOpenaiConfig()
```

##### `ResetPalmConfig` <a name="ResetPalmConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.resetPalmConfig"></a>

```csharp
private void ResetPalmConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfig">Ai21LabsConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfig">AmazonBedrockConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.anthropicConfig">AnthropicConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.cohereConfig">CohereConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfig">DatabricksModelServingConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfig">GoogleCloudVertexAiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.openaiConfig">OpenaiConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.palmConfig">PalmConfig</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfigInput">Ai21LabsConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfigInput">AmazonBedrockConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.anthropicConfigInput">AnthropicConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.cohereConfigInput">CohereConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfigInput">DatabricksModelServingConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfigInput">GoogleCloudVertexAiConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.openaiConfigInput">OpenaiConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.palmConfigInput">PalmConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.providerInput">ProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.taskInput">TaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.provider">Provider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.task">Task</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ai21LabsConfig`<sup>Required</sup> <a name="Ai21LabsConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfig"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList Ai21LabsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAi21LabsConfigList</a>

---

##### `AmazonBedrockConfig`<sup>Required</sup> <a name="AmazonBedrockConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfig"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList AmazonBedrockConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAmazonBedrockConfigList</a>

---

##### `AnthropicConfig`<sup>Required</sup> <a name="AnthropicConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.anthropicConfig"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList AnthropicConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelAnthropicConfigList</a>

---

##### `CohereConfig`<sup>Required</sup> <a name="CohereConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.cohereConfig"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList CohereConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelCohereConfigList</a>

---

##### `DatabricksModelServingConfig`<sup>Required</sup> <a name="DatabricksModelServingConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfig"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList DatabricksModelServingConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelDatabricksModelServingConfigList</a>

---

##### `GoogleCloudVertexAiConfig`<sup>Required</sup> <a name="GoogleCloudVertexAiConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfig"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList GoogleCloudVertexAiConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelGoogleCloudVertexAiConfigList</a>

---

##### `OpenaiConfig`<sup>Required</sup> <a name="OpenaiConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.openaiConfig"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList OpenaiConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOpenaiConfigList</a>

---

##### `PalmConfig`<sup>Required</sup> <a name="PalmConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.palmConfig"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList PalmConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList</a>

---

##### `Ai21LabsConfigInput`<sup>Optional</sup> <a name="Ai21LabsConfigInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.ai21LabsConfigInput"></a>

```csharp
public object Ai21LabsConfigInput { get; }
```

- *Type:* object

---

##### `AmazonBedrockConfigInput`<sup>Optional</sup> <a name="AmazonBedrockConfigInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.amazonBedrockConfigInput"></a>

```csharp
public object AmazonBedrockConfigInput { get; }
```

- *Type:* object

---

##### `AnthropicConfigInput`<sup>Optional</sup> <a name="AnthropicConfigInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.anthropicConfigInput"></a>

```csharp
public object AnthropicConfigInput { get; }
```

- *Type:* object

---

##### `CohereConfigInput`<sup>Optional</sup> <a name="CohereConfigInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.cohereConfigInput"></a>

```csharp
public object CohereConfigInput { get; }
```

- *Type:* object

---

##### `DatabricksModelServingConfigInput`<sup>Optional</sup> <a name="DatabricksModelServingConfigInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.databricksModelServingConfigInput"></a>

```csharp
public object DatabricksModelServingConfigInput { get; }
```

- *Type:* object

---

##### `GoogleCloudVertexAiConfigInput`<sup>Optional</sup> <a name="GoogleCloudVertexAiConfigInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.googleCloudVertexAiConfigInput"></a>

```csharp
public object GoogleCloudVertexAiConfigInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpenaiConfigInput`<sup>Optional</sup> <a name="OpenaiConfigInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.openaiConfigInput"></a>

```csharp
public object OpenaiConfigInput { get; }
```

- *Type:* object

---

##### `PalmConfigInput`<sup>Optional</sup> <a name="PalmConfigInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.palmConfigInput"></a>

```csharp
public object PalmConfigInput { get; }
```

- *Type:* object

---

##### `ProviderInput`<sup>Optional</sup> <a name="ProviderInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.providerInput"></a>

```csharp
public string ProviderInput { get; }
```

- *Type:* string

---

##### `TaskInput`<sup>Optional</sup> <a name="TaskInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.taskInput"></a>

```csharp
public string TaskInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Provider`<sup>Required</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.provider"></a>

```csharp
public string Provider { get; }
```

- *Type:* string

---

##### `Task`<sup>Required</sup> <a name="Task" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.task"></a>

```csharp
public string Task { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKey">ResetPalmApiKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKeyPlaintext">ResetPalmApiKeyPlaintext</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPalmApiKey` <a name="ResetPalmApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKey"></a>

```csharp
private void ResetPalmApiKey()
```

##### `ResetPalmApiKeyPlaintext` <a name="ResetPalmApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.resetPalmApiKeyPlaintext"></a>

```csharp
private void ResetPalmApiKeyPlaintext()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyInput">PalmApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintextInput">PalmApiKeyPlaintextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKey">PalmApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintext">PalmApiKeyPlaintext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PalmApiKeyInput`<sup>Optional</sup> <a name="PalmApiKeyInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyInput"></a>

```csharp
public string PalmApiKeyInput { get; }
```

- *Type:* string

---

##### `PalmApiKeyPlaintextInput`<sup>Optional</sup> <a name="PalmApiKeyPlaintextInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintextInput"></a>

```csharp
public string PalmApiKeyPlaintextInput { get; }
```

- *Type:* string

---

##### `PalmApiKey`<sup>Required</sup> <a name="PalmApiKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKey"></a>

```csharp
public string PalmApiKey { get; }
```

- *Type:* string

---

##### `PalmApiKeyPlaintext`<sup>Required</sup> <a name="PalmApiKeyPlaintext" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.palmApiKeyPlaintext"></a>

```csharp
public string PalmApiKeyPlaintext { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelPalmConfigOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.resetDocs">ResetDocs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetDocs` <a name="ResetDocs" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.resetDocs"></a>

```csharp
private void ResetDocs()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.docsInput">DocsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.docs">Docs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `DocsInput`<sup>Optional</sup> <a name="DocsInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.docsInput"></a>

```csharp
public string DocsInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Docs`<sup>Required</sup> <a name="Docs" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.docs"></a>

```csharp
public string Docs { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference <a name="DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.putExternalModel">PutExternalModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.putFoundationModel">PutFoundationModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.resetEntityName">ResetEntityName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.resetEntityVersion">ResetEntityVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.resetExternalModel">ResetExternalModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.resetFoundationModel">ResetFoundationModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExternalModel` <a name="PutExternalModel" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.putExternalModel"></a>

```csharp
private void PutExternalModel(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.putExternalModel.parameter.value"></a>

- *Type:* object

---

##### `PutFoundationModel` <a name="PutFoundationModel" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.putFoundationModel"></a>

```csharp
private void PutFoundationModel(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.putFoundationModel.parameter.value"></a>

- *Type:* object

---

##### `ResetEntityName` <a name="ResetEntityName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.resetEntityName"></a>

```csharp
private void ResetEntityName()
```

##### `ResetEntityVersion` <a name="ResetEntityVersion" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.resetEntityVersion"></a>

```csharp
private void ResetEntityVersion()
```

##### `ResetExternalModel` <a name="ResetExternalModel" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.resetExternalModel"></a>

```csharp
private void ResetExternalModel()
```

##### `ResetFoundationModel` <a name="ResetFoundationModel" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.resetFoundationModel"></a>

```csharp
private void ResetFoundationModel()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.externalModel">ExternalModel</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.foundationModel">FoundationModel</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.entityNameInput">EntityNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.entityVersionInput">EntityVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.externalModelInput">ExternalModelInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.foundationModelInput">FoundationModelInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.entityName">EntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.entityVersion">EntityVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExternalModel`<sup>Required</sup> <a name="ExternalModel" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.externalModel"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList ExternalModel { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesExternalModelList</a>

---

##### `FoundationModel`<sup>Required</sup> <a name="FoundationModel" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.foundationModel"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList FoundationModel { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList">DataDatabricksServingEndpointsEndpointsConfigServedEntitiesFoundationModelList</a>

---

##### `EntityNameInput`<sup>Optional</sup> <a name="EntityNameInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.entityNameInput"></a>

```csharp
public string EntityNameInput { get; }
```

- *Type:* string

---

##### `EntityVersionInput`<sup>Optional</sup> <a name="EntityVersionInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.entityVersionInput"></a>

```csharp
public string EntityVersionInput { get; }
```

- *Type:* string

---

##### `ExternalModelInput`<sup>Optional</sup> <a name="ExternalModelInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.externalModelInput"></a>

```csharp
public object ExternalModelInput { get; }
```

- *Type:* object

---

##### `FoundationModelInput`<sup>Optional</sup> <a name="FoundationModelInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.foundationModelInput"></a>

```csharp
public object FoundationModelInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `EntityName`<sup>Required</sup> <a name="EntityName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.entityName"></a>

```csharp
public string EntityName { get; }
```

- *Type:* string

---

##### `EntityVersion`<sup>Required</sup> <a name="EntityVersion" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.entityVersion"></a>

```csharp
public string EntityVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedEntitiesOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedModelsList <a name="DataDatabricksServingEndpointsEndpointsConfigServedModelsList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedModelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference <a name="DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.resetModelVersion">ResetModelVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetModelName` <a name="ResetModelName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.resetModelName"></a>

```csharp
private void ResetModelName()
```

##### `ResetModelVersion` <a name="ResetModelVersion" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.resetModelVersion"></a>

```csharp
private void ResetModelVersion()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.modelVersionInput">ModelVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.modelVersion">ModelVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.modelNameInput"></a>

```csharp
public string ModelNameInput { get; }
```

- *Type:* string

---

##### `ModelVersionInput`<sup>Optional</sup> <a name="ModelVersionInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.modelVersionInput"></a>

```csharp
public string ModelVersionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `ModelVersion`<sup>Required</sup> <a name="ModelVersion" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.modelVersion"></a>

```csharp
public string ModelVersion { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigServedModelsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsList <a name="DataDatabricksServingEndpointsEndpointsList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsOutputReference <a name="DataDatabricksServingEndpointsEndpointsOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.putAiGateway">PutAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.putState">PutState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetAiGateway">ResetAiGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetCreationTimestamp">ResetCreationTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetCreator">ResetCreator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetLastUpdatedTimestamp">ResetLastUpdatedTimestamp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetTask">ResetTask</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAiGateway` <a name="PutAiGateway" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.putAiGateway"></a>

```csharp
private void PutAiGateway(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.putAiGateway.parameter.value"></a>

- *Type:* object

---

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.putConfig"></a>

```csharp
private void PutConfig(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.putConfig.parameter.value"></a>

- *Type:* object

---

##### `PutState` <a name="PutState" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.putState"></a>

```csharp
private void PutState(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.putState.parameter.value"></a>

- *Type:* object

---

##### `PutTags` <a name="PutTags" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.putTags"></a>

```csharp
private void PutTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.putTags.parameter.value"></a>

- *Type:* object

---

##### `ResetAiGateway` <a name="ResetAiGateway" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetAiGateway"></a>

```csharp
private void ResetAiGateway()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetCreationTimestamp` <a name="ResetCreationTimestamp" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetCreationTimestamp"></a>

```csharp
private void ResetCreationTimestamp()
```

##### `ResetCreator` <a name="ResetCreator" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetCreator"></a>

```csharp
private void ResetCreator()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLastUpdatedTimestamp` <a name="ResetLastUpdatedTimestamp" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetLastUpdatedTimestamp"></a>

```csharp
private void ResetLastUpdatedTimestamp()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetState"></a>

```csharp
private void ResetState()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTask` <a name="ResetTask" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.resetTask"></a>

```csharp
private void ResetTask()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.aiGateway">AiGateway</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList">DataDatabricksServingEndpointsEndpointsAiGatewayList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList">DataDatabricksServingEndpointsEndpointsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.state">State</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList">DataDatabricksServingEndpointsEndpointsStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList">DataDatabricksServingEndpointsEndpointsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.aiGatewayInput">AiGatewayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.configInput">ConfigInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.creationTimestampInput">CreationTimestampInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.creatorInput">CreatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.lastUpdatedTimestampInput">LastUpdatedTimestampInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.stateInput">StateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.tagsInput">TagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.taskInput">TaskInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.creationTimestamp">CreationTimestamp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.creator">Creator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.task">Task</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AiGateway`<sup>Required</sup> <a name="AiGateway" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.aiGateway"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsAiGatewayList AiGateway { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsAiGatewayList">DataDatabricksServingEndpointsEndpointsAiGatewayList</a>

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.config"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsConfigList Config { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsConfigList">DataDatabricksServingEndpointsEndpointsConfigList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.state"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsStateList State { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList">DataDatabricksServingEndpointsEndpointsStateList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.tags"></a>

```csharp
public DataDatabricksServingEndpointsEndpointsTagsList Tags { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList">DataDatabricksServingEndpointsEndpointsTagsList</a>

---

##### `AiGatewayInput`<sup>Optional</sup> <a name="AiGatewayInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.aiGatewayInput"></a>

```csharp
public object AiGatewayInput { get; }
```

- *Type:* object

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.configInput"></a>

```csharp
public object ConfigInput { get; }
```

- *Type:* object

---

##### `CreationTimestampInput`<sup>Optional</sup> <a name="CreationTimestampInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.creationTimestampInput"></a>

```csharp
public double CreationTimestampInput { get; }
```

- *Type:* double

---

##### `CreatorInput`<sup>Optional</sup> <a name="CreatorInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.creatorInput"></a>

```csharp
public string CreatorInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LastUpdatedTimestampInput`<sup>Optional</sup> <a name="LastUpdatedTimestampInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.lastUpdatedTimestampInput"></a>

```csharp
public double LastUpdatedTimestampInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.stateInput"></a>

```csharp
public object StateInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.tagsInput"></a>

```csharp
public object TagsInput { get; }
```

- *Type:* object

---

##### `TaskInput`<sup>Optional</sup> <a name="TaskInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.taskInput"></a>

```csharp
public string TaskInput { get; }
```

- *Type:* string

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.creationTimestamp"></a>

```csharp
public double CreationTimestamp { get; }
```

- *Type:* double

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.creator"></a>

```csharp
public string Creator { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.lastUpdatedTimestamp"></a>

```csharp
public double LastUpdatedTimestamp { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Task`<sup>Required</sup> <a name="Task" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.task"></a>

```csharp
public string Task { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsStateList <a name="DataDatabricksServingEndpointsEndpointsStateList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsStateList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsStateOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsStateOutputReference <a name="DataDatabricksServingEndpointsEndpointsStateOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsStateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.resetConfigUpdate">ResetConfigUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.resetReady">ResetReady</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfigUpdate` <a name="ResetConfigUpdate" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.resetConfigUpdate"></a>

```csharp
private void ResetConfigUpdate()
```

##### `ResetReady` <a name="ResetReady" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.resetReady"></a>

```csharp
private void ResetReady()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.configUpdateInput">ConfigUpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.readyInput">ReadyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.configUpdate">ConfigUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.ready">Ready</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConfigUpdateInput`<sup>Optional</sup> <a name="ConfigUpdateInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.configUpdateInput"></a>

```csharp
public string ConfigUpdateInput { get; }
```

- *Type:* string

---

##### `ReadyInput`<sup>Optional</sup> <a name="ReadyInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.readyInput"></a>

```csharp
public string ReadyInput { get; }
```

- *Type:* string

---

##### `ConfigUpdate`<sup>Required</sup> <a name="ConfigUpdate" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.configUpdate"></a>

```csharp
public string ConfigUpdate { get; }
```

- *Type:* string

---

##### `Ready`<sup>Required</sup> <a name="Ready" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.ready"></a>

```csharp
public string Ready { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsStateOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsTagsList <a name="DataDatabricksServingEndpointsEndpointsTagsList" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.get"></a>

```csharp
private DataDatabricksServingEndpointsEndpointsTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksServingEndpointsEndpointsTagsOutputReference <a name="DataDatabricksServingEndpointsEndpointsTagsOutputReference" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksServingEndpointsEndpointsTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksServingEndpoints.DataDatabricksServingEndpointsEndpointsTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



