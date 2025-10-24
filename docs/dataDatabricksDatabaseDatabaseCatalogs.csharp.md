# `dataDatabricksDatabaseDatabaseCatalogs` Submodule <a name="`dataDatabricksDatabaseDatabaseCatalogs` Submodule" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseDatabaseCatalogs <a name="DataDatabricksDatabaseDatabaseCatalogs" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_database_catalogs databricks_database_database_catalogs}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseDatabaseCatalogs(Construct Scope, string Id, DataDatabricksDatabaseDatabaseCatalogsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig">DataDatabricksDatabaseDatabaseCatalogsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig">DataDatabricksDatabaseDatabaseCatalogsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.resetPageSize">ResetPageSize</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetPageSize` <a name="ResetPageSize" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.resetPageSize"></a>

```csharp
private void ResetPageSize()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDatabaseDatabaseCatalogs resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseDatabaseCatalogs.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseDatabaseCatalogs.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseDatabaseCatalogs.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseDatabaseCatalogs.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksDatabaseDatabaseCatalogs resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDatabaseDatabaseCatalogs to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDatabaseDatabaseCatalogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_database_catalogs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseDatabaseCatalogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.databaseCatalogs">DatabaseCatalogs</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.pageSizeInput">PageSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.pageSize">PageSize</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DatabaseCatalogs`<sup>Required</sup> <a name="DatabaseCatalogs" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.databaseCatalogs"></a>

```csharp
public DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList DatabaseCatalogs { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList</a>

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `PageSizeInput`<sup>Optional</sup> <a name="PageSizeInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.pageSizeInput"></a>

```csharp
public double PageSizeInput { get; }
```

- *Type:* double

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `PageSize`<sup>Required</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.pageSize"></a>

```csharp
public double PageSize { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogs.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseDatabaseCatalogsConfig <a name="DataDatabricksDatabaseDatabaseCatalogsConfig" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseDatabaseCatalogsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string InstanceName,
    double PageSize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.instanceName">InstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_database_catalogs#instance_name DataDatabricksDatabaseDatabaseCatalogs#instance_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.pageSize">PageSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_database_catalogs#page_size DataDatabricksDatabaseDatabaseCatalogs#page_size}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_database_catalogs#instance_name DataDatabricksDatabaseDatabaseCatalogs#instance_name}.

---

##### `PageSize`<sup>Optional</sup> <a name="PageSize" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsConfig.property.pageSize"></a>

```csharp
public double PageSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_database_catalogs#page_size DataDatabricksDatabaseDatabaseCatalogs#page_size}.

---

### DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs <a name="DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_database_catalogs#name DataDatabricksDatabaseDatabaseCatalogs#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/data-sources/database_database_catalogs#name DataDatabricksDatabaseDatabaseCatalogs#name}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList <a name="DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.get"></a>

```csharp
private DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsList.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs</a>[]

---


### DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference <a name="DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.createDatabaseIfNotExists">CreateDatabaseIfNotExists</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateDatabaseIfNotExists`<sup>Required</sup> <a name="CreateDatabaseIfNotExists" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.createDatabaseIfNotExists"></a>

```csharp
public IResolvable CreateDatabaseIfNotExists { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseInstanceName"></a>

```csharp
public string DatabaseInstanceName { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogsOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseDatabaseCatalogs.DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs">DataDatabricksDatabaseDatabaseCatalogsDatabaseCatalogs</a>

---



