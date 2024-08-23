# `dataDatabricksSchema` Submodule <a name="`dataDatabricksSchema` Submodule" id="@cdktf/provider-databricks.dataDatabricksSchema"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksSchema <a name="DataDatabricksSchema" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema databricks_schema}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSchema(Construct Scope, string Id, DataDatabricksSchemaConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig">DataDatabricksSchemaConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig">DataDatabricksSchemaConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo">PutSchemaInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetSchemaInfo">ResetSchemaInfo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutSchemaInfo` <a name="PutSchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo"></a>

```csharp
private void PutSchemaInfo(DataDatabricksSchemaSchemaInfo Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.putSchemaInfo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSchemaInfo` <a name="ResetSchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.resetSchemaInfo"></a>

```csharp
private void ResetSchemaInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksSchema resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksSchema.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksSchema.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksSchema.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksSchema.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksSchema resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksSchema to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksSchema that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksSchema to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfo">SchemaInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference">DataDatabricksSchemaSchemaInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfoInput">SchemaInfoInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `SchemaInfo`<sup>Required</sup> <a name="SchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfo"></a>

```csharp
public DataDatabricksSchemaSchemaInfoOutputReference SchemaInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference">DataDatabricksSchemaSchemaInfoOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchemaInfoInput`<sup>Optional</sup> <a name="SchemaInfoInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.schemaInfoInput"></a>

```csharp
public DataDatabricksSchemaSchemaInfo SchemaInfoInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchema.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksSchemaConfig <a name="DataDatabricksSchemaConfig" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSchemaConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    DataDatabricksSchemaSchemaInfo SchemaInfo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#name DataDatabricksSchema#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#id DataDatabricksSchema#id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.schemaInfo">SchemaInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a></code> | schema_info block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#name DataDatabricksSchema#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#id DataDatabricksSchema#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SchemaInfo`<sup>Optional</sup> <a name="SchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaConfig.property.schemaInfo"></a>

```csharp
public DataDatabricksSchemaSchemaInfo SchemaInfo { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

schema_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#schema_info DataDatabricksSchema#schema_info}

---

### DataDatabricksSchemaSchemaInfo <a name="DataDatabricksSchemaSchemaInfo" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSchemaSchemaInfo {
    object BrowseOnly = null,
    string CatalogName = null,
    string CatalogType = null,
    string Comment = null,
    double CreatedAt = null,
    string CreatedBy = null,
    DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag EffectivePredictiveOptimizationFlag = null,
    string EnablePredictiveOptimization = null,
    string FullName = null,
    string MetastoreId = null,
    string Name = null,
    string Owner = null,
    System.Collections.Generic.IDictionary<string, string> Properties = null,
    string SchemaId = null,
    string StorageLocation = null,
    string StorageRoot = null,
    double UpdatedAt = null,
    string UpdatedBy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.browseOnly">BrowseOnly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#browse_only DataDatabricksSchema#browse_only}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#catalog_name DataDatabricksSchema#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogType">CatalogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#catalog_type DataDatabricksSchema#catalog_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.comment">Comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#comment DataDatabricksSchema#comment}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdAt">CreatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#created_at DataDatabricksSchema#created_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdBy">CreatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#created_by DataDatabricksSchema#created_by}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.effectivePredictiveOptimizationFlag">EffectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a></code> | effective_predictive_optimization_flag block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.enablePredictiveOptimization">EnablePredictiveOptimization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#enable_predictive_optimization DataDatabricksSchema#enable_predictive_optimization}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.fullName">FullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#full_name DataDatabricksSchema#full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.metastoreId">MetastoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#metastore_id DataDatabricksSchema#metastore_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#name DataDatabricksSchema#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.owner">Owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#owner DataDatabricksSchema#owner}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#properties DataDatabricksSchema#properties}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.schemaId">SchemaId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#schema_id DataDatabricksSchema#schema_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageLocation">StorageLocation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#storage_location DataDatabricksSchema#storage_location}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageRoot">StorageRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#storage_root DataDatabricksSchema#storage_root}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#updated_at DataDatabricksSchema#updated_at}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#updated_by DataDatabricksSchema#updated_by}. |

---

##### `BrowseOnly`<sup>Optional</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.browseOnly"></a>

```csharp
public object BrowseOnly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#browse_only DataDatabricksSchema#browse_only}.

---

##### `CatalogName`<sup>Optional</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#catalog_name DataDatabricksSchema#catalog_name}.

---

##### `CatalogType`<sup>Optional</sup> <a name="CatalogType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.catalogType"></a>

```csharp
public string CatalogType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#catalog_type DataDatabricksSchema#catalog_type}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.comment"></a>

```csharp
public string Comment { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#comment DataDatabricksSchema#comment}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdAt"></a>

```csharp
public double CreatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#created_at DataDatabricksSchema#created_at}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.createdBy"></a>

```csharp
public string CreatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#created_by DataDatabricksSchema#created_by}.

---

##### `EffectivePredictiveOptimizationFlag`<sup>Optional</sup> <a name="EffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.effectivePredictiveOptimizationFlag"></a>

```csharp
public DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag EffectivePredictiveOptimizationFlag { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

effective_predictive_optimization_flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#effective_predictive_optimization_flag DataDatabricksSchema#effective_predictive_optimization_flag}

---

##### `EnablePredictiveOptimization`<sup>Optional</sup> <a name="EnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.enablePredictiveOptimization"></a>

```csharp
public string EnablePredictiveOptimization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#enable_predictive_optimization DataDatabricksSchema#enable_predictive_optimization}.

---

##### `FullName`<sup>Optional</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.fullName"></a>

```csharp
public string FullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#full_name DataDatabricksSchema#full_name}.

---

##### `MetastoreId`<sup>Optional</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.metastoreId"></a>

```csharp
public string MetastoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#metastore_id DataDatabricksSchema#metastore_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#name DataDatabricksSchema#name}.

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.owner"></a>

```csharp
public string Owner { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#owner DataDatabricksSchema#owner}.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#properties DataDatabricksSchema#properties}.

---

##### `SchemaId`<sup>Optional</sup> <a name="SchemaId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.schemaId"></a>

```csharp
public string SchemaId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#schema_id DataDatabricksSchema#schema_id}.

---

##### `StorageLocation`<sup>Optional</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageLocation"></a>

```csharp
public string StorageLocation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#storage_location DataDatabricksSchema#storage_location}.

---

##### `StorageRoot`<sup>Optional</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.storageRoot"></a>

```csharp
public string StorageRoot { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#storage_root DataDatabricksSchema#storage_root}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#updated_at DataDatabricksSchema#updated_at}.

---

##### `UpdatedBy`<sup>Optional</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#updated_by DataDatabricksSchema#updated_by}.

---

### DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag <a name="DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag {
    string Value,
    string InheritedFromName = null,
    string InheritedFromType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#value DataDatabricksSchema#value}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName">InheritedFromName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#inherited_from_name DataDatabricksSchema#inherited_from_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType">InheritedFromType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#inherited_from_type DataDatabricksSchema#inherited_from_type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#value DataDatabricksSchema#value}.

---

##### `InheritedFromName`<sup>Optional</sup> <a name="InheritedFromName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromName"></a>

```csharp
public string InheritedFromName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#inherited_from_name DataDatabricksSchema#inherited_from_name}.

---

##### `InheritedFromType`<sup>Optional</sup> <a name="InheritedFromType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag.property.inheritedFromType"></a>

```csharp
public string InheritedFromType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/data-sources/schema#inherited_from_type DataDatabricksSchema#inherited_from_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference <a name="DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName">ResetInheritedFromName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType">ResetInheritedFromType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInheritedFromName` <a name="ResetInheritedFromName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromName"></a>

```csharp
private void ResetInheritedFromName()
```

##### `ResetInheritedFromType` <a name="ResetInheritedFromType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.resetInheritedFromType"></a>

```csharp
private void ResetInheritedFromType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput">InheritedFromNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput">InheritedFromTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName">InheritedFromName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType">InheritedFromType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InheritedFromNameInput`<sup>Optional</sup> <a name="InheritedFromNameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromNameInput"></a>

```csharp
public string InheritedFromNameInput { get; }
```

- *Type:* string

---

##### `InheritedFromTypeInput`<sup>Optional</sup> <a name="InheritedFromTypeInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromTypeInput"></a>

```csharp
public string InheritedFromTypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `InheritedFromName`<sup>Required</sup> <a name="InheritedFromName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromName"></a>

```csharp
public string InheritedFromName { get; }
```

- *Type:* string

---

##### `InheritedFromType`<sup>Required</sup> <a name="InheritedFromType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.inheritedFromType"></a>

```csharp
public string InheritedFromType { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

---


### DataDatabricksSchemaSchemaInfoOutputReference <a name="DataDatabricksSchemaSchemaInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksSchemaSchemaInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag">PutEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetBrowseOnly">ResetBrowseOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogName">ResetCatalogName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogType">ResetCatalogType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEffectivePredictiveOptimizationFlag">ResetEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEnablePredictiveOptimization">ResetEnablePredictiveOptimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetFullName">ResetFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetMetastoreId">ResetMetastoreId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetSchemaId">ResetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageLocation">ResetStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageRoot">ResetStorageRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedBy">ResetUpdatedBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEffectivePredictiveOptimizationFlag` <a name="PutEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag"></a>

```csharp
private void PutEffectivePredictiveOptimizationFlag(DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.putEffectivePredictiveOptimizationFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

---

##### `ResetBrowseOnly` <a name="ResetBrowseOnly" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetBrowseOnly"></a>

```csharp
private void ResetBrowseOnly()
```

##### `ResetCatalogName` <a name="ResetCatalogName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogName"></a>

```csharp
private void ResetCatalogName()
```

##### `ResetCatalogType` <a name="ResetCatalogType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCatalogType"></a>

```csharp
private void ResetCatalogType()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetComment"></a>

```csharp
private void ResetComment()
```

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetCreatedBy"></a>

```csharp
private void ResetCreatedBy()
```

##### `ResetEffectivePredictiveOptimizationFlag` <a name="ResetEffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEffectivePredictiveOptimizationFlag"></a>

```csharp
private void ResetEffectivePredictiveOptimizationFlag()
```

##### `ResetEnablePredictiveOptimization` <a name="ResetEnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetEnablePredictiveOptimization"></a>

```csharp
private void ResetEnablePredictiveOptimization()
```

##### `ResetFullName` <a name="ResetFullName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetFullName"></a>

```csharp
private void ResetFullName()
```

##### `ResetMetastoreId` <a name="ResetMetastoreId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetMetastoreId"></a>

```csharp
private void ResetMetastoreId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOwner` <a name="ResetOwner" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetOwner"></a>

```csharp
private void ResetOwner()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetProperties"></a>

```csharp
private void ResetProperties()
```

##### `ResetSchemaId` <a name="ResetSchemaId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetSchemaId"></a>

```csharp
private void ResetSchemaId()
```

##### `ResetStorageLocation` <a name="ResetStorageLocation" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageLocation"></a>

```csharp
private void ResetStorageLocation()
```

##### `ResetStorageRoot` <a name="ResetStorageRoot" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetStorageRoot"></a>

```csharp
private void ResetStorageRoot()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

##### `ResetUpdatedBy` <a name="ResetUpdatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.resetUpdatedBy"></a>

```csharp
private void ResetUpdatedBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlag">EffectivePredictiveOptimizationFlag</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnlyInput">BrowseOnlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogTypeInput">CatalogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.commentInput">CommentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAtInput">CreatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdByInput">CreatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlagInput">EffectivePredictiveOptimizationFlagInput</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimizationInput">EnablePredictiveOptimizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullNameInput">FullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreIdInput">MetastoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.ownerInput">OwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.propertiesInput">PropertiesInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaIdInput">SchemaIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocationInput">StorageLocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRootInput">StorageRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAtInput">UpdatedAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedByInput">UpdatedByInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnly">BrowseOnly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogType">CatalogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.comment">Comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimization">EnablePredictiveOptimization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullName">FullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreId">MetastoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.properties">Properties</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaId">SchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocation">StorageLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRoot">StorageRoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EffectivePredictiveOptimizationFlag`<sup>Required</sup> <a name="EffectivePredictiveOptimizationFlag" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlag"></a>

```csharp
public DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference EffectivePredictiveOptimizationFlag { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlagOutputReference</a>

---

##### `BrowseOnlyInput`<sup>Optional</sup> <a name="BrowseOnlyInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnlyInput"></a>

```csharp
public object BrowseOnlyInput { get; }
```

- *Type:* object

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `CatalogTypeInput`<sup>Optional</sup> <a name="CatalogTypeInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogTypeInput"></a>

```csharp
public string CatalogTypeInput { get; }
```

- *Type:* string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.commentInput"></a>

```csharp
public string CommentInput { get; }
```

- *Type:* string

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAtInput"></a>

```csharp
public double CreatedAtInput { get; }
```

- *Type:* double

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdByInput"></a>

```csharp
public string CreatedByInput { get; }
```

- *Type:* string

---

##### `EffectivePredictiveOptimizationFlagInput`<sup>Optional</sup> <a name="EffectivePredictiveOptimizationFlagInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.effectivePredictiveOptimizationFlagInput"></a>

```csharp
public DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag EffectivePredictiveOptimizationFlagInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag">DataDatabricksSchemaSchemaInfoEffectivePredictiveOptimizationFlag</a>

---

##### `EnablePredictiveOptimizationInput`<sup>Optional</sup> <a name="EnablePredictiveOptimizationInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimizationInput"></a>

```csharp
public string EnablePredictiveOptimizationInput { get; }
```

- *Type:* string

---

##### `FullNameInput`<sup>Optional</sup> <a name="FullNameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullNameInput"></a>

```csharp
public string FullNameInput { get; }
```

- *Type:* string

---

##### `MetastoreIdInput`<sup>Optional</sup> <a name="MetastoreIdInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreIdInput"></a>

```csharp
public string MetastoreIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.ownerInput"></a>

```csharp
public string OwnerInput { get; }
```

- *Type:* string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.propertiesInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> PropertiesInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SchemaIdInput`<sup>Optional</sup> <a name="SchemaIdInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaIdInput"></a>

```csharp
public string SchemaIdInput { get; }
```

- *Type:* string

---

##### `StorageLocationInput`<sup>Optional</sup> <a name="StorageLocationInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocationInput"></a>

```csharp
public string StorageLocationInput { get; }
```

- *Type:* string

---

##### `StorageRootInput`<sup>Optional</sup> <a name="StorageRootInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRootInput"></a>

```csharp
public string StorageRootInput { get; }
```

- *Type:* string

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAtInput"></a>

```csharp
public double UpdatedAtInput { get; }
```

- *Type:* double

---

##### `UpdatedByInput`<sup>Optional</sup> <a name="UpdatedByInput" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedByInput"></a>

```csharp
public string UpdatedByInput { get; }
```

- *Type:* string

---

##### `BrowseOnly`<sup>Required</sup> <a name="BrowseOnly" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.browseOnly"></a>

```csharp
public object BrowseOnly { get; }
```

- *Type:* object

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `CatalogType`<sup>Required</sup> <a name="CatalogType" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.catalogType"></a>

```csharp
public string CatalogType { get; }
```

- *Type:* string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.comment"></a>

```csharp
public string Comment { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `EnablePredictiveOptimization`<sup>Required</sup> <a name="EnablePredictiveOptimization" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.enablePredictiveOptimization"></a>

```csharp
public string EnablePredictiveOptimization { get; }
```

- *Type:* string

---

##### `FullName`<sup>Required</sup> <a name="FullName" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.fullName"></a>

```csharp
public string FullName { get; }
```

- *Type:* string

---

##### `MetastoreId`<sup>Required</sup> <a name="MetastoreId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.metastoreId"></a>

```csharp
public string MetastoreId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.properties"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Properties { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SchemaId`<sup>Required</sup> <a name="SchemaId" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.schemaId"></a>

```csharp
public string SchemaId { get; }
```

- *Type:* string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageLocation"></a>

```csharp
public string StorageLocation { get; }
```

- *Type:* string

---

##### `StorageRoot`<sup>Required</sup> <a name="StorageRoot" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.storageRoot"></a>

```csharp
public string StorageRoot { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedAt"></a>

```csharp
public double UpdatedAt { get; }
```

- *Type:* double

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksSchemaSchemaInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksSchema.DataDatabricksSchemaSchemaInfo">DataDatabricksSchemaSchemaInfo</a>

---



