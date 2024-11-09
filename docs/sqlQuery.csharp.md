# `sqlQuery` Submodule <a name="`sqlQuery` Submodule" id="@cdktf/provider-databricks.sqlQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlQuery <a name="SqlQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQuery"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query databricks_sql_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQuery(Construct Scope, string Id, SqlQueryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig">SqlQueryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig">SqlQueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetRunAsRole">ResetRunAsRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter"></a>

```csharp
private void PutParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putParameter.parameter.value"></a>

- *Type:* object

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule"></a>

```csharp
private void PutSchedule(SqlQuerySchedule Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetCreatedAt"></a>

```csharp
private void ResetCreatedAt()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParameter"></a>

```csharp
private void ResetParameter()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetRunAsRole` <a name="ResetRunAsRole" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetRunAsRole"></a>

```csharp
private void ResetRunAsRole()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.resetUpdatedAt"></a>

```csharp
private void ResetUpdatedAt()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqlQuery resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlQuery.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlQuery.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlQuery.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlQuery.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SqlQuery resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlQuery to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SqlQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList">SqlQueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference">SqlQueryScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAtInput">CreatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameterInput">ParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRoleInput">RunAsRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAtInput">UpdatedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRole">RunAsRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameter"></a>

```csharp
public SqlQueryParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList">SqlQueryParameterList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.schedule"></a>

```csharp
public SqlQueryScheduleOutputReference Schedule { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference">SqlQueryScheduleOutputReference</a>

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAtInput"></a>

```csharp
public string CreatedAtInput { get; }
```

- *Type:* string

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceIdInput"></a>

```csharp
public string DataSourceIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parameterInput"></a>

```csharp
public object ParameterInput { get; }
```

- *Type:* object

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `RunAsRoleInput`<sup>Optional</sup> <a name="RunAsRoleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRoleInput"></a>

```csharp
public string RunAsRoleInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.scheduleInput"></a>

```csharp
public SqlQuerySchedule ScheduleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAtInput"></a>

```csharp
public string UpdatedAtInput { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `RunAsRole`<sup>Required</sup> <a name="RunAsRole" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.runAsRole"></a>

```csharp
public string RunAsRole { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.sqlQuery.SqlQuery.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlQueryConfig <a name="SqlQueryConfig" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataSourceId,
    string Name,
    string Query,
    string CreatedAt = null,
    string Description = null,
    string Id = null,
    object Parameter = null,
    string Parent = null,
    string RunAsRole = null,
    SqlQuerySchedule Schedule = null,
    string[] Tags = null,
    string UpdatedAt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#name SqlQuery#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#query SqlQuery#query}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.createdAt">CreatedAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#created_at SqlQuery#created_at}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#description SqlQuery#description}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#id SqlQuery#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parameter">Parameter</a></code> | <code>object</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parent">Parent</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#parent SqlQuery#parent}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.runAsRole">RunAsRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#tags SqlQuery#tags}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#updated_at SqlQuery#updated_at}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#data_source_id SqlQuery#data_source_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#name SqlQuery#name}.

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#query SqlQuery#query}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.createdAt"></a>

```csharp
public string CreatedAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#created_at SqlQuery#created_at}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#description SqlQuery#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#id SqlQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parameter"></a>

```csharp
public object Parameter { get; set; }
```

- *Type:* object

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#parameter SqlQuery#parameter}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#parent SqlQuery#parent}.

---

##### `RunAsRole`<sup>Optional</sup> <a name="RunAsRole" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.runAsRole"></a>

```csharp
public string RunAsRole { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#run_as_role SqlQuery#run_as_role}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.schedule"></a>

```csharp
public SqlQuerySchedule Schedule { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#schedule SqlQuery#schedule}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#tags SqlQuery#tags}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.sqlQuery.SqlQueryConfig.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#updated_at SqlQuery#updated_at}.

---

### SqlQueryParameter <a name="SqlQueryParameter" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameter {
    string Name,
    SqlQueryParameterDate Date = null,
    SqlQueryParameterDateRange DateRange = null,
    SqlQueryParameterDatetime Datetime = null,
    SqlQueryParameterDatetimeRange DatetimeRange = null,
    SqlQueryParameterDatetimesec Datetimesec = null,
    SqlQueryParameterDatetimesecRange DatetimesecRange = null,
    SqlQueryParameterEnum Enum = null,
    SqlQueryParameterNumber Number = null,
    SqlQueryParameterQuery Query = null,
    SqlQueryParameterText Text = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#name SqlQuery#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.date">Date</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | date block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.dateRange">DateRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | date_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetime">Datetime</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | datetime block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimeRange">DatetimeRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | datetime_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesec">Datetimesec</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | datetimesec block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesecRange">DatetimesecRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | datetimesec_range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.enum">Enum</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | enum block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.number">Number</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | number block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.query">Query</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | query block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.text">Text</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | text block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#title SqlQuery#title}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#name SqlQuery#name}.

---

##### `Date`<sup>Optional</sup> <a name="Date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.date"></a>

```csharp
public SqlQueryParameterDate Date { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#date SqlQuery#date}

---

##### `DateRange`<sup>Optional</sup> <a name="DateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.dateRange"></a>

```csharp
public SqlQueryParameterDateRange DateRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

date_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#date_range SqlQuery#date_range}

---

##### `Datetime`<sup>Optional</sup> <a name="Datetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetime"></a>

```csharp
public SqlQueryParameterDatetime Datetime { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

datetime block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#datetime SqlQuery#datetime}

---

##### `DatetimeRange`<sup>Optional</sup> <a name="DatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimeRange"></a>

```csharp
public SqlQueryParameterDatetimeRange DatetimeRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

datetime_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#datetime_range SqlQuery#datetime_range}

---

##### `Datetimesec`<sup>Optional</sup> <a name="Datetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesec"></a>

```csharp
public SqlQueryParameterDatetimesec Datetimesec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

datetimesec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#datetimesec SqlQuery#datetimesec}

---

##### `DatetimesecRange`<sup>Optional</sup> <a name="DatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.datetimesecRange"></a>

```csharp
public SqlQueryParameterDatetimesecRange DatetimesecRange { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

datetimesec_range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#datetimesec_range SqlQuery#datetimesec_range}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.enum"></a>

```csharp
public SqlQueryParameterEnum Enum { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

enum block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#enum SqlQuery#enum}

---

##### `Number`<sup>Optional</sup> <a name="Number" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.number"></a>

```csharp
public SqlQueryParameterNumber Number { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#number SqlQuery#number}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.query"></a>

```csharp
public SqlQueryParameterQuery Query { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#query SqlQuery#query}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.text"></a>

```csharp
public SqlQueryParameterText Text { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#text SqlQuery#text}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameter.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#title SqlQuery#title}.

---

### SqlQueryParameterDate <a name="SqlQueryParameterDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDate {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDateRange <a name="SqlQueryParameterDateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDateRange {
    SqlQueryParameterDateRangeRange Range = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.range">Range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.range"></a>

```csharp
public SqlQueryParameterDateRangeRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDateRangeRange <a name="SqlQueryParameterDateRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDateRangeRange {
    string End,
    string Start
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.end">End</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.start">Start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.end"></a>

```csharp
public string End { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange.property.start"></a>

```csharp
public string Start { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterDatetime <a name="SqlQueryParameterDatetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDatetime {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimeRange <a name="SqlQueryParameterDatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDatetimeRange {
    SqlQueryParameterDatetimeRangeRange Range = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.range">Range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.range"></a>

```csharp
public SqlQueryParameterDatetimeRangeRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimeRangeRange <a name="SqlQueryParameterDatetimeRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDatetimeRangeRange {
    string End,
    string Start
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.end">End</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.start">Start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.end"></a>

```csharp
public string End { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange.property.start"></a>

```csharp
public string Start { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterDatetimesec <a name="SqlQueryParameterDatetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDatetimesec {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimesecRange <a name="SqlQueryParameterDatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDatetimesecRange {
    SqlQueryParameterDatetimesecRangeRange Range = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.range">Range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | range block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Range`<sup>Optional</sup> <a name="Range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.range"></a>

```csharp
public SqlQueryParameterDatetimesecRangeRange Range { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

range block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#range SqlQuery#range}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterDatetimesecRangeRange <a name="SqlQueryParameterDatetimesecRangeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDatetimesecRangeRange {
    string End,
    string Start
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.end">End</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#end SqlQuery#end}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.start">Start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#start SqlQuery#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.end"></a>

```csharp
public string End { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#end SqlQuery#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange.property.start"></a>

```csharp
public string Start { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#start SqlQuery#start}.

---

### SqlQueryParameterEnum <a name="SqlQueryParameterEnum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterEnum {
    string[] Options,
    SqlQueryParameterEnumMultiple Multiple = null,
    string Value = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.options">Options</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#options SqlQuery#options}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.multiple">Multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | multiple block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#values SqlQuery#values}. |

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.options"></a>

```csharp
public string[] Options { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#options SqlQuery#options}.

---

##### `Multiple`<sup>Optional</sup> <a name="Multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.multiple"></a>

```csharp
public SqlQueryParameterEnumMultiple Multiple { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

multiple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#multiple SqlQuery#multiple}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#values SqlQuery#values}.

---

### SqlQueryParameterEnumMultiple <a name="SqlQueryParameterEnumMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterEnumMultiple {
    string Separator,
    string Prefix = null,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.separator">Separator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#separator SqlQuery#separator}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#prefix SqlQuery#prefix}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.suffix">Suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#suffix SqlQuery#suffix}. |

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.separator"></a>

```csharp
public string Separator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#separator SqlQuery#separator}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#prefix SqlQuery#prefix}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#suffix SqlQuery#suffix}.

---

### SqlQueryParameterNumber <a name="SqlQueryParameterNumber" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterNumber {
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQueryParameterQuery <a name="SqlQueryParameterQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterQuery {
    string QueryId,
    SqlQueryParameterQueryMultiple Multiple = null,
    string Value = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.queryId">QueryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#query_id SqlQuery#query_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.multiple">Multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | multiple block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#values SqlQuery#values}. |

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.queryId"></a>

```csharp
public string QueryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#query_id SqlQuery#query_id}.

---

##### `Multiple`<sup>Optional</sup> <a name="Multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.multiple"></a>

```csharp
public SqlQueryParameterQueryMultiple Multiple { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

multiple block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#multiple SqlQuery#multiple}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#values SqlQuery#values}.

---

### SqlQueryParameterQueryMultiple <a name="SqlQueryParameterQueryMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterQueryMultiple {
    string Separator,
    string Prefix = null,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.separator">Separator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#separator SqlQuery#separator}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#prefix SqlQuery#prefix}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.suffix">Suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#suffix SqlQuery#suffix}. |

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.separator"></a>

```csharp
public string Separator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#separator SqlQuery#separator}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#prefix SqlQuery#prefix}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#suffix SqlQuery#suffix}.

---

### SqlQueryParameterText <a name="SqlQueryParameterText" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterText {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#value SqlQuery#value}.

---

### SqlQuerySchedule <a name="SqlQuerySchedule" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQuerySchedule {
    SqlQueryScheduleContinuous Continuous = null,
    SqlQueryScheduleDaily Daily = null,
    SqlQueryScheduleWeekly Weekly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.continuous">Continuous</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | continuous block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.daily">Daily</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | daily block. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.weekly">Weekly</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | weekly block. |

---

##### `Continuous`<sup>Optional</sup> <a name="Continuous" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.continuous"></a>

```csharp
public SqlQueryScheduleContinuous Continuous { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

continuous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#continuous SqlQuery#continuous}

---

##### `Daily`<sup>Optional</sup> <a name="Daily" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.daily"></a>

```csharp
public SqlQueryScheduleDaily Daily { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

daily block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#daily SqlQuery#daily}

---

##### `Weekly`<sup>Optional</sup> <a name="Weekly" id="@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule.property.weekly"></a>

```csharp
public SqlQueryScheduleWeekly Weekly { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

weekly block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#weekly SqlQuery#weekly}

---

### SqlQueryScheduleContinuous <a name="SqlQueryScheduleContinuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryScheduleContinuous {
    double IntervalSeconds,
    string UntilDate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#interval_seconds SqlQuery#interval_seconds}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.untilDate">UntilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#interval_seconds SqlQuery#interval_seconds}.

---

##### `UntilDate`<sup>Optional</sup> <a name="UntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous.property.untilDate"></a>

```csharp
public string UntilDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

### SqlQueryScheduleDaily <a name="SqlQueryScheduleDaily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryScheduleDaily {
    double IntervalDays,
    string TimeOfDay,
    string UntilDate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.intervalDays">IntervalDays</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#interval_days SqlQuery#interval_days}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.untilDate">UntilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `IntervalDays`<sup>Required</sup> <a name="IntervalDays" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.intervalDays"></a>

```csharp
public double IntervalDays { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#interval_days SqlQuery#interval_days}.

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}.

---

##### `UntilDate`<sup>Optional</sup> <a name="UntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily.property.untilDate"></a>

```csharp
public string UntilDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

### SqlQueryScheduleWeekly <a name="SqlQueryScheduleWeekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryScheduleWeekly {
    string DayOfWeek,
    double IntervalWeeks,
    string TimeOfDay,
    string UntilDate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#day_of_week SqlQuery#day_of_week}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.intervalWeeks">IntervalWeeks</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#interval_weeks SqlQuery#interval_weeks}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.untilDate">UntilDate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#until_date SqlQuery#until_date}. |

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#day_of_week SqlQuery#day_of_week}.

---

##### `IntervalWeeks`<sup>Required</sup> <a name="IntervalWeeks" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.intervalWeeks"></a>

```csharp
public double IntervalWeeks { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#interval_weeks SqlQuery#interval_weeks}.

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#time_of_day SqlQuery#time_of_day}.

---

##### `UntilDate`<sup>Optional</sup> <a name="UntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly.property.untilDate"></a>

```csharp
public string UntilDate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.58.0/docs/resources/sql_query#until_date SqlQuery#until_date}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlQueryParameterDateOutputReference <a name="SqlQueryParameterDateOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterDate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---


### SqlQueryParameterDateRangeOutputReference <a name="SqlQueryParameterDateRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDateRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange"></a>

```csharp
private void PutRange(SqlQueryParameterDateRangeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference">SqlQueryParameterDateRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.range"></a>

```csharp
public SqlQueryParameterDateRangeRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference">SqlQueryParameterDateRangeRangeOutputReference</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.rangeInput"></a>

```csharp
public SqlQueryParameterDateRangeRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterDateRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---


### SqlQueryParameterDateRangeRangeOutputReference <a name="SqlQueryParameterDateRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDateRangeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.endInput">EndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.startInput">StartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.endInput"></a>

```csharp
public string EndInput { get; }
```

- *Type:* string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.startInput"></a>

```csharp
public string StartInput { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRangeOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterDateRangeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeRange">SqlQueryParameterDateRangeRange</a>

---


### SqlQueryParameterDatetimeOutputReference <a name="SqlQueryParameterDatetimeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDatetimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterDatetime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---


### SqlQueryParameterDatetimeRangeOutputReference <a name="SqlQueryParameterDatetimeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDatetimeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange"></a>

```csharp
private void PutRange(SqlQueryParameterDatetimeRangeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference">SqlQueryParameterDatetimeRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.range"></a>

```csharp
public SqlQueryParameterDatetimeRangeRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference">SqlQueryParameterDatetimeRangeRangeOutputReference</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.rangeInput"></a>

```csharp
public SqlQueryParameterDatetimeRangeRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterDatetimeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---


### SqlQueryParameterDatetimeRangeRangeOutputReference <a name="SqlQueryParameterDatetimeRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDatetimeRangeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.endInput">EndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.startInput">StartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.endInput"></a>

```csharp
public string EndInput { get; }
```

- *Type:* string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.startInput"></a>

```csharp
public string StartInput { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRangeOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterDatetimeRangeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeRange">SqlQueryParameterDatetimeRangeRange</a>

---


### SqlQueryParameterDatetimesecOutputReference <a name="SqlQueryParameterDatetimesecOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDatetimesecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterDatetimesec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---


### SqlQueryParameterDatetimesecRangeOutputReference <a name="SqlQueryParameterDatetimesecRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDatetimesecRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange">PutRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetRange">ResetRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRange` <a name="PutRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange"></a>

```csharp
private void PutRange(SqlQueryParameterDatetimesecRangeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.putRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---

##### `ResetRange` <a name="ResetRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetRange"></a>

```csharp
private void ResetRange()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.range">Range</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference">SqlQueryParameterDatetimesecRangeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.rangeInput">RangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Range`<sup>Required</sup> <a name="Range" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.range"></a>

```csharp
public SqlQueryParameterDatetimesecRangeRangeOutputReference Range { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference">SqlQueryParameterDatetimesecRangeRangeOutputReference</a>

---

##### `RangeInput`<sup>Optional</sup> <a name="RangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.rangeInput"></a>

```csharp
public SqlQueryParameterDatetimesecRangeRange RangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterDatetimesecRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---


### SqlQueryParameterDatetimesecRangeRangeOutputReference <a name="SqlQueryParameterDatetimesecRangeRangeOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterDatetimesecRangeRangeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.endInput">EndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.startInput">StartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.endInput"></a>

```csharp
public string EndInput { get; }
```

- *Type:* string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.startInput"></a>

```csharp
public string StartInput { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRangeOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterDatetimesecRangeRange InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeRange">SqlQueryParameterDatetimesecRangeRange</a>

---


### SqlQueryParameterEnumMultipleOutputReference <a name="SqlQueryParameterEnumMultipleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterEnumMultipleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separatorInput">SeparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separator">Separator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `SeparatorInput`<sup>Optional</sup> <a name="SeparatorInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separatorInput"></a>

```csharp
public string SeparatorInput { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.separator"></a>

```csharp
public string Separator { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterEnumMultiple InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---


### SqlQueryParameterEnumOutputReference <a name="SqlQueryParameterEnumOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterEnumOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple">PutMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetMultiple">ResetMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiple` <a name="PutMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple"></a>

```csharp
private void PutMultiple(SqlQueryParameterEnumMultiple Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.putMultiple.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---

##### `ResetMultiple` <a name="ResetMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetMultiple"></a>

```csharp
private void ResetMultiple()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multiple">Multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference">SqlQueryParameterEnumMultipleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multipleInput">MultipleInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.optionsInput">OptionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.options">Options</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Multiple`<sup>Required</sup> <a name="Multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multiple"></a>

```csharp
public SqlQueryParameterEnumMultipleOutputReference Multiple { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultipleOutputReference">SqlQueryParameterEnumMultipleOutputReference</a>

---

##### `MultipleInput`<sup>Optional</sup> <a name="MultipleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.multipleInput"></a>

```csharp
public SqlQueryParameterEnumMultiple MultipleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumMultiple">SqlQueryParameterEnumMultiple</a>

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.optionsInput"></a>

```csharp
public string[] OptionsInput { get; }
```

- *Type:* string[]

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.options"></a>

```csharp
public string[] Options { get; }
```

- *Type:* string[]

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterEnum InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---


### SqlQueryParameterList <a name="SqlQueryParameterList" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get"></a>

```csharp
private SqlQueryParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlQueryParameterNumberOutputReference <a name="SqlQueryParameterNumberOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterNumberOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterNumber InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---


### SqlQueryParameterOutputReference <a name="SqlQueryParameterOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate">PutDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange">PutDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime">PutDatetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange">PutDatetimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec">PutDatetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange">PutDatetimesecRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum">PutEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber">PutNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery">PutQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText">PutText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDate">ResetDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDateRange">ResetDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetime">ResetDatetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimeRange">ResetDatetimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesec">ResetDatetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesecRange">ResetDatetimesecRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetNumber">ResetNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDate` <a name="PutDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate"></a>

```csharp
private void PutDate(SqlQueryParameterDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---

##### `PutDateRange` <a name="PutDateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange"></a>

```csharp
private void PutDateRange(SqlQueryParameterDateRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDateRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---

##### `PutDatetime` <a name="PutDatetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime"></a>

```csharp
private void PutDatetime(SqlQueryParameterDatetime Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---

##### `PutDatetimeRange` <a name="PutDatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange"></a>

```csharp
private void PutDatetimeRange(SqlQueryParameterDatetimeRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimeRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---

##### `PutDatetimesec` <a name="PutDatetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec"></a>

```csharp
private void PutDatetimesec(SqlQueryParameterDatetimesec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---

##### `PutDatetimesecRange` <a name="PutDatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange"></a>

```csharp
private void PutDatetimesecRange(SqlQueryParameterDatetimesecRange Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putDatetimesecRange.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---

##### `PutEnum` <a name="PutEnum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum"></a>

```csharp
private void PutEnum(SqlQueryParameterEnum Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putEnum.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---

##### `PutNumber` <a name="PutNumber" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber"></a>

```csharp
private void PutNumber(SqlQueryParameterNumber Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putNumber.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---

##### `PutQuery` <a name="PutQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery"></a>

```csharp
private void PutQuery(SqlQueryParameterQuery Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putQuery.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---

##### `PutText` <a name="PutText" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText"></a>

```csharp
private void PutText(SqlQueryParameterText Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---

##### `ResetDate` <a name="ResetDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDate"></a>

```csharp
private void ResetDate()
```

##### `ResetDateRange` <a name="ResetDateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDateRange"></a>

```csharp
private void ResetDateRange()
```

##### `ResetDatetime` <a name="ResetDatetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetime"></a>

```csharp
private void ResetDatetime()
```

##### `ResetDatetimeRange` <a name="ResetDatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimeRange"></a>

```csharp
private void ResetDatetimeRange()
```

##### `ResetDatetimesec` <a name="ResetDatetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesec"></a>

```csharp
private void ResetDatetimesec()
```

##### `ResetDatetimesecRange` <a name="ResetDatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetDatetimesecRange"></a>

```csharp
private void ResetDatetimesecRange()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetEnum"></a>

```csharp
private void ResetEnum()
```

##### `ResetNumber` <a name="ResetNumber" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetNumber"></a>

```csharp
private void ResetNumber()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetQuery"></a>

```csharp
private void ResetQuery()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.date">Date</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference">SqlQueryParameterDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRange">DateRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference">SqlQueryParameterDateRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetime">Datetime</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference">SqlQueryParameterDatetimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRange">DatetimeRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference">SqlQueryParameterDatetimeRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesec">Datetimesec</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference">SqlQueryParameterDatetimesecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRange">DatetimesecRange</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference">SqlQueryParameterDatetimesecRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enum">Enum</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference">SqlQueryParameterEnumOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.number">Number</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference">SqlQueryParameterNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.query">Query</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference">SqlQueryParameterQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.text">Text</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference">SqlQueryParameterTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateInput">DateInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRangeInput">DateRangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeInput">DatetimeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRangeInput">DatetimeRangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecInput">DatetimesecInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRangeInput">DatetimesecRangeInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enumInput">EnumInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.numberInput">NumberInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.queryInput">QueryInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.textInput">TextInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Date`<sup>Required</sup> <a name="Date" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.date"></a>

```csharp
public SqlQueryParameterDateOutputReference Date { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateOutputReference">SqlQueryParameterDateOutputReference</a>

---

##### `DateRange`<sup>Required</sup> <a name="DateRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRange"></a>

```csharp
public SqlQueryParameterDateRangeOutputReference DateRange { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRangeOutputReference">SqlQueryParameterDateRangeOutputReference</a>

---

##### `Datetime`<sup>Required</sup> <a name="Datetime" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetime"></a>

```csharp
public SqlQueryParameterDatetimeOutputReference Datetime { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeOutputReference">SqlQueryParameterDatetimeOutputReference</a>

---

##### `DatetimeRange`<sup>Required</sup> <a name="DatetimeRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRange"></a>

```csharp
public SqlQueryParameterDatetimeRangeOutputReference DatetimeRange { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRangeOutputReference">SqlQueryParameterDatetimeRangeOutputReference</a>

---

##### `Datetimesec`<sup>Required</sup> <a name="Datetimesec" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesec"></a>

```csharp
public SqlQueryParameterDatetimesecOutputReference Datetimesec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecOutputReference">SqlQueryParameterDatetimesecOutputReference</a>

---

##### `DatetimesecRange`<sup>Required</sup> <a name="DatetimesecRange" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRange"></a>

```csharp
public SqlQueryParameterDatetimesecRangeOutputReference DatetimesecRange { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRangeOutputReference">SqlQueryParameterDatetimesecRangeOutputReference</a>

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enum"></a>

```csharp
public SqlQueryParameterEnumOutputReference Enum { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnumOutputReference">SqlQueryParameterEnumOutputReference</a>

---

##### `Number`<sup>Required</sup> <a name="Number" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.number"></a>

```csharp
public SqlQueryParameterNumberOutputReference Number { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumberOutputReference">SqlQueryParameterNumberOutputReference</a>

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.query"></a>

```csharp
public SqlQueryParameterQueryOutputReference Query { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference">SqlQueryParameterQueryOutputReference</a>

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.text"></a>

```csharp
public SqlQueryParameterTextOutputReference Text { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference">SqlQueryParameterTextOutputReference</a>

---

##### `DateInput`<sup>Optional</sup> <a name="DateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateInput"></a>

```csharp
public SqlQueryParameterDate DateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDate">SqlQueryParameterDate</a>

---

##### `DateRangeInput`<sup>Optional</sup> <a name="DateRangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.dateRangeInput"></a>

```csharp
public SqlQueryParameterDateRange DateRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDateRange">SqlQueryParameterDateRange</a>

---

##### `DatetimeInput`<sup>Optional</sup> <a name="DatetimeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeInput"></a>

```csharp
public SqlQueryParameterDatetime DatetimeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetime">SqlQueryParameterDatetime</a>

---

##### `DatetimeRangeInput`<sup>Optional</sup> <a name="DatetimeRangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimeRangeInput"></a>

```csharp
public SqlQueryParameterDatetimeRange DatetimeRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimeRange">SqlQueryParameterDatetimeRange</a>

---

##### `DatetimesecInput`<sup>Optional</sup> <a name="DatetimesecInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecInput"></a>

```csharp
public SqlQueryParameterDatetimesec DatetimesecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesec">SqlQueryParameterDatetimesec</a>

---

##### `DatetimesecRangeInput`<sup>Optional</sup> <a name="DatetimesecRangeInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.datetimesecRangeInput"></a>

```csharp
public SqlQueryParameterDatetimesecRange DatetimesecRangeInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterDatetimesecRange">SqlQueryParameterDatetimesecRange</a>

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.enumInput"></a>

```csharp
public SqlQueryParameterEnum EnumInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterEnum">SqlQueryParameterEnum</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NumberInput`<sup>Optional</sup> <a name="NumberInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.numberInput"></a>

```csharp
public SqlQueryParameterNumber NumberInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterNumber">SqlQueryParameterNumber</a>

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.queryInput"></a>

```csharp
public SqlQueryParameterQuery QueryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.textInput"></a>

```csharp
public SqlQueryParameterText TextInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlQueryParameterQueryMultipleOutputReference <a name="SqlQueryParameterQueryMultipleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterQueryMultipleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separatorInput">SeparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separator">Separator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `SeparatorInput`<sup>Optional</sup> <a name="SeparatorInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separatorInput"></a>

```csharp
public string SeparatorInput { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.separator"></a>

```csharp
public string Separator { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterQueryMultiple InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---


### SqlQueryParameterQueryOutputReference <a name="SqlQueryParameterQueryOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterQueryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple">PutMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetMultiple">ResetMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiple` <a name="PutMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple"></a>

```csharp
private void PutMultiple(SqlQueryParameterQueryMultiple Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.putMultiple.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---

##### `ResetMultiple` <a name="ResetMultiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetMultiple"></a>

```csharp
private void ResetMultiple()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multiple">Multiple</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference">SqlQueryParameterQueryMultipleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multipleInput">MultipleInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryIdInput">QueryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryId">QueryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Multiple`<sup>Required</sup> <a name="Multiple" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multiple"></a>

```csharp
public SqlQueryParameterQueryMultipleOutputReference Multiple { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultipleOutputReference">SqlQueryParameterQueryMultipleOutputReference</a>

---

##### `MultipleInput`<sup>Optional</sup> <a name="MultipleInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.multipleInput"></a>

```csharp
public SqlQueryParameterQueryMultiple MultipleInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryMultiple">SqlQueryParameterQueryMultiple</a>

---

##### `QueryIdInput`<sup>Optional</sup> <a name="QueryIdInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryIdInput"></a>

```csharp
public string QueryIdInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.queryId"></a>

```csharp
public string QueryId { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQueryOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterQuery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterQuery">SqlQueryParameterQuery</a>

---


### SqlQueryParameterTextOutputReference <a name="SqlQueryParameterTextOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryParameterTextOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryParameterTextOutputReference.property.internalValue"></a>

```csharp
public SqlQueryParameterText InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryParameterText">SqlQueryParameterText</a>

---


### SqlQueryScheduleContinuousOutputReference <a name="SqlQueryScheduleContinuousOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryScheduleContinuousOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resetUntilDate">ResetUntilDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUntilDate` <a name="ResetUntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.resetUntilDate"></a>

```csharp
private void ResetUntilDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDateInput">UntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDate">UntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `UntilDateInput`<sup>Optional</sup> <a name="UntilDateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDateInput"></a>

```csharp
public string UntilDateInput { get; }
```

- *Type:* string

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `UntilDate`<sup>Required</sup> <a name="UntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.untilDate"></a>

```csharp
public string UntilDate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference.property.internalValue"></a>

```csharp
public SqlQueryScheduleContinuous InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---


### SqlQueryScheduleDailyOutputReference <a name="SqlQueryScheduleDailyOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryScheduleDailyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resetUntilDate">ResetUntilDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUntilDate` <a name="ResetUntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.resetUntilDate"></a>

```csharp
private void ResetUntilDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDaysInput">IntervalDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDateInput">UntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDays">IntervalDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDate">UntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IntervalDaysInput`<sup>Optional</sup> <a name="IntervalDaysInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDaysInput"></a>

```csharp
public double IntervalDaysInput { get; }
```

- *Type:* double

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDayInput"></a>

```csharp
public string TimeOfDayInput { get; }
```

- *Type:* string

---

##### `UntilDateInput`<sup>Optional</sup> <a name="UntilDateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDateInput"></a>

```csharp
public string UntilDateInput { get; }
```

- *Type:* string

---

##### `IntervalDays`<sup>Required</sup> <a name="IntervalDays" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.intervalDays"></a>

```csharp
public double IntervalDays { get; }
```

- *Type:* double

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; }
```

- *Type:* string

---

##### `UntilDate`<sup>Required</sup> <a name="UntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.untilDate"></a>

```csharp
public string UntilDate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference.property.internalValue"></a>

```csharp
public SqlQueryScheduleDaily InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---


### SqlQueryScheduleOutputReference <a name="SqlQueryScheduleOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous">PutContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily">PutDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly">PutWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetContinuous">ResetContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetDaily">ResetDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetWeekly">ResetWeekly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutContinuous` <a name="PutContinuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous"></a>

```csharp
private void PutContinuous(SqlQueryScheduleContinuous Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putContinuous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---

##### `PutDaily` <a name="PutDaily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily"></a>

```csharp
private void PutDaily(SqlQueryScheduleDaily Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putDaily.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---

##### `PutWeekly` <a name="PutWeekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly"></a>

```csharp
private void PutWeekly(SqlQueryScheduleWeekly Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.putWeekly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---

##### `ResetContinuous` <a name="ResetContinuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetContinuous"></a>

```csharp
private void ResetContinuous()
```

##### `ResetDaily` <a name="ResetDaily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetDaily"></a>

```csharp
private void ResetDaily()
```

##### `ResetWeekly` <a name="ResetWeekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.resetWeekly"></a>

```csharp
private void ResetWeekly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuous">Continuous</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference">SqlQueryScheduleContinuousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.daily">Daily</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference">SqlQueryScheduleDailyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weekly">Weekly</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference">SqlQueryScheduleWeeklyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuousInput">ContinuousInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.dailyInput">DailyInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weeklyInput">WeeklyInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Continuous`<sup>Required</sup> <a name="Continuous" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuous"></a>

```csharp
public SqlQueryScheduleContinuousOutputReference Continuous { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuousOutputReference">SqlQueryScheduleContinuousOutputReference</a>

---

##### `Daily`<sup>Required</sup> <a name="Daily" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.daily"></a>

```csharp
public SqlQueryScheduleDailyOutputReference Daily { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDailyOutputReference">SqlQueryScheduleDailyOutputReference</a>

---

##### `Weekly`<sup>Required</sup> <a name="Weekly" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weekly"></a>

```csharp
public SqlQueryScheduleWeeklyOutputReference Weekly { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference">SqlQueryScheduleWeeklyOutputReference</a>

---

##### `ContinuousInput`<sup>Optional</sup> <a name="ContinuousInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.continuousInput"></a>

```csharp
public SqlQueryScheduleContinuous ContinuousInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleContinuous">SqlQueryScheduleContinuous</a>

---

##### `DailyInput`<sup>Optional</sup> <a name="DailyInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.dailyInput"></a>

```csharp
public SqlQueryScheduleDaily DailyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleDaily">SqlQueryScheduleDaily</a>

---

##### `WeeklyInput`<sup>Optional</sup> <a name="WeeklyInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.weeklyInput"></a>

```csharp
public SqlQueryScheduleWeekly WeeklyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleOutputReference.property.internalValue"></a>

```csharp
public SqlQuerySchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQuerySchedule">SqlQuerySchedule</a>

---


### SqlQueryScheduleWeeklyOutputReference <a name="SqlQueryScheduleWeeklyOutputReference" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlQueryScheduleWeeklyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resetUntilDate">ResetUntilDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUntilDate` <a name="ResetUntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.resetUntilDate"></a>

```csharp
private void ResetUntilDate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeekInput">DayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeksInput">IntervalWeeksInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDayInput">TimeOfDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDateInput">UntilDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeek">DayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeks">IntervalWeeks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDay">TimeOfDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDate">UntilDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayOfWeekInput`<sup>Optional</sup> <a name="DayOfWeekInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeekInput"></a>

```csharp
public string DayOfWeekInput { get; }
```

- *Type:* string

---

##### `IntervalWeeksInput`<sup>Optional</sup> <a name="IntervalWeeksInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeksInput"></a>

```csharp
public double IntervalWeeksInput { get; }
```

- *Type:* double

---

##### `TimeOfDayInput`<sup>Optional</sup> <a name="TimeOfDayInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDayInput"></a>

```csharp
public string TimeOfDayInput { get; }
```

- *Type:* string

---

##### `UntilDateInput`<sup>Optional</sup> <a name="UntilDateInput" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDateInput"></a>

```csharp
public string UntilDateInput { get; }
```

- *Type:* string

---

##### `DayOfWeek`<sup>Required</sup> <a name="DayOfWeek" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.dayOfWeek"></a>

```csharp
public string DayOfWeek { get; }
```

- *Type:* string

---

##### `IntervalWeeks`<sup>Required</sup> <a name="IntervalWeeks" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.intervalWeeks"></a>

```csharp
public double IntervalWeeks { get; }
```

- *Type:* double

---

##### `TimeOfDay`<sup>Required</sup> <a name="TimeOfDay" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.timeOfDay"></a>

```csharp
public string TimeOfDay { get; }
```

- *Type:* string

---

##### `UntilDate`<sup>Required</sup> <a name="UntilDate" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.untilDate"></a>

```csharp
public string UntilDate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeeklyOutputReference.property.internalValue"></a>

```csharp
public SqlQueryScheduleWeekly InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlQuery.SqlQueryScheduleWeekly">SqlQueryScheduleWeekly</a>

---



