# `dataDatabricksDatabaseSyncedDatabaseTable` Submodule <a name="`dataDatabricksDatabaseSyncedDatabaseTable` Submodule" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksDatabaseSyncedDatabaseTable <a name="DataDatabricksDatabaseSyncedDatabaseTable" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table databricks_database_synced_database_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTable(Construct Scope, string Id, DataDatabricksDatabaseSyncedDatabaseTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig">DataDatabricksDatabaseSyncedDatabaseTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig">DataDatabricksDatabaseSyncedDatabaseTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksDatabaseSyncedDatabaseTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseSyncedDatabaseTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseSyncedDatabaseTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseSyncedDatabaseTable.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DataDatabricksDatabaseSyncedDatabaseTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataDatabricksDatabaseSyncedDatabaseTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataDatabricksDatabaseSyncedDatabaseTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataDatabricksDatabaseSyncedDatabaseTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksDatabaseSyncedDatabaseTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.dataSynchronizationStatus">DataSynchronizationStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.effectiveDatabaseInstanceName">EffectiveDatabaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.effectiveLogicalDatabaseName">EffectiveLogicalDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.logicalDatabaseName">LogicalDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.unityCatalogProvisioningState">UnityCatalogProvisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.databaseInstanceName"></a>

```csharp
public string DatabaseInstanceName { get; }
```

- *Type:* string

---

##### `DataSynchronizationStatus`<sup>Required</sup> <a name="DataSynchronizationStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.dataSynchronizationStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference DataSynchronizationStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference</a>

---

##### `EffectiveDatabaseInstanceName`<sup>Required</sup> <a name="EffectiveDatabaseInstanceName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.effectiveDatabaseInstanceName"></a>

```csharp
public string EffectiveDatabaseInstanceName { get; }
```

- *Type:* string

---

##### `EffectiveLogicalDatabaseName`<sup>Required</sup> <a name="EffectiveLogicalDatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.effectiveLogicalDatabaseName"></a>

```csharp
public string EffectiveLogicalDatabaseName { get; }
```

- *Type:* string

---

##### `LogicalDatabaseName`<sup>Required</sup> <a name="LogicalDatabaseName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.logicalDatabaseName"></a>

```csharp
public string LogicalDatabaseName { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.spec"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference</a>

---

##### `UnityCatalogProvisioningState`<sup>Required</sup> <a name="UnityCatalogProvisioningState" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.unityCatalogProvisioningState"></a>

```csharp
public string UnityCatalogProvisioningState { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksDatabaseSyncedDatabaseTableConfig <a name="DataDatabricksDatabaseSyncedDatabaseTableConfig" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#name DataDatabricksDatabaseSyncedDatabaseTable#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#name DataDatabricksDatabaseSyncedDatabaseTable#name}.

---

### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus {
    DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus ContinuousUpdateStatus = null,
    DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus FailedStatus = null,
    DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus ProvisioningStatus = null,
    DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus TriggeredUpdateStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.continuousUpdateStatus">ContinuousUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#continuous_update_status DataDatabricksDatabaseSyncedDatabaseTable#continuous_update_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.failedStatus">FailedStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#failed_status DataDatabricksDatabaseSyncedDatabaseTable#failed_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.provisioningStatus">ProvisioningStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#provisioning_status DataDatabricksDatabaseSyncedDatabaseTable#provisioning_status}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.triggeredUpdateStatus">TriggeredUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#triggered_update_status DataDatabricksDatabaseSyncedDatabaseTable#triggered_update_status}. |

---

##### `ContinuousUpdateStatus`<sup>Optional</sup> <a name="ContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.continuousUpdateStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus ContinuousUpdateStatus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#continuous_update_status DataDatabricksDatabaseSyncedDatabaseTable#continuous_update_status}.

---

##### `FailedStatus`<sup>Optional</sup> <a name="FailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.failedStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus FailedStatus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#failed_status DataDatabricksDatabaseSyncedDatabaseTable#failed_status}.

---

##### `ProvisioningStatus`<sup>Optional</sup> <a name="ProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.provisioningStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus ProvisioningStatus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#provisioning_status DataDatabricksDatabaseSyncedDatabaseTable#provisioning_status}.

---

##### `TriggeredUpdateStatus`<sup>Optional</sup> <a name="TriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus.property.triggeredUpdateStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus TriggeredUpdateStatus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#triggered_update_status DataDatabricksDatabaseSyncedDatabaseTable#triggered_update_status}.

---

### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus {

};
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress {

};
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus {

};
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync {

};
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo {

};
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus {

};
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress {

};
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus {

};
```


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress {

};
```


### DataDatabricksDatabaseSyncedDatabaseTableSpec <a name="DataDatabricksDatabaseSyncedDatabaseTableSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableSpec {
    bool|IResolvable CreateDatabaseObjectsIfMissing = null,
    string ExistingPipelineId = null,
    DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec NewPipelineSpec = null,
    string[] PrimaryKeyColumns = null,
    string SchedulingPolicy = null,
    string SourceTableFullName = null,
    string TimeseriesKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.existingPipelineId">ExistingPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTable#existing_pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTable#new_pipeline_spec}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTable#primary_key_columns}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTable#scheduling_policy}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.sourceTableFullName">SourceTableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTable#source_table_full_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.timeseriesKey">TimeseriesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#timeseries_key DataDatabricksDatabaseSyncedDatabaseTable#timeseries_key}. |

---

##### `CreateDatabaseObjectsIfMissing`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.createDatabaseObjectsIfMissing"></a>

```csharp
public bool|IResolvable CreateDatabaseObjectsIfMissing { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#create_database_objects_if_missing DataDatabricksDatabaseSyncedDatabaseTable#create_database_objects_if_missing}.

---

##### `ExistingPipelineId`<sup>Optional</sup> <a name="ExistingPipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.existingPipelineId"></a>

```csharp
public string ExistingPipelineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#existing_pipeline_id DataDatabricksDatabaseSyncedDatabaseTable#existing_pipeline_id}.

---

##### `NewPipelineSpec`<sup>Optional</sup> <a name="NewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.newPipelineSpec"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec NewPipelineSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#new_pipeline_spec DataDatabricksDatabaseSyncedDatabaseTable#new_pipeline_spec}.

---

##### `PrimaryKeyColumns`<sup>Optional</sup> <a name="PrimaryKeyColumns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.primaryKeyColumns"></a>

```csharp
public string[] PrimaryKeyColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#primary_key_columns DataDatabricksDatabaseSyncedDatabaseTable#primary_key_columns}.

---

##### `SchedulingPolicy`<sup>Optional</sup> <a name="SchedulingPolicy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.schedulingPolicy"></a>

```csharp
public string SchedulingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#scheduling_policy DataDatabricksDatabaseSyncedDatabaseTable#scheduling_policy}.

---

##### `SourceTableFullName`<sup>Optional</sup> <a name="SourceTableFullName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.sourceTableFullName"></a>

```csharp
public string SourceTableFullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#source_table_full_name DataDatabricksDatabaseSyncedDatabaseTable#source_table_full_name}.

---

##### `TimeseriesKey`<sup>Optional</sup> <a name="TimeseriesKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec.property.timeseriesKey"></a>

```csharp
public string TimeseriesKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#timeseries_key DataDatabricksDatabaseSyncedDatabaseTable#timeseries_key}.

---

### DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec <a name="DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec {
    string StorageCatalog = null,
    string StorageSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageCatalog">StorageCatalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#storage_catalog DataDatabricksDatabaseSyncedDatabaseTable#storage_catalog}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageSchema">StorageSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#storage_schema DataDatabricksDatabaseSyncedDatabaseTable#storage_schema}. |

---

##### `StorageCatalog`<sup>Optional</sup> <a name="StorageCatalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageCatalog"></a>

```csharp
public string StorageCatalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#storage_catalog DataDatabricksDatabaseSyncedDatabaseTable#storage_catalog}.

---

##### `StorageSchema`<sup>Optional</sup> <a name="StorageSchema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageSchema"></a>

```csharp
public string StorageSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.97.0/docs/data-sources/database_synced_database_table#storage_schema DataDatabricksDatabaseSyncedDatabaseTable#storage_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```csharp
public string ProvisioningPhase { get; }
```

- *Type:* string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress">InitialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialPipelineSyncProgress`<sup>Required</sup> <a name="InitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference InitialPipelineSyncProgress { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp">DeltaCommitTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">DeltaCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaCommitTimestamp`<sup>Required</sup> <a name="DeltaCommitTimestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp"></a>

```csharp
public string DeltaCommitTimestamp { get; }
```

- *Type:* string

---

##### `DeltaCommitVersion`<sup>Required</sup> <a name="DeltaCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```csharp
public double DeltaCommitVersion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo">DeltaTableSyncInfo</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp">SyncEndTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp">SyncStartTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaTableSyncInfo`<sup>Required</sup> <a name="DeltaTableSyncInfo" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference DeltaTableSyncInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `SyncEndTimestamp`<sup>Required</sup> <a name="SyncEndTimestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp"></a>

```csharp
public string SyncEndTimestamp { get; }
```

- *Type:* string

---

##### `SyncStartTimestamp`<sup>Required</sup> <a name="SyncStartTimestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp"></a>

```csharp
public string SyncStartTimestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus">PutContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus">PutFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus">PutProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus">PutTriggeredUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus">ResetContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetFailedStatus">ResetFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetProvisioningStatus">ResetProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus">ResetTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContinuousUpdateStatus` <a name="PutContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus"></a>

```csharp
private void PutContinuousUpdateStatus(DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

---

##### `PutFailedStatus` <a name="PutFailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus"></a>

```csharp
private void PutFailedStatus(DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

---

##### `PutProvisioningStatus` <a name="PutProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus"></a>

```csharp
private void PutProvisioningStatus(DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

---

##### `PutTriggeredUpdateStatus` <a name="PutTriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus"></a>

```csharp
private void PutTriggeredUpdateStatus(DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

---

##### `ResetContinuousUpdateStatus` <a name="ResetContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus"></a>

```csharp
private void ResetContinuousUpdateStatus()
```

##### `ResetFailedStatus` <a name="ResetFailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetFailedStatus"></a>

```csharp
private void ResetFailedStatus()
```

##### `ResetProvisioningStatus` <a name="ResetProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetProvisioningStatus"></a>

```csharp
private void ResetProvisioningStatus()
```

##### `ResetTriggeredUpdateStatus` <a name="ResetTriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus"></a>

```csharp
private void ResetTriggeredUpdateStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatus">ContinuousUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.detailedState">DetailedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatus">FailedStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.lastSync">LastSync</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatus">ProvisioningStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus">TriggeredUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput">ContinuousUpdateStatusInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatusInput">FailedStatusInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatusInput">ProvisioningStatusInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput">TriggeredUpdateStatusInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContinuousUpdateStatus`<sup>Required</sup> <a name="ContinuousUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference ContinuousUpdateStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference</a>

---

##### `DetailedState`<sup>Required</sup> <a name="DetailedState" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.detailedState"></a>

```csharp
public string DetailedState { get; }
```

- *Type:* string

---

##### `FailedStatus`<sup>Required</sup> <a name="FailedStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference FailedStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference</a>

---

##### `LastSync`<sup>Required</sup> <a name="LastSync" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.lastSync"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference LastSync { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `ProvisioningStatus`<sup>Required</sup> <a name="ProvisioningStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference ProvisioningStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference</a>

---

##### `TriggeredUpdateStatus`<sup>Required</sup> <a name="TriggeredUpdateStatus" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference TriggeredUpdateStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a>

---

##### `ContinuousUpdateStatusInput`<sup>Optional</sup> <a name="ContinuousUpdateStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput"></a>

```csharp
public IResolvable|DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus ContinuousUpdateStatusInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

---

##### `FailedStatusInput`<sup>Optional</sup> <a name="FailedStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatusInput"></a>

```csharp
public IResolvable|DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus FailedStatusInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

---

##### `ProvisioningStatusInput`<sup>Optional</sup> <a name="ProvisioningStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatusInput"></a>

```csharp
public IResolvable|DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus ProvisioningStatusInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

---

##### `TriggeredUpdateStatusInput`<sup>Optional</sup> <a name="TriggeredUpdateStatusInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput"></a>

```csharp
public IResolvable|DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus TriggeredUpdateStatusInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatus</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```csharp
public string ProvisioningPhase { get; }
```

- *Type:* string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress">InitialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialPipelineSyncProgress`<sup>Required</sup> <a name="InitialPipelineSyncProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference InitialPipelineSyncProgress { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress">TriggeredUpdateProgress</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `TriggeredUpdateProgress`<sup>Required</sup> <a name="TriggeredUpdateProgress" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference TriggeredUpdateProgress { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase"></a>

```csharp
public string ProvisioningPhase { get; }
```

- *Type:* string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DataDatabricksDatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">ResetStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageSchema">ResetStorageSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageCatalog` <a name="ResetStorageCatalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```csharp
private void ResetStorageCatalog()
```

##### `ResetStorageSchema` <a name="ResetStorageSchema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```csharp
private void ResetStorageSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">StorageCatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">StorageSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalog">StorageCatalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchema">StorageSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageCatalogInput`<sup>Optional</sup> <a name="StorageCatalogInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```csharp
public string StorageCatalogInput { get; }
```

- *Type:* string

---

##### `StorageSchemaInput`<sup>Optional</sup> <a name="StorageSchemaInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```csharp
public string StorageSchemaInput { get; }
```

- *Type:* string

---

##### `StorageCatalog`<sup>Required</sup> <a name="StorageCatalog" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```csharp
public string StorageCatalog { get; }
```

- *Type:* string

---

##### `StorageSchema`<sup>Required</sup> <a name="StorageSchema" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```csharp
public string StorageSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

---


### DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference <a name="DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec">PutNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">ResetCreateDatabaseObjectsIfMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetExistingPipelineId">ResetExistingPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetNewPipelineSpec">ResetNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetPrimaryKeyColumns">ResetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetSchedulingPolicy">ResetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetSourceTableFullName">ResetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetTimeseriesKey">ResetTimeseriesKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNewPipelineSpec` <a name="PutNewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec"></a>

```csharp
private void PutNewPipelineSpec(DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

---

##### `ResetCreateDatabaseObjectsIfMissing` <a name="ResetCreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```csharp
private void ResetCreateDatabaseObjectsIfMissing()
```

##### `ResetExistingPipelineId` <a name="ResetExistingPipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetExistingPipelineId"></a>

```csharp
private void ResetExistingPipelineId()
```

##### `ResetNewPipelineSpec` <a name="ResetNewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetNewPipelineSpec"></a>

```csharp
private void ResetNewPipelineSpec()
```

##### `ResetPrimaryKeyColumns` <a name="ResetPrimaryKeyColumns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```csharp
private void ResetPrimaryKeyColumns()
```

##### `ResetSchedulingPolicy` <a name="ResetSchedulingPolicy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetSchedulingPolicy"></a>

```csharp
private void ResetSchedulingPolicy()
```

##### `ResetSourceTableFullName` <a name="ResetSourceTableFullName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetSourceTableFullName"></a>

```csharp
private void ResetSourceTableFullName()
```

##### `ResetTimeseriesKey` <a name="ResetTimeseriesKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.resetTimeseriesKey"></a>

```csharp
private void ResetTimeseriesKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">CreateDatabaseObjectsIfMissingInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineIdInput">ExistingPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpecInput">NewPipelineSpecInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumnsInput">PrimaryKeyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicyInput">SchedulingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullNameInput">SourceTableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKeyInput">TimeseriesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineId">ExistingPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullName">SourceTableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKey">TimeseriesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec">DataDatabricksDatabaseSyncedDatabaseTableSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NewPipelineSpec`<sup>Required</sup> <a name="NewPipelineSpec" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpec"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference NewPipelineSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference</a>

---

##### `CreateDatabaseObjectsIfMissingInput`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissingInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```csharp
public bool|IResolvable CreateDatabaseObjectsIfMissingInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ExistingPipelineIdInput`<sup>Optional</sup> <a name="ExistingPipelineIdInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineIdInput"></a>

```csharp
public string ExistingPipelineIdInput { get; }
```

- *Type:* string

---

##### `NewPipelineSpecInput`<sup>Optional</sup> <a name="NewPipelineSpecInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpecInput"></a>

```csharp
public IResolvable|DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec NewPipelineSpecInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec">DataDatabricksDatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

---

##### `PrimaryKeyColumnsInput`<sup>Optional</sup> <a name="PrimaryKeyColumnsInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```csharp
public string[] PrimaryKeyColumnsInput { get; }
```

- *Type:* string[]

---

##### `SchedulingPolicyInput`<sup>Optional</sup> <a name="SchedulingPolicyInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicyInput"></a>

```csharp
public string SchedulingPolicyInput { get; }
```

- *Type:* string

---

##### `SourceTableFullNameInput`<sup>Optional</sup> <a name="SourceTableFullNameInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```csharp
public string SourceTableFullNameInput { get; }
```

- *Type:* string

---

##### `TimeseriesKeyInput`<sup>Optional</sup> <a name="TimeseriesKeyInput" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKeyInput"></a>

```csharp
public string TimeseriesKeyInput { get; }
```

- *Type:* string

---

##### `CreateDatabaseObjectsIfMissing`<sup>Required</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```csharp
public bool|IResolvable CreateDatabaseObjectsIfMissing { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ExistingPipelineId`<sup>Required</sup> <a name="ExistingPipelineId" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineId"></a>

```csharp
public string ExistingPipelineId { get; }
```

- *Type:* string

---

##### `PrimaryKeyColumns`<sup>Required</sup> <a name="PrimaryKeyColumns" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumns"></a>

```csharp
public string[] PrimaryKeyColumns { get; }
```

- *Type:* string[]

---

##### `SchedulingPolicy`<sup>Required</sup> <a name="SchedulingPolicy" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicy"></a>

```csharp
public string SchedulingPolicy { get; }
```

- *Type:* string

---

##### `SourceTableFullName`<sup>Required</sup> <a name="SourceTableFullName" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullName"></a>

```csharp
public string SourceTableFullName { get; }
```

- *Type:* string

---

##### `TimeseriesKey`<sup>Required</sup> <a name="TimeseriesKey" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKey"></a>

```csharp
public string TimeseriesKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpecOutputReference.property.internalValue"></a>

```csharp
public DataDatabricksDatabaseSyncedDatabaseTableSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksDatabaseSyncedDatabaseTable.DataDatabricksDatabaseSyncedDatabaseTableSpec">DataDatabricksDatabaseSyncedDatabaseTableSpec</a>

---



