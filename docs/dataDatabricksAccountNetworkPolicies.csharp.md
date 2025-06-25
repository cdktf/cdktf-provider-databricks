# `dataDatabricksAccountNetworkPolicies` Submodule <a name="`dataDatabricksAccountNetworkPolicies` Submodule" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksAccountNetworkPolicies <a name="DataDatabricksAccountNetworkPolicies" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies databricks_account_network_policies}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPolicies(Construct Scope, string Id, DataDatabricksAccountNetworkPoliciesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig">DataDatabricksAccountNetworkPoliciesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig">DataDatabricksAccountNetworkPoliciesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksAccountNetworkPolicies resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountNetworkPolicies.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountNetworkPolicies.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountNetworkPolicies.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksAccountNetworkPolicies.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksAccountNetworkPolicies resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksAccountNetworkPolicies to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksAccountNetworkPolicies that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksAccountNetworkPolicies to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.items">Items</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList">DataDatabricksAccountNetworkPoliciesItemsList</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.items"></a>

```csharp
public DataDatabricksAccountNetworkPoliciesItemsList Items { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList">DataDatabricksAccountNetworkPoliciesItemsList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPolicies.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksAccountNetworkPoliciesConfig <a name="DataDatabricksAccountNetworkPoliciesConfig" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesConfig {
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

### DataDatabricksAccountNetworkPoliciesItems <a name="DataDatabricksAccountNetworkPoliciesItems" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItems"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItems {
    string AccountId = null,
    DataDatabricksAccountNetworkPoliciesItemsEgress Egress = null,
    string NetworkPolicyId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItems.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#account_id DataDatabricksAccountNetworkPolicies#account_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItems.property.egress">Egress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgress">DataDatabricksAccountNetworkPoliciesItemsEgress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#egress DataDatabricksAccountNetworkPolicies#egress}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItems.property.networkPolicyId">NetworkPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#network_policy_id DataDatabricksAccountNetworkPolicies#network_policy_id}. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItems.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#account_id DataDatabricksAccountNetworkPolicies#account_id}.

---

##### `Egress`<sup>Optional</sup> <a name="Egress" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItems.property.egress"></a>

```csharp
public DataDatabricksAccountNetworkPoliciesItemsEgress Egress { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgress">DataDatabricksAccountNetworkPoliciesItemsEgress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#egress DataDatabricksAccountNetworkPolicies#egress}.

---

##### `NetworkPolicyId`<sup>Optional</sup> <a name="NetworkPolicyId" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItems.property.networkPolicyId"></a>

```csharp
public string NetworkPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#network_policy_id DataDatabricksAccountNetworkPolicies#network_policy_id}.

---

### DataDatabricksAccountNetworkPoliciesItemsEgress <a name="DataDatabricksAccountNetworkPoliciesItemsEgress" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsEgress {
    DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess NetworkAccess = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgress.property.networkAccess">NetworkAccess</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#network_access DataDatabricksAccountNetworkPolicies#network_access}. |

---

##### `NetworkAccess`<sup>Optional</sup> <a name="NetworkAccess" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgress.property.networkAccess"></a>

```csharp
public DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess NetworkAccess { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#network_access DataDatabricksAccountNetworkPolicies#network_access}.

---

### DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess <a name="DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess {
    string RestrictionMode,
    object AllowedInternetDestinations = null,
    object AllowedStorageDestinations = null,
    DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement PolicyEnforcement = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess.property.restrictionMode">RestrictionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#restriction_mode DataDatabricksAccountNetworkPolicies#restriction_mode}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess.property.allowedInternetDestinations">AllowedInternetDestinations</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#allowed_internet_destinations DataDatabricksAccountNetworkPolicies#allowed_internet_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess.property.allowedStorageDestinations">AllowedStorageDestinations</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#allowed_storage_destinations DataDatabricksAccountNetworkPolicies#allowed_storage_destinations}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess.property.policyEnforcement">PolicyEnforcement</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#policy_enforcement DataDatabricksAccountNetworkPolicies#policy_enforcement}. |

---

##### `RestrictionMode`<sup>Required</sup> <a name="RestrictionMode" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess.property.restrictionMode"></a>

```csharp
public string RestrictionMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#restriction_mode DataDatabricksAccountNetworkPolicies#restriction_mode}.

---

##### `AllowedInternetDestinations`<sup>Optional</sup> <a name="AllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess.property.allowedInternetDestinations"></a>

```csharp
public object AllowedInternetDestinations { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#allowed_internet_destinations DataDatabricksAccountNetworkPolicies#allowed_internet_destinations}.

---

##### `AllowedStorageDestinations`<sup>Optional</sup> <a name="AllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess.property.allowedStorageDestinations"></a>

```csharp
public object AllowedStorageDestinations { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#allowed_storage_destinations DataDatabricksAccountNetworkPolicies#allowed_storage_destinations}.

---

##### `PolicyEnforcement`<sup>Optional</sup> <a name="PolicyEnforcement" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess.property.policyEnforcement"></a>

```csharp
public DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement PolicyEnforcement { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#policy_enforcement DataDatabricksAccountNetworkPolicies#policy_enforcement}.

---

### DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations <a name="DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations {
    string Destination = null,
    string InternetDestinationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations.property.destination">Destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#destination DataDatabricksAccountNetworkPolicies#destination}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations.property.internetDestinationType">InternetDestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#internet_destination_type DataDatabricksAccountNetworkPolicies#internet_destination_type}. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations.property.destination"></a>

```csharp
public string Destination { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#destination DataDatabricksAccountNetworkPolicies#destination}.

---

##### `InternetDestinationType`<sup>Optional</sup> <a name="InternetDestinationType" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinations.property.internetDestinationType"></a>

```csharp
public string InternetDestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#internet_destination_type DataDatabricksAccountNetworkPolicies#internet_destination_type}.

---

### DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations <a name="DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations {
    string AzureStorageAccount = null,
    string AzureStorageService = null,
    string BucketName = null,
    string Region = null,
    string StorageDestinationType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations.property.azureStorageAccount">AzureStorageAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#azure_storage_account DataDatabricksAccountNetworkPolicies#azure_storage_account}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations.property.azureStorageService">AzureStorageService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#azure_storage_service DataDatabricksAccountNetworkPolicies#azure_storage_service}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations.property.bucketName">BucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#bucket_name DataDatabricksAccountNetworkPolicies#bucket_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#region DataDatabricksAccountNetworkPolicies#region}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations.property.storageDestinationType">StorageDestinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#storage_destination_type DataDatabricksAccountNetworkPolicies#storage_destination_type}. |

---

##### `AzureStorageAccount`<sup>Optional</sup> <a name="AzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations.property.azureStorageAccount"></a>

```csharp
public string AzureStorageAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#azure_storage_account DataDatabricksAccountNetworkPolicies#azure_storage_account}.

---

##### `AzureStorageService`<sup>Optional</sup> <a name="AzureStorageService" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations.property.azureStorageService"></a>

```csharp
public string AzureStorageService { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#azure_storage_service DataDatabricksAccountNetworkPolicies#azure_storage_service}.

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#bucket_name DataDatabricksAccountNetworkPolicies#bucket_name}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#region DataDatabricksAccountNetworkPolicies#region}.

---

##### `StorageDestinationType`<sup>Optional</sup> <a name="StorageDestinationType" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinations.property.storageDestinationType"></a>

```csharp
public string StorageDestinationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#storage_destination_type DataDatabricksAccountNetworkPolicies#storage_destination_type}.

---

### DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement <a name="DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement {
    string[] DryRunModeProductFilter = null,
    string EnforcementMode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement.property.dryRunModeProductFilter">DryRunModeProductFilter</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#dry_run_mode_product_filter DataDatabricksAccountNetworkPolicies#dry_run_mode_product_filter}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement.property.enforcementMode">EnforcementMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#enforcement_mode DataDatabricksAccountNetworkPolicies#enforcement_mode}. |

---

##### `DryRunModeProductFilter`<sup>Optional</sup> <a name="DryRunModeProductFilter" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement.property.dryRunModeProductFilter"></a>

```csharp
public string[] DryRunModeProductFilter { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#dry_run_mode_product_filter DataDatabricksAccountNetworkPolicies#dry_run_mode_product_filter}.

---

##### `EnforcementMode`<sup>Optional</sup> <a name="EnforcementMode" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement.property.enforcementMode"></a>

```csharp
public string EnforcementMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/data-sources/account_network_policies#enforcement_mode DataDatabricksAccountNetworkPolicies#enforcement_mode}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList <a name="DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.get"></a>

```csharp
private DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference <a name="DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetInternetDestinationType">ResetInternetDestinationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestination` <a name="ResetDestination" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetDestination"></a>

```csharp
private void ResetDestination()
```

##### `ResetInternetDestinationType` <a name="ResetInternetDestinationType" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.resetInternetDestinationType"></a>

```csharp
private void ResetInternetDestinationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationTypeInput">InternetDestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destination">Destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationType">InternetDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destinationInput"></a>

```csharp
public string DestinationInput { get; }
```

- *Type:* string

---

##### `InternetDestinationTypeInput`<sup>Optional</sup> <a name="InternetDestinationTypeInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationTypeInput"></a>

```csharp
public string InternetDestinationTypeInput { get; }
```

- *Type:* string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.destination"></a>

```csharp
public string Destination { get; }
```

- *Type:* string

---

##### `InternetDestinationType`<sup>Required</sup> <a name="InternetDestinationType" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internetDestinationType"></a>

```csharp
public string InternetDestinationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList <a name="DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.get"></a>

```csharp
private DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference <a name="DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount">ResetAzureStorageAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService">ResetAzureStorageService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetStorageDestinationType">ResetStorageDestinationType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAzureStorageAccount` <a name="ResetAzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageAccount"></a>

```csharp
private void ResetAzureStorageAccount()
```

##### `ResetAzureStorageService` <a name="ResetAzureStorageService" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetAzureStorageService"></a>

```csharp
private void ResetAzureStorageService()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetStorageDestinationType` <a name="ResetStorageDestinationType" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.resetStorageDestinationType"></a>

```csharp
private void ResetStorageDestinationType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput">AzureStorageAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput">AzureStorageServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationTypeInput">StorageDestinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount">AzureStorageAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageService">AzureStorageService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationType">StorageDestinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AzureStorageAccountInput`<sup>Optional</sup> <a name="AzureStorageAccountInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccountInput"></a>

```csharp
public string AzureStorageAccountInput { get; }
```

- *Type:* string

---

##### `AzureStorageServiceInput`<sup>Optional</sup> <a name="AzureStorageServiceInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageServiceInput"></a>

```csharp
public string AzureStorageServiceInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `StorageDestinationTypeInput`<sup>Optional</sup> <a name="StorageDestinationTypeInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationTypeInput"></a>

```csharp
public string StorageDestinationTypeInput { get; }
```

- *Type:* string

---

##### `AzureStorageAccount`<sup>Required</sup> <a name="AzureStorageAccount" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageAccount"></a>

```csharp
public string AzureStorageAccount { get; }
```

- *Type:* string

---

##### `AzureStorageService`<sup>Required</sup> <a name="AzureStorageService" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.azureStorageService"></a>

```csharp
public string AzureStorageService { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `StorageDestinationType`<sup>Required</sup> <a name="StorageDestinationType" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.storageDestinationType"></a>

```csharp
public string StorageDestinationType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference <a name="DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.putAllowedInternetDestinations">PutAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.putAllowedStorageDestinations">PutAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.putPolicyEnforcement">PutPolicyEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.resetAllowedInternetDestinations">ResetAllowedInternetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.resetAllowedStorageDestinations">ResetAllowedStorageDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.resetPolicyEnforcement">ResetPolicyEnforcement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedInternetDestinations` <a name="PutAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.putAllowedInternetDestinations"></a>

```csharp
private void PutAllowedInternetDestinations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.putAllowedInternetDestinations.parameter.value"></a>

- *Type:* object

---

##### `PutAllowedStorageDestinations` <a name="PutAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.putAllowedStorageDestinations"></a>

```csharp
private void PutAllowedStorageDestinations(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.putAllowedStorageDestinations.parameter.value"></a>

- *Type:* object

---

##### `PutPolicyEnforcement` <a name="PutPolicyEnforcement" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.putPolicyEnforcement"></a>

```csharp
private void PutPolicyEnforcement(DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.putPolicyEnforcement.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcement</a>

---

##### `ResetAllowedInternetDestinations` <a name="ResetAllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.resetAllowedInternetDestinations"></a>

```csharp
private void ResetAllowedInternetDestinations()
```

##### `ResetAllowedStorageDestinations` <a name="ResetAllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.resetAllowedStorageDestinations"></a>

```csharp
private void ResetAllowedStorageDestinations()
```

##### `ResetPolicyEnforcement` <a name="ResetPolicyEnforcement" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.resetPolicyEnforcement"></a>

```csharp
private void ResetPolicyEnforcement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.allowedInternetDestinations">AllowedInternetDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.allowedStorageDestinations">AllowedStorageDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.policyEnforcement">PolicyEnforcement</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.allowedInternetDestinationsInput">AllowedInternetDestinationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.allowedStorageDestinationsInput">AllowedStorageDestinationsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.policyEnforcementInput">PolicyEnforcementInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.restrictionModeInput">RestrictionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.restrictionMode">RestrictionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedInternetDestinations`<sup>Required</sup> <a name="AllowedInternetDestinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.allowedInternetDestinations"></a>

```csharp
public DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList AllowedInternetDestinations { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedInternetDestinationsList</a>

---

##### `AllowedStorageDestinations`<sup>Required</sup> <a name="AllowedStorageDestinations" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.allowedStorageDestinations"></a>

```csharp
public DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList AllowedStorageDestinations { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessAllowedStorageDestinationsList</a>

---

##### `PolicyEnforcement`<sup>Required</sup> <a name="PolicyEnforcement" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.policyEnforcement"></a>

```csharp
public DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference PolicyEnforcement { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference</a>

---

##### `AllowedInternetDestinationsInput`<sup>Optional</sup> <a name="AllowedInternetDestinationsInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.allowedInternetDestinationsInput"></a>

```csharp
public object AllowedInternetDestinationsInput { get; }
```

- *Type:* object

---

##### `AllowedStorageDestinationsInput`<sup>Optional</sup> <a name="AllowedStorageDestinationsInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.allowedStorageDestinationsInput"></a>

```csharp
public object AllowedStorageDestinationsInput { get; }
```

- *Type:* object

---

##### `PolicyEnforcementInput`<sup>Optional</sup> <a name="PolicyEnforcementInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.policyEnforcementInput"></a>

```csharp
public object PolicyEnforcementInput { get; }
```

- *Type:* object

---

##### `RestrictionModeInput`<sup>Optional</sup> <a name="RestrictionModeInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.restrictionModeInput"></a>

```csharp
public string RestrictionModeInput { get; }
```

- *Type:* string

---

##### `RestrictionMode`<sup>Required</sup> <a name="RestrictionMode" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.restrictionMode"></a>

```csharp
public string RestrictionMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference <a name="DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.resetDryRunModeProductFilter">ResetDryRunModeProductFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.resetEnforcementMode">ResetEnforcementMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDryRunModeProductFilter` <a name="ResetDryRunModeProductFilter" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.resetDryRunModeProductFilter"></a>

```csharp
private void ResetDryRunModeProductFilter()
```

##### `ResetEnforcementMode` <a name="ResetEnforcementMode" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.resetEnforcementMode"></a>

```csharp
private void ResetEnforcementMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilterInput">DryRunModeProductFilterInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementModeInput">EnforcementModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilter">DryRunModeProductFilter</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementMode">EnforcementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DryRunModeProductFilterInput`<sup>Optional</sup> <a name="DryRunModeProductFilterInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilterInput"></a>

```csharp
public string[] DryRunModeProductFilterInput { get; }
```

- *Type:* string[]

---

##### `EnforcementModeInput`<sup>Optional</sup> <a name="EnforcementModeInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementModeInput"></a>

```csharp
public string EnforcementModeInput { get; }
```

- *Type:* string

---

##### `DryRunModeProductFilter`<sup>Required</sup> <a name="DryRunModeProductFilter" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.dryRunModeProductFilter"></a>

```csharp
public string[] DryRunModeProductFilter { get; }
```

- *Type:* string[]

---

##### `EnforcementMode`<sup>Required</sup> <a name="EnforcementMode" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.enforcementMode"></a>

```csharp
public string EnforcementMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessPolicyEnforcementOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference <a name="DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.putNetworkAccess">PutNetworkAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.resetNetworkAccess">ResetNetworkAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkAccess` <a name="PutNetworkAccess" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.putNetworkAccess"></a>

```csharp
private void PutNetworkAccess(DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.putNetworkAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccess</a>

---

##### `ResetNetworkAccess` <a name="ResetNetworkAccess" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.resetNetworkAccess"></a>

```csharp
private void ResetNetworkAccess()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.property.networkAccess">NetworkAccess</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.property.networkAccessInput">NetworkAccessInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkAccess`<sup>Required</sup> <a name="NetworkAccess" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.property.networkAccess"></a>

```csharp
public DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference NetworkAccess { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference">DataDatabricksAccountNetworkPoliciesItemsEgressNetworkAccessOutputReference</a>

---

##### `NetworkAccessInput`<sup>Optional</sup> <a name="NetworkAccessInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.property.networkAccessInput"></a>

```csharp
public object NetworkAccessInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAccountNetworkPoliciesItemsList <a name="DataDatabricksAccountNetworkPoliciesItemsList" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.get"></a>

```csharp
private DataDatabricksAccountNetworkPoliciesItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksAccountNetworkPoliciesItemsOutputReference <a name="DataDatabricksAccountNetworkPoliciesItemsOutputReference" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksAccountNetworkPoliciesItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.putEgress">PutEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.resetEgress">ResetEgress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.resetNetworkPolicyId">ResetNetworkPolicyId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgress` <a name="PutEgress" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.putEgress"></a>

```csharp
private void PutEgress(DataDatabricksAccountNetworkPoliciesItemsEgress Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.putEgress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgress">DataDatabricksAccountNetworkPoliciesItemsEgress</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetEgress` <a name="ResetEgress" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.resetEgress"></a>

```csharp
private void ResetEgress()
```

##### `ResetNetworkPolicyId` <a name="ResetNetworkPolicyId" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.resetNetworkPolicyId"></a>

```csharp
private void ResetNetworkPolicyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.egress">Egress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference">DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.egressInput">EgressInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.networkPolicyIdInput">NetworkPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.networkPolicyId">NetworkPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItems">DataDatabricksAccountNetworkPoliciesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Egress`<sup>Required</sup> <a name="Egress" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.egress"></a>

```csharp
public DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference Egress { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference">DataDatabricksAccountNetworkPoliciesItemsEgressOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `EgressInput`<sup>Optional</sup> <a name="EgressInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.egressInput"></a>

```csharp
public object EgressInput { get; }
```

- *Type:* object

---

##### `NetworkPolicyIdInput`<sup>Optional</sup> <a name="NetworkPolicyIdInput" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.networkPolicyIdInput"></a>

```csharp
public string NetworkPolicyIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `NetworkPolicyId`<sup>Required</sup> <a name="NetworkPolicyId" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.networkPolicyId"></a>

```csharp
public string NetworkPolicyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItemsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksAccountNetworkPoliciesItems InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksAccountNetworkPolicies.DataDatabricksAccountNetworkPoliciesItems">DataDatabricksAccountNetworkPoliciesItems</a>

---



