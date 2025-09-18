# `databaseDatabaseCatalog` Submodule <a name="`databaseDatabaseCatalog` Submodule" id="@cdktf/provider-databricks.databaseDatabaseCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDatabaseCatalog <a name="DatabaseDatabaseCatalog" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_database_catalog databricks_database_database_catalog}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseDatabaseCatalog(Construct Scope, string Id, DatabaseDatabaseCatalogConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig">DatabaseDatabaseCatalogConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig">DatabaseDatabaseCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetCreateDatabaseIfNotExists">ResetCreateDatabaseIfNotExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCreateDatabaseIfNotExists` <a name="ResetCreateDatabaseIfNotExists" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetCreateDatabaseIfNotExists"></a>

```csharp
private void ResetCreateDatabaseIfNotExists()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.resetWorkspaceId"></a>

```csharp
private void ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDatabaseCatalog resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DatabaseDatabaseCatalog.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DatabaseDatabaseCatalog.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DatabaseDatabaseCatalog.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

DatabaseDatabaseCatalog.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DatabaseDatabaseCatalog resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseDatabaseCatalog to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseDatabaseCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_database_catalog#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDatabaseCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExistsInput">CreateDatabaseIfNotExistsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceNameInput">DatabaseInstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseNameInput">DatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExists">CreateDatabaseIfNotExists</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseName">DatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `CreateDatabaseIfNotExistsInput`<sup>Optional</sup> <a name="CreateDatabaseIfNotExistsInput" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExistsInput"></a>

```csharp
public object CreateDatabaseIfNotExistsInput { get; }
```

- *Type:* object

---

##### `DatabaseInstanceNameInput`<sup>Optional</sup> <a name="DatabaseInstanceNameInput" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceNameInput"></a>

```csharp
public string DatabaseInstanceNameInput { get; }
```

- *Type:* string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseNameInput"></a>

```csharp
public string DatabaseNameInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.workspaceIdInput"></a>

```csharp
public string WorkspaceIdInput { get; }
```

- *Type:* string

---

##### `CreateDatabaseIfNotExists`<sup>Required</sup> <a name="CreateDatabaseIfNotExists" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.createDatabaseIfNotExists"></a>

```csharp
public object CreateDatabaseIfNotExists { get; }
```

- *Type:* object

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseInstanceName"></a>

```csharp
public string DatabaseInstanceName { get; }
```

- *Type:* string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.databaseName"></a>

```csharp
public string DatabaseName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalog.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDatabaseCatalogConfig <a name="DatabaseDatabaseCatalogConfig" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new DatabaseDatabaseCatalogConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatabaseInstanceName,
    string DatabaseName,
    string Name,
    object CreateDatabaseIfNotExists = null,
    string WorkspaceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseInstanceName">DatabaseInstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_database_catalog#database_instance_name DatabaseDatabaseCatalog#database_instance_name}. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseName">DatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_database_catalog#database_name DatabaseDatabaseCatalog#database_name}. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_database_catalog#name DatabaseDatabaseCatalog#name}. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.createDatabaseIfNotExists">CreateDatabaseIfNotExists</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_database_catalog#create_database_if_not_exists DatabaseDatabaseCatalog#create_database_if_not_exists}. |
| <code><a href="#@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.workspaceId">WorkspaceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_database_catalog#workspace_id DatabaseDatabaseCatalog#workspace_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatabaseInstanceName`<sup>Required</sup> <a name="DatabaseInstanceName" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseInstanceName"></a>

```csharp
public string DatabaseInstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_database_catalog#database_instance_name DatabaseDatabaseCatalog#database_instance_name}.

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.databaseName"></a>

```csharp
public string DatabaseName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_database_catalog#database_name DatabaseDatabaseCatalog#database_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_database_catalog#name DatabaseDatabaseCatalog#name}.

---

##### `CreateDatabaseIfNotExists`<sup>Optional</sup> <a name="CreateDatabaseIfNotExists" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.createDatabaseIfNotExists"></a>

```csharp
public object CreateDatabaseIfNotExists { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_database_catalog#create_database_if_not_exists DatabaseDatabaseCatalog#create_database_if_not_exists}.

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-databricks.databaseDatabaseCatalog.DatabaseDatabaseCatalogConfig.property.workspaceId"></a>

```csharp
public string WorkspaceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.90.0/docs/resources/database_database_catalog#workspace_id DatabaseDatabaseCatalog#workspace_id}.

---



