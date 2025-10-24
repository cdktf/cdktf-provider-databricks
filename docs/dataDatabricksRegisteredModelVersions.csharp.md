# `dataDatabricksRegisteredModelVersions` Submodule <a name="`dataDatabricksRegisteredModelVersions` Submodule" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksRegisteredModelVersions <a name="DataDatabricksRegisteredModelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions databricks_registered_model_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersions(Construct Scope, string Id, DataDatabricksRegisteredModelVersionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig">DataDatabricksRegisteredModelVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig">DataDatabricksRegisteredModelVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.putModelVersions">PutModelVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.resetModelVersions">ResetModelVersions</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutModelVersions` <a name="PutModelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.putModelVersions"></a>

```csharp
private void PutModelVersions(IResolvable|DataDatabricksRegisteredModelVersionsModelVersions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.putModelVersions.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]

---

##### `ResetModelVersions` <a name="ResetModelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.resetModelVersions"></a>

```csharp
private void ResetModelVersions()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksRegisteredModelVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksRegisteredModelVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksRegisteredModelVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksRegisteredModelVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksRegisteredModelVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksRegisteredModelVersions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksRegisteredModelVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksRegisteredModelVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksRegisteredModelVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.modelVersions">ModelVersions</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList">DataDatabricksRegisteredModelVersionsModelVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.modelVersionsInput">ModelVersionsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ModelVersions`<sup>Required</sup> <a name="ModelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.modelVersions"></a>

```csharp
public DataDatabricksRegisteredModelVersionsModelVersionsList ModelVersions { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList">DataDatabricksRegisteredModelVersionsModelVersionsList</a>

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `ModelVersionsInput`<sup>Optional</sup> <a name="ModelVersionsInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.modelVersionsInput"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersions[] ModelVersionsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksRegisteredModelVersionsConfig <a name="DataDatabricksRegisteredModelVersionsConfig" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string FullName,
    IResolvable|DataDatabricksRegisteredModelVersionsModelVersions[] ModelVersions = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#full_name DataDatabricksRegisteredModelVersions#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.modelVersions">ModelVersions</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#model_versions DataDatabricksRegisteredModelVersions#model_versions}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#full_name DataDatabricksRegisteredModelVersions#full_name}.

---

##### `ModelVersions`<sup>Optional</sup> <a name="ModelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsConfig.property.modelVersions"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersions[] ModelVersions { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#model_versions DataDatabricksRegisteredModelVersions#model_versions}.

---

### DataDatabricksRegisteredModelVersionsModelVersions <a name="DataDatabricksRegisteredModelVersionsModelVersions" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersions {
    IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsAliases[] Aliases = null,
    string CatalogName = null,
    string Comment = null,
    double CreatedAt = null,
    string CreatedBy = null,
    string Id = null,
    string MetastoreId = null,
    string ModelName = null,
    IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[] ModelVersionDependencies = null,
    string RunId = null,
    double RunWorkspaceId = null,
    string SchemaName = null,
    string Source = null,
    string Status = null,
    string StorageLocation = null,
    double UpdatedAt = null,
    string UpdatedBy = null,
    double Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.aliases">Aliases</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#aliases DataDatabricksRegisteredModelVersions#aliases}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#catalog_name DataDatabricksRegisteredModelVersions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#comment DataDatabricksRegisteredModelVersions#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.createdAt">CreatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#created_at DataDatabricksRegisteredModelVersions#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.createdBy">CreatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#created_by DataDatabricksRegisteredModelVersions#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#id DataDatabricksRegisteredModelVersions#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#metastore_id DataDatabricksRegisteredModelVersions#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.modelName">ModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#model_name DataDatabricksRegisteredModelVersions#model_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.modelVersionDependencies">ModelVersionDependencies</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#model_version_dependencies DataDatabricksRegisteredModelVersions#model_version_dependencies}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.runId">RunId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#run_id DataDatabricksRegisteredModelVersions#run_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.runWorkspaceId">RunWorkspaceId</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#run_workspace_id DataDatabricksRegisteredModelVersions#run_workspace_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#schema_name DataDatabricksRegisteredModelVersions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#source DataDatabricksRegisteredModelVersions#source}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#status DataDatabricksRegisteredModelVersions#status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.storageLocation">StorageLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#storage_location DataDatabricksRegisteredModelVersions#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#updated_at DataDatabricksRegisteredModelVersions#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#updated_by DataDatabricksRegisteredModelVersions#updated_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.version">Version</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#version DataDatabricksRegisteredModelVersions#version}. |

---

##### `Aliases`<sup>Optional</sup> <a name="Aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.aliases"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsAliases[] Aliases { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#aliases DataDatabricksRegisteredModelVersions#aliases}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#catalog_name DataDatabricksRegisteredModelVersions#catalog_name}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#comment DataDatabricksRegisteredModelVersions#comment}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.createdAt"></a>

```csharp
public double CreatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#created_at DataDatabricksRegisteredModelVersions#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#created_by DataDatabricksRegisteredModelVersions#created_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#id DataDatabricksRegisteredModelVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#metastore_id DataDatabricksRegisteredModelVersions#metastore_id}.

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.modelName"></a>

```csharp
public string ModelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#model_name DataDatabricksRegisteredModelVersions#model_name}.

---

##### `ModelVersionDependencies`<sup>Optional</sup> <a name="ModelVersionDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.modelVersionDependencies"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[] ModelVersionDependencies { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#model_version_dependencies DataDatabricksRegisteredModelVersions#model_version_dependencies}.

---

##### `RunId`<sup>Optional</sup> <a name="RunId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.runId"></a>

```csharp
public string RunId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#run_id DataDatabricksRegisteredModelVersions#run_id}.

---

##### `RunWorkspaceId`<sup>Optional</sup> <a name="RunWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.runWorkspaceId"></a>

```csharp
public double RunWorkspaceId { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#run_workspace_id DataDatabricksRegisteredModelVersions#run_workspace_id}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#schema_name DataDatabricksRegisteredModelVersions#schema_name}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#source DataDatabricksRegisteredModelVersions#source}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#status DataDatabricksRegisteredModelVersions#status}.

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.storageLocation"></a>

```csharp
public string StorageLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#storage_location DataDatabricksRegisteredModelVersions#storage_location}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#updated_at DataDatabricksRegisteredModelVersions#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#updated_by DataDatabricksRegisteredModelVersions#updated_by}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions.property.version"></a>

```csharp
public double Version { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#version DataDatabricksRegisteredModelVersions#version}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsAliases <a name="DataDatabricksRegisteredModelVersionsModelVersionsAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsAliases {
    string AliasName = null,
    string CatalogName = null,
    string Id = null,
    string ModelName = null,
    string SchemaName = null,
    double VersionNum = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.aliasName">AliasName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#alias_name DataDatabricksRegisteredModelVersions#alias_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#catalog_name DataDatabricksRegisteredModelVersions#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#id DataDatabricksRegisteredModelVersions#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.modelName">ModelName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#model_name DataDatabricksRegisteredModelVersions#model_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#schema_name DataDatabricksRegisteredModelVersions#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.versionNum">VersionNum</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#version_num DataDatabricksRegisteredModelVersions#version_num}. |

---

##### `AliasName`<sup>Optional</sup> <a name="AliasName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.aliasName"></a>

```csharp
public string AliasName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#alias_name DataDatabricksRegisteredModelVersions#alias_name}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#catalog_name DataDatabricksRegisteredModelVersions#catalog_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#id DataDatabricksRegisteredModelVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.modelName"></a>

```csharp
public string ModelName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#model_name DataDatabricksRegisteredModelVersions#model_name}.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#schema_name DataDatabricksRegisteredModelVersions#schema_name}.

---

##### `VersionNum`<sup>Optional</sup> <a name="VersionNum" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases.property.versionNum"></a>

```csharp
public double VersionNum { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#version_num DataDatabricksRegisteredModelVersions#version_num}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies {
    IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[] Dependencies = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies.property.dependencies">Dependencies</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#dependencies DataDatabricksRegisteredModelVersions#dependencies}. |

---

##### `Dependencies`<sup>Optional</sup> <a name="Dependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies.property.dependencies"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[] Dependencies { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#dependencies DataDatabricksRegisteredModelVersions#dependencies}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies {
    IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection[] Connection = null,
    IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential[] Credential = null,
    IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[] Function = null,
    IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[] Table = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#connection DataDatabricksRegisteredModelVersions#connection}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.credential">Credential</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#credential DataDatabricksRegisteredModelVersions#credential}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.function">Function</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#function DataDatabricksRegisteredModelVersions#function}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.table">Table</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#table DataDatabricksRegisteredModelVersions#table}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.connection"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection[] Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#connection DataDatabricksRegisteredModelVersions#connection}.

---

##### `Credential`<sup>Optional</sup> <a name="Credential" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.credential"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential[] Credential { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#credential DataDatabricksRegisteredModelVersions#credential}.

---

##### `Function`<sup>Optional</sup> <a name="Function" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.function"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[] Function { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#function DataDatabricksRegisteredModelVersions#function}.

---

##### `Table`<sup>Optional</sup> <a name="Table" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies.property.table"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[] Table { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#table DataDatabricksRegisteredModelVersions#table}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection {
    string ConnectionName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection.property.connectionName">ConnectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#connection_name DataDatabricksRegisteredModelVersions#connection_name}. |

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection.property.connectionName"></a>

```csharp
public string ConnectionName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#connection_name DataDatabricksRegisteredModelVersions#connection_name}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential {
    string CredentialName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential.property.credentialName">CredentialName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#credential_name DataDatabricksRegisteredModelVersions#credential_name}. |

---

##### `CredentialName`<sup>Optional</sup> <a name="CredentialName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential.property.credentialName"></a>

```csharp
public string CredentialName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#credential_name DataDatabricksRegisteredModelVersions#credential_name}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction {
    string FunctionFullName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction.property.functionFullName">FunctionFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#function_full_name DataDatabricksRegisteredModelVersions#function_full_name}. |

---

##### `FunctionFullName`<sup>Required</sup> <a name="FunctionFullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction.property.functionFullName"></a>

```csharp
public string FunctionFullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#function_full_name DataDatabricksRegisteredModelVersions#function_full_name}.

---

### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable {
    string TableFullName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable.property.tableFullName">TableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#table_full_name DataDatabricksRegisteredModelVersions#table_full_name}. |

---

##### `TableFullName`<sup>Required</sup> <a name="TableFullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable.property.tableFullName"></a>

```csharp
public string TableFullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/registered_model_versions#table_full_name DataDatabricksRegisteredModelVersions#table_full_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksRegisteredModelVersionsModelVersionsAliasesList <a name="DataDatabricksRegisteredModelVersionsModelVersionsAliasesList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsAliasesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.get"></a>

```csharp
private DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsAliases[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetAliasName">ResetAliasName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetVersionNum">ResetVersionNum</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAliasName` <a name="ResetAliasName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetAliasName"></a>

```csharp
private void ResetAliasName()
```

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetModelName"></a>

```csharp
private void ResetModelName()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

##### `ResetVersionNum` <a name="ResetVersionNum" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.resetVersionNum"></a>

```csharp
private void ResetVersionNum()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.aliasNameInput">AliasNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.versionNumInput">VersionNumInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.aliasName">AliasName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.versionNum">VersionNum</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AliasNameInput`<sup>Optional</sup> <a name="AliasNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.aliasNameInput"></a>

```csharp
public string AliasNameInput { get; }
```

- *Type:* string

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.modelNameInput"></a>

```csharp
public string ModelNameInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `VersionNumInput`<sup>Optional</sup> <a name="VersionNumInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.versionNumInput"></a>

```csharp
public double VersionNumInput { get; }
```

- *Type:* double

---

##### `AliasName`<sup>Required</sup> <a name="AliasName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.aliasName"></a>

```csharp
public string AliasName { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `VersionNum`<sup>Required</sup> <a name="VersionNum" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.versionNum"></a>

```csharp
public double VersionNum { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsAliases InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsList <a name="DataDatabricksRegisteredModelVersionsModelVersionsList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.get"></a>

```csharp
private DataDatabricksRegisteredModelVersionsModelVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersions[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.get"></a>

```csharp
private DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.resetConnectionName"></a>

```csharp
private void ResetConnectionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.connectionName">ConnectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.connectionNameInput"></a>

```csharp
public string ConnectionNameInput { get; }
```

- *Type:* string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.connectionName"></a>

```csharp
public string ConnectionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.get"></a>

```csharp
private DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.resetCredentialName">ResetCredentialName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCredentialName` <a name="ResetCredentialName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.resetCredentialName"></a>

```csharp
private void ResetCredentialName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.credentialNameInput">CredentialNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.credentialName">CredentialName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CredentialNameInput`<sup>Optional</sup> <a name="CredentialNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.credentialNameInput"></a>

```csharp
public string CredentialNameInput { get; }
```

- *Type:* string

---

##### `CredentialName`<sup>Required</sup> <a name="CredentialName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.credentialName"></a>

```csharp
public string CredentialName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.get"></a>

```csharp
private DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput">FunctionFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.functionFullName">FunctionFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FunctionFullNameInput`<sup>Optional</sup> <a name="FunctionFullNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.functionFullNameInput"></a>

```csharp
public string FunctionFullNameInput { get; }
```

- *Type:* string

---

##### `FunctionFullName`<sup>Required</sup> <a name="FunctionFullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.functionFullName"></a>

```csharp
public string FunctionFullName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.get"></a>

```csharp
private DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putConnection">PutConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putCredential">PutCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putFunction">PutFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putTable">PutTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetConnection">ResetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetCredential">ResetCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetFunction">ResetFunction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetTable">ResetTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConnection` <a name="PutConnection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putConnection"></a>

```csharp
private void PutConnection(IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putConnection.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]

---

##### `PutCredential` <a name="PutCredential" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putCredential"></a>

```csharp
private void PutCredential(IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putCredential.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]

---

##### `PutFunction` <a name="PutFunction" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putFunction"></a>

```csharp
private void PutFunction(IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putFunction.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]

---

##### `PutTable` <a name="PutTable" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putTable"></a>

```csharp
private void PutTable(IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.putTable.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]

---

##### `ResetConnection` <a name="ResetConnection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetConnection"></a>

```csharp
private void ResetConnection()
```

##### `ResetCredential` <a name="ResetCredential" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetCredential"></a>

```csharp
private void ResetCredential()
```

##### `ResetFunction` <a name="ResetFunction" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetFunction"></a>

```csharp
private void ResetFunction()
```

##### `ResetTable` <a name="ResetTable" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.resetTable"></a>

```csharp
private void ResetTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.connection">Connection</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.credential">Credential</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.function">Function</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.table">Table</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.connectionInput">ConnectionInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.credentialInput">CredentialInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.functionInput">FunctionInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.tableInput">TableInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Connection`<sup>Required</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.connection"></a>

```csharp
public DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList Connection { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnectionList</a>

---

##### `Credential`<sup>Required</sup> <a name="Credential" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.credential"></a>

```csharp
public DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList Credential { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredentialList</a>

---

##### `Function`<sup>Required</sup> <a name="Function" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.function"></a>

```csharp
public DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList Function { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunctionList</a>

---

##### `Table`<sup>Required</sup> <a name="Table" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.table"></a>

```csharp
public DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList Table { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList</a>

---

##### `ConnectionInput`<sup>Optional</sup> <a name="ConnectionInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.connectionInput"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection[] ConnectionInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesConnection</a>[]

---

##### `CredentialInput`<sup>Optional</sup> <a name="CredentialInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.credentialInput"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential[] CredentialInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesCredential</a>[]

---

##### `FunctionInput`<sup>Optional</sup> <a name="FunctionInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.functionInput"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction[] FunctionInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesFunction</a>[]

---

##### `TableInput`<sup>Optional</sup> <a name="TableInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.tableInput"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[] TableInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.get"></a>

```csharp
private DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.tableFullNameInput">TableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.tableFullName">TableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TableFullNameInput`<sup>Optional</sup> <a name="TableFullNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.tableFullNameInput"></a>

```csharp
public string TableFullNameInput { get; }
```

- *Type:* string

---

##### `TableFullName`<sup>Required</sup> <a name="TableFullName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.tableFullName"></a>

```csharp
public string TableFullName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTableOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesTable</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.get"></a>

```csharp
private DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]

---


### DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.putDependencies">PutDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resetDependencies">ResetDependencies</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDependencies` <a name="PutDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.putDependencies"></a>

```csharp
private void PutDependencies(IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.putDependencies.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]

---

##### `ResetDependencies` <a name="ResetDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.resetDependencies"></a>

```csharp
private void ResetDependencies()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.dependencies">Dependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.dependenciesInput">DependenciesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dependencies`<sup>Required</sup> <a name="Dependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.dependencies"></a>

```csharp
public DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList Dependencies { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependenciesList</a>

---

##### `DependenciesInput`<sup>Optional</sup> <a name="DependenciesInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.dependenciesInput"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies[] DependenciesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesDependencies</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>

---


### DataDatabricksRegisteredModelVersionsModelVersionsOutputReference <a name="DataDatabricksRegisteredModelVersionsModelVersionsOutputReference" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksRegisteredModelVersionsModelVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putAliases">PutAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putModelVersionDependencies">PutModelVersionDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetAliases">ResetAliases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetModelVersionDependencies">ResetModelVersionDependencies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetRunId">ResetRunId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetRunWorkspaceId">ResetRunWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetSchemaName">ResetSchemaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetSource">ResetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAliases` <a name="PutAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putAliases"></a>

```csharp
private void PutAliases(IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsAliases[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putAliases.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]

---

##### `PutModelVersionDependencies` <a name="PutModelVersionDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putModelVersionDependencies"></a>

```csharp
private void PutModelVersionDependencies(IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.putModelVersionDependencies.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]

---

##### `ResetAliases` <a name="ResetAliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetAliases"></a>

```csharp
private void ResetAliases()
```

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetModelName"></a>

```csharp
private void ResetModelName()
```

##### `ResetModelVersionDependencies` <a name="ResetModelVersionDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetModelVersionDependencies"></a>

```csharp
private void ResetModelVersionDependencies()
```

##### `ResetRunId` <a name="ResetRunId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetRunId"></a>

```csharp
private void ResetRunId()
```

##### `ResetRunWorkspaceId` <a name="ResetRunWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetRunWorkspaceId"></a>

```csharp
private void ResetRunWorkspaceId()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetSource"></a>

```csharp
private void ResetSource()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetStorageLocation"></a>

```csharp
private void ResetStorageLocation()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetUpdatedBy"></a>

```csharp
private void ResetUpdatedBy()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.resetVersion"></a>

```csharp
private void ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.aliases">Aliases</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList">DataDatabricksRegisteredModelVersionsModelVersionsAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelVersionDependencies">ModelVersionDependencies</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.aliasesInput">AliasesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelNameInput">ModelNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelVersionDependenciesInput">ModelVersionDependenciesInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runIdInput">RunIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runWorkspaceIdInput">RunWorkspaceIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.storageLocationInput">StorageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.versionInput">VersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelName">ModelName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runId">RunId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runWorkspaceId">RunWorkspaceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.storageLocation">StorageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Aliases`<sup>Required</sup> <a name="Aliases" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.aliases"></a>

```csharp
public DataDatabricksRegisteredModelVersionsModelVersionsAliasesList Aliases { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliasesList">DataDatabricksRegisteredModelVersionsModelVersionsAliasesList</a>

---

##### `ModelVersionDependencies`<sup>Required</sup> <a name="ModelVersionDependencies" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelVersionDependencies"></a>

```csharp
public DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList ModelVersionDependencies { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependenciesList</a>

---

##### `AliasesInput`<sup>Optional</sup> <a name="AliasesInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.aliasesInput"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsAliases[] AliasesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsAliases">DataDatabricksRegisteredModelVersionsModelVersionsAliases</a>[]

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdAtInput"></a>

```csharp
public double CreatedAtInput { get; }
```

- *Type:* double

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelNameInput"></a>

```csharp
public string ModelNameInput { get; }
```

- *Type:* string

---

##### `ModelVersionDependenciesInput`<sup>Optional</sup> <a name="ModelVersionDependenciesInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelVersionDependenciesInput"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies[] ModelVersionDependenciesInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies">DataDatabricksRegisteredModelVersionsModelVersionsModelVersionDependencies</a>[]

---

##### `RunIdInput`<sup>Optional</sup> <a name="RunIdInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runIdInput"></a>

```csharp
public string RunIdInput { get; }
```

- *Type:* string

---

##### `RunWorkspaceIdInput`<sup>Optional</sup> <a name="RunWorkspaceIdInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runWorkspaceIdInput"></a>

```csharp
public double RunWorkspaceIdInput { get; }
```

- *Type:* double

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.storageLocationInput"></a>

```csharp
public string StorageLocationInput { get; }
```

- *Type:* string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedAtInput"></a>

```csharp
public double UpdatedAtInput { get; }
```

- *Type:* double

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedByInput"></a>

```csharp
public string UpdatedByInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.versionInput"></a>

```csharp
public double VersionInput { get; }
```

- *Type:* double

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.modelName"></a>

```csharp
public string ModelName { get; }
```

- *Type:* string

---

##### `RunId`<sup>Required</sup> <a name="RunId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runId"></a>

```csharp
public string RunId { get; }
```

- *Type:* string

---

##### `RunWorkspaceId`<sup>Required</sup> <a name="RunWorkspaceId" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.runWorkspaceId"></a>

```csharp
public double RunWorkspaceId { get; }
```

- *Type:* double

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.storageLocation"></a>

```csharp
public string StorageLocation { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksRegisteredModelVersionsModelVersions InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksRegisteredModelVersions.DataDatabricksRegisteredModelVersionsModelVersions">DataDatabricksRegisteredModelVersionsModelVersions</a>

---



