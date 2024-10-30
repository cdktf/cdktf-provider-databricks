# `dataDatabricksVolumesPluginframework` Submodule <a name="`dataDatabricksVolumesPluginframework` Submodule" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksVolumesPluginframework <a name="DataDatabricksVolumesPluginframework" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/volumes_pluginframework databricks_volumes_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksVolumesPluginframework(Construct Scope, string Id, DataDatabricksVolumesPluginframeworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig">DataDatabricksVolumesPluginframeworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig">DataDatabricksVolumesPluginframeworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.resetIds">ResetIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetIds` <a name="ResetIds" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.resetIds"></a>

```csharp
private void ResetIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksVolumesPluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksVolumesPluginframework.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksVolumesPluginframework.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksVolumesPluginframework.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksVolumesPluginframework.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksVolumesPluginframework resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksVolumesPluginframework to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksVolumesPluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/volumes_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksVolumesPluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.catalogNameInput">CatalogNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.idsInput">IdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.schemaNameInput">SchemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.catalogName">CatalogName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.ids">Ids</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CatalogNameInput`<sup>Optional</sup> <a name="CatalogNameInput" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.catalogNameInput"></a>

```csharp
public string CatalogNameInput { get; }
```

- *Type:* string

---

##### `IdsInput`<sup>Optional</sup> <a name="IdsInput" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.idsInput"></a>

```csharp
public string[] IdsInput { get; }
```

- *Type:* string[]

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.schemaNameInput"></a>

```csharp
public string SchemaNameInput { get; }
```

- *Type:* string

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.catalogName"></a>

```csharp
public string CatalogName { get; }
```

- *Type:* string

---

##### `Ids`<sup>Required</sup> <a name="Ids" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.ids"></a>

```csharp
public string[] Ids { get; }
```

- *Type:* string[]

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframework.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksVolumesPluginframeworkConfig <a name="DataDatabricksVolumesPluginframeworkConfig" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksVolumesPluginframeworkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CatalogName,
    string SchemaName,
    string[] Ids = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.catalogName">CatalogName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/volumes_pluginframework#catalog_name DataDatabricksVolumesPluginframework#catalog_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.schemaName">SchemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/volumes_pluginframework#schema_name DataDatabricksVolumesPluginframework#schema_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.ids">Ids</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/volumes_pluginframework#ids DataDatabricksVolumesPluginframework#ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CatalogName`<sup>Required</sup> <a name="CatalogName" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.catalogName"></a>

```csharp
public string CatalogName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/volumes_pluginframework#catalog_name DataDatabricksVolumesPluginframework#catalog_name}.

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.schemaName"></a>

```csharp
public string SchemaName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/volumes_pluginframework#schema_name DataDatabricksVolumesPluginframework#schema_name}.

---

##### `Ids`<sup>Optional</sup> <a name="Ids" id="@cdktf/provider-databricks.dataDatabricksVolumesPluginframework.DataDatabricksVolumesPluginframeworkConfig.property.ids"></a>

```csharp
public string[] Ids { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/volumes_pluginframework#ids DataDatabricksVolumesPluginframework#ids}.

---



