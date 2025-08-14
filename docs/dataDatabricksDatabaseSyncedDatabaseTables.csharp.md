# `dataDatabricksDatabaseSyncedDatabaseTables` Submodule <a name="`dataDatabricksDatabaseSyncedDatabaseTables` Submodule" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseSyncedDatabaseTables <a name="DataDatabricksDatabaseSyncedDatabaseTables" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables databricks_database_synced_database_tables}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTables(Construct Scope, string Id, DataDatabricksDatabaseSyncedDatabaseTablesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig">DataDatabricksDatabaseSyncedDatabaseTablesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig">DataDatabricksDatabaseSyncedDatabaseTablesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDatabaseSyncedDatabaseTables resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseSyncedDatabaseTables.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseSyncedDatabaseTables.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseSyncedDatabaseTables.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseSyncedDatabaseTables.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksDatabaseSyncedDatabaseTables resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDatabaseSyncedDatabaseTables to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDatabaseSyncedDatabaseTables that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseSyncedDatabaseTables to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.syncedTables">SyncedTables</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList</a></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `SyncedTables`<sup>Required</sup> <a name="SyncedTables" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.syncedTables"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList SyncedTables { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTables.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseSyncedDatabaseTablesConfig <a name="DataDatabricksDatabaseSyncedDatabaseTablesConfig" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesConfig {
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
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables {
    string Name,
    string DatabaseInstanceName = null,
    string LogicalDatabaseName = null,
    DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec Spec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#name DataDatabricksDatabaseSyncedDatabaseTables#name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#database_instance_name DataDatabricksDatabaseSyncedDatabaseTables#database_instance_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables.property.logicalDatabaseName">LogicalDatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#logical_database_name DataDatabricksDatabaseSyncedDatabaseTables#logical_database_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#spec DataDatabricksDatabaseSyncedDatabaseTables#spec}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#name DataDatabricksDatabaseSyncedDatabaseTables#name}.

---

##### `DatabaseInstanceName`<sup>Optional</sup> <a name="DatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables.property.databaseInstanceName"></a>

```csharp
public string DatabaseInstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#database_instance_name DataDatabricksDatabaseSyncedDatabaseTables#database_instance_name}.

---

##### `LogicalDatabaseName`<sup>Optional</sup> <a name="LogicalDatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables.property.logicalDatabaseName"></a>

```csharp
public string LogicalDatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#logical_database_name DataDatabricksDatabaseSyncedDatabaseTables#logical_database_name}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables.property.spec"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#spec DataDatabricksDatabaseSyncedDatabaseTables#spec}.

---

### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus {
    DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus ContinuousUpdateStatus = null,
    DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus FailedStatus = null,
    DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus ProvisioningStatus = null,
    DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus TriggeredUpdateStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.continuousUpdateStatus">ContinuousUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#continuous_update_status DataDatabricksDatabaseSyncedDatabaseTables#continuous_update_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.failedStatus">FailedStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#failed_status DataDatabricksDatabaseSyncedDatabaseTables#failed_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.provisioningStatus">ProvisioningStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#provisioning_status DataDatabricksDatabaseSyncedDatabaseTables#provisioning_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.triggeredUpdateStatus">TriggeredUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#triggered_update_status DataDatabricksDatabaseSyncedDatabaseTables#triggered_update_status}. |

---

##### `ContinuousUpdateStatus`<sup>Optional</sup> <a name="ContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.continuousUpdateStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus ContinuousUpdateStatus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#continuous_update_status DataDatabricksDatabaseSyncedDatabaseTables#continuous_update_status}.

---

##### `FailedStatus`<sup>Optional</sup> <a name="FailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.failedStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus FailedStatus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#failed_status DataDatabricksDatabaseSyncedDatabaseTables#failed_status}.

---

##### `ProvisioningStatus`<sup>Optional</sup> <a name="ProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.provisioningStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus ProvisioningStatus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#provisioning_status DataDatabricksDatabaseSyncedDatabaseTables#provisioning_status}.

---

##### `TriggeredUpdateStatus`<sup>Optional</sup> <a name="TriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus.property.triggeredUpdateStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus TriggeredUpdateStatus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#triggered_update_status DataDatabricksDatabaseSyncedDatabaseTables#triggered_update_status}.

---

### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus {

};
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress {

};
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus {

};
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync {

};
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo {

};
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus {

};
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress {

};
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus {

};
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress {

};
```


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec {
    object CreateDatabaseObjectsIfMissing = null,
    string ExistingPipelineId = null,
    DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec NewPipelineSpec = null,
    string[] PrimaryKeyColumns = null,
    string SchedulingPolicy = null,
    string SourceTableFullName = null,
    string TimeseriesKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTables#create_database_objects_if_missing}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.existingPipelineId">ExistingPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTables#existing_pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTables#new_pipeline_spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTables#primary_key_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTables#scheduling_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.sourceTableFullName">SourceTableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTables#source_table_full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.timeseriesKey">TimeseriesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#timeseries_key DataDatabricksDatabaseSyncedDatabaseTables#timeseries_key}. |

---

##### `CreateDatabaseObjectsIfMissing`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.createDatabaseObjectsIfMissing"></a>

```csharp
public object CreateDatabaseObjectsIfMissing { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTables#create_database_objects_if_missing}.

---

##### `ExistingPipelineId`<sup>Optional</sup> <a name="ExistingPipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.existingPipelineId"></a>

```csharp
public string ExistingPipelineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTables#existing_pipeline_id}.

---

##### `NewPipelineSpec`<sup>Optional</sup> <a name="NewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.newPipelineSpec"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec NewPipelineSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTables#new_pipeline_spec}.

---

##### `PrimaryKeyColumns`<sup>Optional</sup> <a name="PrimaryKeyColumns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.primaryKeyColumns"></a>

```csharp
public string[] PrimaryKeyColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTables#primary_key_columns}.

---

##### `SchedulingPolicy`<sup>Optional</sup> <a name="SchedulingPolicy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.schedulingPolicy"></a>

```csharp
public string SchedulingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTables#scheduling_policy}.

---

##### `SourceTableFullName`<sup>Optional</sup> <a name="SourceTableFullName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.sourceTableFullName"></a>

```csharp
public string SourceTableFullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTables#source_table_full_name}.

---

##### `TimeseriesKey`<sup>Optional</sup> <a name="TimeseriesKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec.property.timeseriesKey"></a>

```csharp
public string TimeseriesKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#timeseries_key DataDatabricksDatabaseSyncedDatabaseTables#timeseries_key}.

---

### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec {
    string StorageCatalog = null,
    string StorageSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec.property.storageCatalog">StorageCatalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#storage_catalog DataDatabricksDatabaseSyncedDatabaseTables#storage_catalog}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec.property.storageSchema">StorageSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#storage_schema DataDatabricksDatabaseSyncedDatabaseTables#storage_schema}. |

---

##### `StorageCatalog`<sup>Optional</sup> <a name="StorageCatalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec.property.storageCatalog"></a>

```csharp
public string StorageCatalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#storage_catalog DataDatabricksDatabaseSyncedDatabaseTables#storage_catalog}.

---

##### `StorageSchema`<sup>Optional</sup> <a name="StorageSchema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec.property.storageSchema"></a>

```csharp
public string StorageSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/data-sources/database_synced_database_tables#storage_schema DataDatabricksDatabaseSyncedDatabaseTables#storage_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```csharp
public string ProvisioningPhase { get; }
```

- *Type:* string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress">InitialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialPipelineSyncProgress`<sup>Required</sup> <a name="InitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference InitialPipelineSyncProgress { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp">DeltaCommitTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">DeltaCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaCommitTimestamp`<sup>Required</sup> <a name="DeltaCommitTimestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp"></a>

```csharp
public string DeltaCommitTimestamp { get; }
```

- *Type:* string

---

##### `DeltaCommitVersion`<sup>Required</sup> <a name="DeltaCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```csharp
public double DeltaCommitVersion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo">DeltaTableSyncInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp">SyncEndTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp">SyncStartTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaTableSyncInfo`<sup>Required</sup> <a name="DeltaTableSyncInfo" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference DeltaTableSyncInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `SyncEndTimestamp`<sup>Required</sup> <a name="SyncEndTimestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp"></a>

```csharp
public string SyncEndTimestamp { get; }
```

- *Type:* string

---

##### `SyncStartTimestamp`<sup>Required</sup> <a name="SyncStartTimestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp"></a>

```csharp
public string SyncStartTimestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSync</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putContinuousUpdateStatus">PutContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putFailedStatus">PutFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putProvisioningStatus">PutProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus">PutTriggeredUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus">ResetContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetFailedStatus">ResetFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetProvisioningStatus">ResetProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus">ResetTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContinuousUpdateStatus` <a name="PutContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putContinuousUpdateStatus"></a>

```csharp
private void PutContinuousUpdateStatus(DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putContinuousUpdateStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatus</a>

---

##### `PutFailedStatus` <a name="PutFailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putFailedStatus"></a>

```csharp
private void PutFailedStatus(DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putFailedStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatus</a>

---

##### `PutProvisioningStatus` <a name="PutProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putProvisioningStatus"></a>

```csharp
private void PutProvisioningStatus(DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putProvisioningStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatus</a>

---

##### `PutTriggeredUpdateStatus` <a name="PutTriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus"></a>

```csharp
private void PutTriggeredUpdateStatus(DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatus</a>

---

##### `ResetContinuousUpdateStatus` <a name="ResetContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus"></a>

```csharp
private void ResetContinuousUpdateStatus()
```

##### `ResetFailedStatus` <a name="ResetFailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetFailedStatus"></a>

```csharp
private void ResetFailedStatus()
```

##### `ResetProvisioningStatus` <a name="ResetProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetProvisioningStatus"></a>

```csharp
private void ResetProvisioningStatus()
```

##### `ResetTriggeredUpdateStatus` <a name="ResetTriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus"></a>

```csharp
private void ResetTriggeredUpdateStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.continuousUpdateStatus">ContinuousUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.detailedState">DetailedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.failedStatus">FailedStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.lastSync">LastSync</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.provisioningStatus">ProvisioningStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus">TriggeredUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput">ContinuousUpdateStatusInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.failedStatusInput">FailedStatusInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.provisioningStatusInput">ProvisioningStatusInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput">TriggeredUpdateStatusInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContinuousUpdateStatus`<sup>Required</sup> <a name="ContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.continuousUpdateStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference ContinuousUpdateStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusContinuousUpdateStatusOutputReference</a>

---

##### `DetailedState`<sup>Required</sup> <a name="DetailedState" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.detailedState"></a>

```csharp
public string DetailedState { get; }
```

- *Type:* string

---

##### `FailedStatus`<sup>Required</sup> <a name="FailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.failedStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference FailedStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusFailedStatusOutputReference</a>

---

##### `LastSync`<sup>Required</sup> <a name="LastSync" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.lastSync"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference LastSync { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusLastSyncOutputReference</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `ProvisioningStatus`<sup>Required</sup> <a name="ProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.provisioningStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference ProvisioningStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference</a>

---

##### `TriggeredUpdateStatus`<sup>Required</sup> <a name="TriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference TriggeredUpdateStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a>

---

##### `ContinuousUpdateStatusInput`<sup>Optional</sup> <a name="ContinuousUpdateStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput"></a>

```csharp
public object ContinuousUpdateStatusInput { get; }
```

- *Type:* object

---

##### `FailedStatusInput`<sup>Optional</sup> <a name="FailedStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.failedStatusInput"></a>

```csharp
public object FailedStatusInput { get; }
```

- *Type:* object

---

##### `ProvisioningStatusInput`<sup>Optional</sup> <a name="ProvisioningStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.provisioningStatusInput"></a>

```csharp
public object ProvisioningStatusInput { get; }
```

- *Type:* object

---

##### `TriggeredUpdateStatusInput`<sup>Optional</sup> <a name="TriggeredUpdateStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput"></a>

```csharp
public object TriggeredUpdateStatusInput { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatus</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```csharp
public string ProvisioningPhase { get; }
```

- *Type:* string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress">InitialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialPipelineSyncProgress`<sup>Required</sup> <a name="InitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference InitialPipelineSyncProgress { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress">TriggeredUpdateProgress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `TriggeredUpdateProgress`<sup>Required</sup> <a name="TriggeredUpdateProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference TriggeredUpdateProgress { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase"></a>

```csharp
public string ProvisioningPhase { get; }
```

- *Type:* string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.get"></a>

```csharp
private DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.resetDatabaseInstanceName">ResetDatabaseInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.resetLogicalDatabaseName">ResetLogicalDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.putSpec"></a>

```csharp
private void PutSpec(DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpec</a>

---

##### `ResetDatabaseInstanceName` <a name="ResetDatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.resetDatabaseInstanceName"></a>

```csharp
private void ResetDatabaseInstanceName()
```

##### `ResetLogicalDatabaseName` <a name="ResetLogicalDatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.resetLogicalDatabaseName"></a>

```csharp
private void ResetLogicalDatabaseName()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.resetSpec"></a>

```csharp
private void ResetSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.dataSynchronizationStatus">DataSynchronizationStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.effectiveDatabaseInstanceName">EffectiveDatabaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.effectiveLogicalDatabaseName">EffectiveLogicalDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.unityCatalogProvisioningState">UnityCatalogProvisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.databaseInstanceNameInput">DatabaseInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.logicalDatabaseNameInput">LogicalDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.specInput">SpecInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.logicalDatabaseName">LogicalDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DataSynchronizationStatus`<sup>Required</sup> <a name="DataSynchronizationStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.dataSynchronizationStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference DataSynchronizationStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesDataSynchronizationStatusOutputReference</a>

---

##### `EffectiveDatabaseInstanceName`<sup>Required</sup> <a name="EffectiveDatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.effectiveDatabaseInstanceName"></a>

```csharp
public string EffectiveDatabaseInstanceName { get; }
```

- *Type:* string

---

##### `EffectiveLogicalDatabaseName`<sup>Required</sup> <a name="EffectiveLogicalDatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.effectiveLogicalDatabaseName"></a>

```csharp
public string EffectiveLogicalDatabaseName { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.spec"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference</a>

---

##### `UnityCatalogProvisioningState`<sup>Required</sup> <a name="UnityCatalogProvisioningState" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.unityCatalogProvisioningState"></a>

```csharp
public string UnityCatalogProvisioningState { get; }
```

- *Type:* string

---

##### `DatabaseInstanceNameInput`<sup>Optional</sup> <a name="DatabaseInstanceNameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.databaseInstanceNameInput"></a>

```csharp
public string DatabaseInstanceNameInput { get; }
```

- *Type:* string

---

##### `LogicalDatabaseNameInput`<sup>Optional</sup> <a name="LogicalDatabaseNameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.logicalDatabaseNameInput"></a>

```csharp
public string LogicalDatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.specInput"></a>

```csharp
public object SpecInput { get; }
```

- *Type:* object

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.databaseInstanceName"></a>

```csharp
public string DatabaseInstanceName { get; }
```

- *Type:* string

---

##### `LogicalDatabaseName`<sup>Required</sup> <a name="LogicalDatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.logicalDatabaseName"></a>

```csharp
public string LogicalDatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTables</a>

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resetStorageCatalog">ResetStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resetStorageSchema">ResetStorageSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageCatalog` <a name="ResetStorageCatalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```csharp
private void ResetStorageCatalog()
```

##### `ResetStorageSchema` <a name="ResetStorageSchema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```csharp
private void ResetStorageSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageCatalogInput">StorageCatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageSchemaInput">StorageSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageCatalog">StorageCatalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageSchema">StorageSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageCatalogInput`<sup>Optional</sup> <a name="StorageCatalogInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```csharp
public string StorageCatalogInput { get; }
```

- *Type:* string

---

##### `StorageSchemaInput`<sup>Optional</sup> <a name="StorageSchemaInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```csharp
public string StorageSchemaInput { get; }
```

- *Type:* string

---

##### `StorageCatalog`<sup>Required</sup> <a name="StorageCatalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```csharp
public string StorageCatalog { get; }
```

- *Type:* string

---

##### `StorageSchema`<sup>Required</sup> <a name="StorageSchema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```csharp
public string StorageSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.putNewPipelineSpec">PutNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetCreateDatabaseObjectsIfMissing">ResetCreateDatabaseObjectsIfMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetExistingPipelineId">ResetExistingPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetNewPipelineSpec">ResetNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetPrimaryKeyColumns">ResetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetSchedulingPolicy">ResetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetSourceTableFullName">ResetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetTimeseriesKey">ResetTimeseriesKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNewPipelineSpec` <a name="PutNewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.putNewPipelineSpec"></a>

```csharp
private void PutNewPipelineSpec(DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.putNewPipelineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpec</a>

---

##### `ResetCreateDatabaseObjectsIfMissing` <a name="ResetCreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```csharp
private void ResetCreateDatabaseObjectsIfMissing()
```

##### `ResetExistingPipelineId` <a name="ResetExistingPipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetExistingPipelineId"></a>

```csharp
private void ResetExistingPipelineId()
```

##### `ResetNewPipelineSpec` <a name="ResetNewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetNewPipelineSpec"></a>

```csharp
private void ResetNewPipelineSpec()
```

##### `ResetPrimaryKeyColumns` <a name="ResetPrimaryKeyColumns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetPrimaryKeyColumns"></a>

```csharp
private void ResetPrimaryKeyColumns()
```

##### `ResetSchedulingPolicy` <a name="ResetSchedulingPolicy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetSchedulingPolicy"></a>

```csharp
private void ResetSchedulingPolicy()
```

##### `ResetSourceTableFullName` <a name="ResetSourceTableFullName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetSourceTableFullName"></a>

```csharp
private void ResetSourceTableFullName()
```

##### `ResetTimeseriesKey` <a name="ResetTimeseriesKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.resetTimeseriesKey"></a>

```csharp
private void ResetTimeseriesKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.createDatabaseObjectsIfMissingInput">CreateDatabaseObjectsIfMissingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.existingPipelineIdInput">ExistingPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.newPipelineSpecInput">NewPipelineSpecInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.primaryKeyColumnsInput">PrimaryKeyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.schedulingPolicyInput">SchedulingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.sourceTableFullNameInput">SourceTableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.timeseriesKeyInput">TimeseriesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.existingPipelineId">ExistingPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.sourceTableFullName">SourceTableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.timeseriesKey">TimeseriesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NewPipelineSpec`<sup>Required</sup> <a name="NewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.newPipelineSpec"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference NewPipelineSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecNewPipelineSpecOutputReference</a>

---

##### `CreateDatabaseObjectsIfMissingInput`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissingInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```csharp
public object CreateDatabaseObjectsIfMissingInput { get; }
```

- *Type:* object

---

##### `ExistingPipelineIdInput`<sup>Optional</sup> <a name="ExistingPipelineIdInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.existingPipelineIdInput"></a>

```csharp
public string ExistingPipelineIdInput { get; }
```

- *Type:* string

---

##### `NewPipelineSpecInput`<sup>Optional</sup> <a name="NewPipelineSpecInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.newPipelineSpecInput"></a>

```csharp
public object NewPipelineSpecInput { get; }
```

- *Type:* object

---

##### `PrimaryKeyColumnsInput`<sup>Optional</sup> <a name="PrimaryKeyColumnsInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.primaryKeyColumnsInput"></a>

```csharp
public string[] PrimaryKeyColumnsInput { get; }
```

- *Type:* string[]

---

##### `SchedulingPolicyInput`<sup>Optional</sup> <a name="SchedulingPolicyInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.schedulingPolicyInput"></a>

```csharp
public string SchedulingPolicyInput { get; }
```

- *Type:* string

---

##### `SourceTableFullNameInput`<sup>Optional</sup> <a name="SourceTableFullNameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.sourceTableFullNameInput"></a>

```csharp
public string SourceTableFullNameInput { get; }
```

- *Type:* string

---

##### `TimeseriesKeyInput`<sup>Optional</sup> <a name="TimeseriesKeyInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.timeseriesKeyInput"></a>

```csharp
public string TimeseriesKeyInput { get; }
```

- *Type:* string

---

##### `CreateDatabaseObjectsIfMissing`<sup>Required</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```csharp
public object CreateDatabaseObjectsIfMissing { get; }
```

- *Type:* object

---

##### `ExistingPipelineId`<sup>Required</sup> <a name="ExistingPipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.existingPipelineId"></a>

```csharp
public string ExistingPipelineId { get; }
```

- *Type:* string

---

##### `PrimaryKeyColumns`<sup>Required</sup> <a name="PrimaryKeyColumns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.primaryKeyColumns"></a>

```csharp
public string[] PrimaryKeyColumns { get; }
```

- *Type:* string[]

---

##### `SchedulingPolicy`<sup>Required</sup> <a name="SchedulingPolicy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.schedulingPolicy"></a>

```csharp
public string SchedulingPolicy { get; }
```

- *Type:* string

---

##### `SourceTableFullName`<sup>Required</sup> <a name="SourceTableFullName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.sourceTableFullName"></a>

```csharp
public string SourceTableFullName { get; }
```

- *Type:* string

---

##### `TimeseriesKey`<sup>Required</sup> <a name="TimeseriesKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.timeseriesKey"></a>

```csharp
public string TimeseriesKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTables.DataDatabricksDatabaseSyncedDatabaseTablesSyncedTablesSpecOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



