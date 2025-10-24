# `databaseSyncedDatabaseTable` Submodule <a name="`databaseSyncedDatabaseTable` Submodule" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseSyncedDatabaseTable <a name="DatabaseSyncedDatabaseTable" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table databricks_database_synced_database_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTable(Construct Scope, string Id, DatabaseSyncedDatabaseTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig">DatabaseSyncedDatabaseTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig">DatabaseSyncedDatabaseTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetDatabaseInstanceName">ResetDatabaseInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetLogicalDatabaseName">ResetLogicalDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetSpec">ResetSpec</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec"></a>

```csharp
private void PutSpec(DatabaseSyncedDatabaseTableSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a>

---

##### `ResetDatabaseInstanceName` <a name="ResetDatabaseInstanceName" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetDatabaseInstanceName"></a>

```csharp
private void ResetDatabaseInstanceName()
```

##### `ResetLogicalDatabaseName` <a name="ResetLogicalDatabaseName" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetLogicalDatabaseName"></a>

```csharp
private void ResetLogicalDatabaseName()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.resetSpec"></a>

```csharp
private void ResetSpec()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseSyncedDatabaseTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DatabaseSyncedDatabaseTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DatabaseSyncedDatabaseTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DatabaseSyncedDatabaseTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DatabaseSyncedDatabaseTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseSyncedDatabaseTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseSyncedDatabaseTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseSyncedDatabaseTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseSyncedDatabaseTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.dataSynchronizationStatus">DataSynchronizationStatus</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.effectiveDatabaseInstanceName">EffectiveDatabaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.effectiveLogicalDatabaseName">EffectiveLogicalDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference">DatabaseSyncedDatabaseTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.unityCatalogProvisioningState">UnityCatalogProvisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.databaseInstanceNameInput">DatabaseInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.logicalDatabaseNameInput">LogicalDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.specInput">SpecInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.logicalDatabaseName">LogicalDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `DataSynchronizationStatus`<sup>Required</sup> <a name="DataSynchronizationStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.dataSynchronizationStatus"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference DataSynchronizationStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference</a>

---

##### `EffectiveDatabaseInstanceName`<sup>Required</sup> <a name="EffectiveDatabaseInstanceName" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.effectiveDatabaseInstanceName"></a>

```csharp
public string EffectiveDatabaseInstanceName { get; }
```

- *Type:* string

---

##### `EffectiveLogicalDatabaseName`<sup>Required</sup> <a name="EffectiveLogicalDatabaseName" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.effectiveLogicalDatabaseName"></a>

```csharp
public string EffectiveLogicalDatabaseName { get; }
```

- *Type:* string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.spec"></a>

```csharp
public DatabaseSyncedDatabaseTableSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference">DatabaseSyncedDatabaseTableSpecOutputReference</a>

---

##### `UnityCatalogProvisioningState`<sup>Required</sup> <a name="UnityCatalogProvisioningState" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.unityCatalogProvisioningState"></a>

```csharp
public string UnityCatalogProvisioningState { get; }
```

- *Type:* string

---

##### `DatabaseInstanceNameInput`<sup>Optional</sup> <a name="DatabaseInstanceNameInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.databaseInstanceNameInput"></a>

```csharp
public string DatabaseInstanceNameInput { get; }
```

- *Type:* string

---

##### `LogicalDatabaseNameInput`<sup>Optional</sup> <a name="LogicalDatabaseNameInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.logicalDatabaseNameInput"></a>

```csharp
public string LogicalDatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.specInput"></a>

```csharp
public IResolvable|DatabaseSyncedDatabaseTableSpec SpecInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a>

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.databaseInstanceName"></a>

```csharp
public string DatabaseInstanceName { get; }
```

- *Type:* string

---

##### `LogicalDatabaseName`<sup>Required</sup> <a name="LogicalDatabaseName" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.logicalDatabaseName"></a>

```csharp
public string LogicalDatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseSyncedDatabaseTableConfig <a name="DatabaseSyncedDatabaseTableConfig" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string DatabaseInstanceName = null,
    string LogicalDatabaseName = null,
    DatabaseSyncedDatabaseTableSpec Spec = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#name DatabaseSyncedDatabaseTable#name}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#database_instance_name DatabaseSyncedDatabaseTable#database_instance_name}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.logicalDatabaseName">LogicalDatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#logical_database_name DatabaseSyncedDatabaseTable#logical_database_name}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#spec DatabaseSyncedDatabaseTable#spec}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#name DatabaseSyncedDatabaseTable#name}.

---

##### `DatabaseInstanceName`<sup>Optional</sup> <a name="DatabaseInstanceName" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.databaseInstanceName"></a>

```csharp
public string DatabaseInstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#database_instance_name DatabaseSyncedDatabaseTable#database_instance_name}.

---

##### `LogicalDatabaseName`<sup>Optional</sup> <a name="LogicalDatabaseName" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.logicalDatabaseName"></a>

```csharp
public string LogicalDatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#logical_database_name DatabaseSyncedDatabaseTable#logical_database_name}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableConfig.property.spec"></a>

```csharp
public DatabaseSyncedDatabaseTableSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#spec DatabaseSyncedDatabaseTable#spec}.

---

### DatabaseSyncedDatabaseTableDataSynchronizationStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatus {
    DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus ContinuousUpdateStatus = null,
    DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus FailedStatus = null,
    DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus ProvisioningStatus = null,
    DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus TriggeredUpdateStatus = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.continuousUpdateStatus">ContinuousUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#continuous_update_status DatabaseSyncedDatabaseTable#continuous_update_status}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.failedStatus">FailedStatus</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#failed_status DatabaseSyncedDatabaseTable#failed_status}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.provisioningStatus">ProvisioningStatus</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#provisioning_status DatabaseSyncedDatabaseTable#provisioning_status}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.triggeredUpdateStatus">TriggeredUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#triggered_update_status DatabaseSyncedDatabaseTable#triggered_update_status}. |

---

##### `ContinuousUpdateStatus`<sup>Optional</sup> <a name="ContinuousUpdateStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.continuousUpdateStatus"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus ContinuousUpdateStatus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#continuous_update_status DatabaseSyncedDatabaseTable#continuous_update_status}.

---

##### `FailedStatus`<sup>Optional</sup> <a name="FailedStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.failedStatus"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus FailedStatus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#failed_status DatabaseSyncedDatabaseTable#failed_status}.

---

##### `ProvisioningStatus`<sup>Optional</sup> <a name="ProvisioningStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.provisioningStatus"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus ProvisioningStatus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#provisioning_status DatabaseSyncedDatabaseTable#provisioning_status}.

---

##### `TriggeredUpdateStatus`<sup>Optional</sup> <a name="TriggeredUpdateStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus.property.triggeredUpdateStatus"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus TriggeredUpdateStatus { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#triggered_update_status DatabaseSyncedDatabaseTable#triggered_update_status}.

---

### DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus {

};
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress {

};
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus {

};
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync {

};
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo {

};
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus {

};
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress {

};
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus {

};
```


### DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress {

};
```


### DatabaseSyncedDatabaseTableSpec <a name="DatabaseSyncedDatabaseTableSpec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableSpec {
    bool|IResolvable CreateDatabaseObjectsIfMissing = null,
    string ExistingPipelineId = null,
    DatabaseSyncedDatabaseTableSpecNewPipelineSpec NewPipelineSpec = null,
    string[] PrimaryKeyColumns = null,
    string SchedulingPolicy = null,
    string SourceTableFullName = null,
    string TimeseriesKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#create_database_objects_if_missing DatabaseSyncedDatabaseTable#create_database_objects_if_missing}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.existingPipelineId">ExistingPipelineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#existing_pipeline_id DatabaseSyncedDatabaseTable#existing_pipeline_id}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#new_pipeline_spec DatabaseSyncedDatabaseTable#new_pipeline_spec}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#primary_key_columns DatabaseSyncedDatabaseTable#primary_key_columns}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#scheduling_policy DatabaseSyncedDatabaseTable#scheduling_policy}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.sourceTableFullName">SourceTableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#source_table_full_name DatabaseSyncedDatabaseTable#source_table_full_name}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.timeseriesKey">TimeseriesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#timeseries_key DatabaseSyncedDatabaseTable#timeseries_key}. |

---

##### `CreateDatabaseObjectsIfMissing`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.createDatabaseObjectsIfMissing"></a>

```csharp
public bool|IResolvable CreateDatabaseObjectsIfMissing { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#create_database_objects_if_missing DatabaseSyncedDatabaseTable#create_database_objects_if_missing}.

---

##### `ExistingPipelineId`<sup>Optional</sup> <a name="ExistingPipelineId" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.existingPipelineId"></a>

```csharp
public string ExistingPipelineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#existing_pipeline_id DatabaseSyncedDatabaseTable#existing_pipeline_id}.

---

##### `NewPipelineSpec`<sup>Optional</sup> <a name="NewPipelineSpec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.newPipelineSpec"></a>

```csharp
public DatabaseSyncedDatabaseTableSpecNewPipelineSpec NewPipelineSpec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#new_pipeline_spec DatabaseSyncedDatabaseTable#new_pipeline_spec}.

---

##### `PrimaryKeyColumns`<sup>Optional</sup> <a name="PrimaryKeyColumns" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.primaryKeyColumns"></a>

```csharp
public string[] PrimaryKeyColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#primary_key_columns DatabaseSyncedDatabaseTable#primary_key_columns}.

---

##### `SchedulingPolicy`<sup>Optional</sup> <a name="SchedulingPolicy" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.schedulingPolicy"></a>

```csharp
public string SchedulingPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#scheduling_policy DatabaseSyncedDatabaseTable#scheduling_policy}.

---

##### `SourceTableFullName`<sup>Optional</sup> <a name="SourceTableFullName" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.sourceTableFullName"></a>

```csharp
public string SourceTableFullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#source_table_full_name DatabaseSyncedDatabaseTable#source_table_full_name}.

---

##### `TimeseriesKey`<sup>Optional</sup> <a name="TimeseriesKey" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec.property.timeseriesKey"></a>

```csharp
public string TimeseriesKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#timeseries_key DatabaseSyncedDatabaseTable#timeseries_key}.

---

### DatabaseSyncedDatabaseTableSpecNewPipelineSpec <a name="DatabaseSyncedDatabaseTableSpecNewPipelineSpec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableSpecNewPipelineSpec {
    string StorageCatalog = null,
    string StorageSchema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageCatalog">StorageCatalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#storage_catalog DatabaseSyncedDatabaseTable#storage_catalog}. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageSchema">StorageSchema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#storage_schema DatabaseSyncedDatabaseTable#storage_schema}. |

---

##### `StorageCatalog`<sup>Optional</sup> <a name="StorageCatalog" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageCatalog"></a>

```csharp
public string StorageCatalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#storage_catalog DatabaseSyncedDatabaseTable#storage_catalog}.

---

##### `StorageSchema`<sup>Optional</sup> <a name="StorageSchema" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec.property.storageSchema"></a>

```csharp
public string StorageSchema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.95.0/docs/resources/database_synced_database_table#storage_schema DatabaseSyncedDatabaseTable#storage_schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```csharp
public string ProvisioningPhase { get; }
```

- *Type:* string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgress</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress">InitialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialPipelineSyncProgress`<sup>Required</sup> <a name="InitialPipelineSyncProgress" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference InitialPipelineSyncProgress { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp">DeltaCommitTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion">DeltaCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaCommitTimestamp`<sup>Required</sup> <a name="DeltaCommitTimestamp" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitTimestamp"></a>

```csharp
public string DeltaCommitTimestamp { get; }
```

- *Type:* string

---

##### `DeltaCommitVersion`<sup>Required</sup> <a name="DeltaCommitVersion" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.deltaCommitVersion"></a>

```csharp
public double DeltaCommitVersion { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference.property.internalValue"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfo</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo">DeltaTableSyncInfo</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp">SyncEndTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp">SyncStartTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeltaTableSyncInfo`<sup>Required</sup> <a name="DeltaTableSyncInfo" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.deltaTableSyncInfo"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference DeltaTableSyncInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncDeltaTableSyncInfoOutputReference</a>

---

##### `SyncEndTimestamp`<sup>Required</sup> <a name="SyncEndTimestamp" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncEndTimestamp"></a>

```csharp
public string SyncEndTimestamp { get; }
```

- *Type:* string

---

##### `SyncStartTimestamp`<sup>Required</sup> <a name="SyncStartTimestamp" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.syncStartTimestamp"></a>

```csharp
public string SyncStartTimestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference.property.internalValue"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSync</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus">PutContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus">PutFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus">PutProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus">PutTriggeredUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus">ResetContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetFailedStatus">ResetFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetProvisioningStatus">ResetProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus">ResetTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContinuousUpdateStatus` <a name="PutContinuousUpdateStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus"></a>

```csharp
private void PutContinuousUpdateStatus(DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putContinuousUpdateStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

---

##### `PutFailedStatus` <a name="PutFailedStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus"></a>

```csharp
private void PutFailedStatus(DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putFailedStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

---

##### `PutProvisioningStatus` <a name="PutProvisioningStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus"></a>

```csharp
private void PutProvisioningStatus(DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putProvisioningStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

---

##### `PutTriggeredUpdateStatus` <a name="PutTriggeredUpdateStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus"></a>

```csharp
private void PutTriggeredUpdateStatus(DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.putTriggeredUpdateStatus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

---

##### `ResetContinuousUpdateStatus` <a name="ResetContinuousUpdateStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetContinuousUpdateStatus"></a>

```csharp
private void ResetContinuousUpdateStatus()
```

##### `ResetFailedStatus` <a name="ResetFailedStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetFailedStatus"></a>

```csharp
private void ResetFailedStatus()
```

##### `ResetProvisioningStatus` <a name="ResetProvisioningStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetProvisioningStatus"></a>

```csharp
private void ResetProvisioningStatus()
```

##### `ResetTriggeredUpdateStatus` <a name="ResetTriggeredUpdateStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.resetTriggeredUpdateStatus"></a>

```csharp
private void ResetTriggeredUpdateStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatus">ContinuousUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.detailedState">DetailedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatus">FailedStatus</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.lastSync">LastSync</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatus">ProvisioningStatus</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus">TriggeredUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput">ContinuousUpdateStatusInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatusInput">FailedStatusInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatusInput">ProvisioningStatusInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput">TriggeredUpdateStatusInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContinuousUpdateStatus`<sup>Required</sup> <a name="ContinuousUpdateStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatus"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference ContinuousUpdateStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatusOutputReference</a>

---

##### `DetailedState`<sup>Required</sup> <a name="DetailedState" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.detailedState"></a>

```csharp
public string DetailedState { get; }
```

- *Type:* string

---

##### `FailedStatus`<sup>Required</sup> <a name="FailedStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatus"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference FailedStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatusOutputReference</a>

---

##### `LastSync`<sup>Required</sup> <a name="LastSync" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.lastSync"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference LastSync { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusLastSyncOutputReference</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `ProvisioningStatus`<sup>Required</sup> <a name="ProvisioningStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatus"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference ProvisioningStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference</a>

---

##### `TriggeredUpdateStatus`<sup>Required</sup> <a name="TriggeredUpdateStatus" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatus"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference TriggeredUpdateStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference</a>

---

##### `ContinuousUpdateStatusInput`<sup>Optional</sup> <a name="ContinuousUpdateStatusInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.continuousUpdateStatusInput"></a>

```csharp
public IResolvable|DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus ContinuousUpdateStatusInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusContinuousUpdateStatus</a>

---

##### `FailedStatusInput`<sup>Optional</sup> <a name="FailedStatusInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.failedStatusInput"></a>

```csharp
public IResolvable|DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus FailedStatusInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusFailedStatus</a>

---

##### `ProvisioningStatusInput`<sup>Optional</sup> <a name="ProvisioningStatusInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.provisioningStatusInput"></a>

```csharp
public IResolvable|DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus ProvisioningStatusInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

---

##### `TriggeredUpdateStatusInput`<sup>Optional</sup> <a name="TriggeredUpdateStatusInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.triggeredUpdateStatusInput"></a>

```csharp
public IResolvable|DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus TriggeredUpdateStatusInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusOutputReference.property.internalValue"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.provisioningPhase"></a>

```csharp
public string ProvisioningPhase { get; }
```

- *Type:* string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgress</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress">InitialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialPipelineSyncProgress`<sup>Required</sup> <a name="InitialPipelineSyncProgress" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference InitialPipelineSyncProgress { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusInitialPipelineSyncProgressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatusOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusProvisioningStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress">TriggeredUpdateProgress</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `TriggeredUpdateProgress`<sup>Required</sup> <a name="TriggeredUpdateProgress" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference TriggeredUpdateProgress { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatus</a>

---


### DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference <a name="DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase">ProvisioningPhase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `ProvisioningPhase`<sup>Required</sup> <a name="ProvisioningPhase" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.provisioningPhase"></a>

```csharp
public string ProvisioningPhase { get; }
```

- *Type:* string

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue"></a>

```csharp
public DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress">DatabaseSyncedDatabaseTableDataSynchronizationStatusTriggeredUpdateStatusTriggeredUpdateProgress</a>

---


### DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference <a name="DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageCatalog">ResetStorageCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageSchema">ResetStorageSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStorageCatalog` <a name="ResetStorageCatalog" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageCatalog"></a>

```csharp
private void ResetStorageCatalog()
```

##### `ResetStorageSchema` <a name="ResetStorageSchema" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.resetStorageSchema"></a>

```csharp
private void ResetStorageSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput">StorageCatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput">StorageSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalog">StorageCatalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchema">StorageSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageCatalogInput`<sup>Optional</sup> <a name="StorageCatalogInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalogInput"></a>

```csharp
public string StorageCatalogInput { get; }
```

- *Type:* string

---

##### `StorageSchemaInput`<sup>Optional</sup> <a name="StorageSchemaInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchemaInput"></a>

```csharp
public string StorageSchemaInput { get; }
```

- *Type:* string

---

##### `StorageCatalog`<sup>Required</sup> <a name="StorageCatalog" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageCatalog"></a>

```csharp
public string StorageCatalog { get; }
```

- *Type:* string

---

##### `StorageSchema`<sup>Required</sup> <a name="StorageSchema" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.storageSchema"></a>

```csharp
public string StorageSchema { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabaseSyncedDatabaseTableSpecNewPipelineSpec InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

---


### DatabaseSyncedDatabaseTableSpecOutputReference <a name="DatabaseSyncedDatabaseTableSpecOutputReference" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseSyncedDatabaseTableSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec">PutNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing">ResetCreateDatabaseObjectsIfMissing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetExistingPipelineId">ResetExistingPipelineId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetNewPipelineSpec">ResetNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetPrimaryKeyColumns">ResetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetSchedulingPolicy">ResetSchedulingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetSourceTableFullName">ResetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetTimeseriesKey">ResetTimeseriesKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNewPipelineSpec` <a name="PutNewPipelineSpec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec"></a>

```csharp
private void PutNewPipelineSpec(DatabaseSyncedDatabaseTableSpecNewPipelineSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.putNewPipelineSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

---

##### `ResetCreateDatabaseObjectsIfMissing` <a name="ResetCreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetCreateDatabaseObjectsIfMissing"></a>

```csharp
private void ResetCreateDatabaseObjectsIfMissing()
```

##### `ResetExistingPipelineId` <a name="ResetExistingPipelineId" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetExistingPipelineId"></a>

```csharp
private void ResetExistingPipelineId()
```

##### `ResetNewPipelineSpec` <a name="ResetNewPipelineSpec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetNewPipelineSpec"></a>

```csharp
private void ResetNewPipelineSpec()
```

##### `ResetPrimaryKeyColumns` <a name="ResetPrimaryKeyColumns" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```csharp
private void ResetPrimaryKeyColumns()
```

##### `ResetSchedulingPolicy` <a name="ResetSchedulingPolicy" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetSchedulingPolicy"></a>

```csharp
private void ResetSchedulingPolicy()
```

##### `ResetSourceTableFullName` <a name="ResetSourceTableFullName" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetSourceTableFullName"></a>

```csharp
private void ResetSourceTableFullName()
```

##### `ResetTimeseriesKey` <a name="ResetTimeseriesKey" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.resetTimeseriesKey"></a>

```csharp
private void ResetTimeseriesKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpec">NewPipelineSpec</a></code> | <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference">DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput">CreateDatabaseObjectsIfMissingInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineIdInput">ExistingPipelineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpecInput">NewPipelineSpecInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumnsInput">PrimaryKeyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicyInput">SchedulingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullNameInput">SourceTableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKeyInput">TimeseriesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissing">CreateDatabaseObjectsIfMissing</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineId">ExistingPipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicy">SchedulingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullName">SourceTableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKey">TimeseriesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NewPipelineSpec`<sup>Required</sup> <a name="NewPipelineSpec" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpec"></a>

```csharp
public DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference NewPipelineSpec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference">DatabaseSyncedDatabaseTableSpecNewPipelineSpecOutputReference</a>

---

##### `CreateDatabaseObjectsIfMissingInput`<sup>Optional</sup> <a name="CreateDatabaseObjectsIfMissingInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissingInput"></a>

```csharp
public bool|IResolvable CreateDatabaseObjectsIfMissingInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ExistingPipelineIdInput`<sup>Optional</sup> <a name="ExistingPipelineIdInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineIdInput"></a>

```csharp
public string ExistingPipelineIdInput { get; }
```

- *Type:* string

---

##### `NewPipelineSpecInput`<sup>Optional</sup> <a name="NewPipelineSpecInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.newPipelineSpecInput"></a>

```csharp
public IResolvable|DatabaseSyncedDatabaseTableSpecNewPipelineSpec NewPipelineSpecInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecNewPipelineSpec">DatabaseSyncedDatabaseTableSpecNewPipelineSpec</a>

---

##### `PrimaryKeyColumnsInput`<sup>Optional</sup> <a name="PrimaryKeyColumnsInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```csharp
public string[] PrimaryKeyColumnsInput { get; }
```

- *Type:* string[]

---

##### `SchedulingPolicyInput`<sup>Optional</sup> <a name="SchedulingPolicyInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicyInput"></a>

```csharp
public string SchedulingPolicyInput { get; }
```

- *Type:* string

---

##### `SourceTableFullNameInput`<sup>Optional</sup> <a name="SourceTableFullNameInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```csharp
public string SourceTableFullNameInput { get; }
```

- *Type:* string

---

##### `TimeseriesKeyInput`<sup>Optional</sup> <a name="TimeseriesKeyInput" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKeyInput"></a>

```csharp
public string TimeseriesKeyInput { get; }
```

- *Type:* string

---

##### `CreateDatabaseObjectsIfMissing`<sup>Required</sup> <a name="CreateDatabaseObjectsIfMissing" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.createDatabaseObjectsIfMissing"></a>

```csharp
public bool|IResolvable CreateDatabaseObjectsIfMissing { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `ExistingPipelineId`<sup>Required</sup> <a name="ExistingPipelineId" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.existingPipelineId"></a>

```csharp
public string ExistingPipelineId { get; }
```

- *Type:* string

---

##### `PrimaryKeyColumns`<sup>Required</sup> <a name="PrimaryKeyColumns" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.primaryKeyColumns"></a>

```csharp
public string[] PrimaryKeyColumns { get; }
```

- *Type:* string[]

---

##### `SchedulingPolicy`<sup>Required</sup> <a name="SchedulingPolicy" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.schedulingPolicy"></a>

```csharp
public string SchedulingPolicy { get; }
```

- *Type:* string

---

##### `SourceTableFullName`<sup>Required</sup> <a name="SourceTableFullName" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.sourceTableFullName"></a>

```csharp
public string SourceTableFullName { get; }
```

- *Type:* string

---

##### `TimeseriesKey`<sup>Required</sup> <a name="TimeseriesKey" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.timeseriesKey"></a>

```csharp
public string TimeseriesKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpecOutputReference.property.internalValue"></a>

```csharp
public IResolvable|DatabaseSyncedDatabaseTableSpec InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-databricks.databaseSyncedDatabaseTable.DatabaseSyncedDatabaseTableSpec">DatabaseSyncedDatabaseTableSpec</a>

---



