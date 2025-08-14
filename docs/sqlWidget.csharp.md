# `sqlWidget` Submodule <a name="`sqlWidget` Submodule" id="@cdktf/provider-databricks.sqlWidget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlWidget <a name="SqlWidget" id="@cdktf/provider-databricks.sqlWidget.SqlWidget"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget databricks_sql_widget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlWidget(Construct Scope, string Id, SqlWidgetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig">SqlWidgetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig">SqlWidgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition">PutPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetVisualizationId">ResetVisualizationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetWidgetId">ResetWidgetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putParameter"></a>

```csharp
private void PutParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putParameter.parameter.value"></a>

- *Type:* object

---

##### `PutPosition` <a name="PutPosition" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition"></a>

```csharp
private void PutPosition(SqlWidgetPosition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetParameter"></a>

```csharp
private void ResetParameter()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetTitle"></a>

```csharp
private void ResetTitle()
```

##### `ResetVisualizationId` <a name="ResetVisualizationId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetVisualizationId"></a>

```csharp
private void ResetVisualizationId()
```

##### `ResetWidgetId` <a name="ResetWidgetId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetWidgetId"></a>

```csharp
private void ResetWidgetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqlWidget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlWidget.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlWidget.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlWidget.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

SqlWidget.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a SqlWidget resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SqlWidget to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SqlWidget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the SqlWidget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList">SqlWidgetParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.position">Position</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference">SqlWidgetPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardIdInput">DashboardIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameterInput">ParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.positionInput">PositionInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationIdInput">VisualizationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetIdInput">WidgetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardId">DashboardId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationId">VisualizationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetId">WidgetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameter"></a>

```csharp
public SqlWidgetParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList">SqlWidgetParameterList</a>

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.position"></a>

```csharp
public SqlWidgetPositionOutputReference Position { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference">SqlWidgetPositionOutputReference</a>

---

##### `DashboardIdInput`<sup>Optional</sup> <a name="DashboardIdInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardIdInput"></a>

```csharp
public string DashboardIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameterInput"></a>

```csharp
public object ParameterInput { get; }
```

- *Type:* object

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.positionInput"></a>

```csharp
public SqlWidgetPosition PositionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `VisualizationIdInput`<sup>Optional</sup> <a name="VisualizationIdInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationIdInput"></a>

```csharp
public string VisualizationIdInput { get; }
```

- *Type:* string

---

##### `WidgetIdInput`<sup>Optional</sup> <a name="WidgetIdInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetIdInput"></a>

```csharp
public string WidgetIdInput { get; }
```

- *Type:* string

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardId"></a>

```csharp
public string DashboardId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `VisualizationId`<sup>Required</sup> <a name="VisualizationId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationId"></a>

```csharp
public string VisualizationId { get; }
```

- *Type:* string

---

##### `WidgetId`<sup>Required</sup> <a name="WidgetId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetId"></a>

```csharp
public string WidgetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlWidgetConfig <a name="SqlWidgetConfig" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlWidgetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DashboardId,
    string Description = null,
    string Id = null,
    object Parameter = null,
    SqlWidgetPosition Position = null,
    string Text = null,
    string Title = null,
    string VisualizationId = null,
    string WidgetId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dashboardId">DashboardId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#description SqlWidget#description}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#id SqlWidget#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.parameter">Parameter</a></code> | <code>object</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.position">Position</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | position block. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.text">Text</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#text SqlWidget#text}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#title SqlWidget#title}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.visualizationId">VisualizationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.widgetId">WidgetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#widget_id SqlWidget#widget_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dashboardId"></a>

```csharp
public string DashboardId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#description SqlWidget#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#id SqlWidget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.parameter"></a>

```csharp
public object Parameter { get; set; }
```

- *Type:* object

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#parameter SqlWidget#parameter}

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.position"></a>

```csharp
public SqlWidgetPosition Position { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

position block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#position SqlWidget#position}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#text SqlWidget#text}.

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#title SqlWidget#title}.

---

##### `VisualizationId`<sup>Optional</sup> <a name="VisualizationId" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.visualizationId"></a>

```csharp
public string VisualizationId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}.

---

##### `WidgetId`<sup>Optional</sup> <a name="WidgetId" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.widgetId"></a>

```csharp
public string WidgetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#widget_id SqlWidget#widget_id}.

---

### SqlWidgetParameter <a name="SqlWidgetParameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlWidgetParameter {
    string Name,
    string Type,
    string MapTo = null,
    string Title = null,
    string Value = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#name SqlWidget#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#type SqlWidget#type}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.mapTo">MapTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#map_to SqlWidget#map_to}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#title SqlWidget#title}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#value SqlWidget#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#values SqlWidget#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#name SqlWidget#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#type SqlWidget#type}.

---

##### `MapTo`<sup>Optional</sup> <a name="MapTo" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.mapTo"></a>

```csharp
public string MapTo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#map_to SqlWidget#map_to}.

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#title SqlWidget#title}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#value SqlWidget#value}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#values SqlWidget#values}.

---

### SqlWidgetPosition <a name="SqlWidgetPosition" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlWidgetPosition {
    double SizeX,
    double SizeY,
    object AutoHeight = null,
    double PosX = null,
    double PosY = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeX">SizeX</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#size_x SqlWidget#size_x}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeY">SizeY</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#size_y SqlWidget#size_y}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.autoHeight">AutoHeight</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#auto_height SqlWidget#auto_height}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posX">PosX</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#pos_x SqlWidget#pos_x}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posY">PosY</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#pos_y SqlWidget#pos_y}. |

---

##### `SizeX`<sup>Required</sup> <a name="SizeX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeX"></a>

```csharp
public double SizeX { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#size_x SqlWidget#size_x}.

---

##### `SizeY`<sup>Required</sup> <a name="SizeY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeY"></a>

```csharp
public double SizeY { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#size_y SqlWidget#size_y}.

---

##### `AutoHeight`<sup>Optional</sup> <a name="AutoHeight" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.autoHeight"></a>

```csharp
public object AutoHeight { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#auto_height SqlWidget#auto_height}.

---

##### `PosX`<sup>Optional</sup> <a name="PosX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posX"></a>

```csharp
public double PosX { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#pos_x SqlWidget#pos_x}.

---

##### `PosY`<sup>Optional</sup> <a name="PosY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posY"></a>

```csharp
public double PosY { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.87.1/docs/resources/sql_widget#pos_y SqlWidget#pos_y}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlWidgetParameterList <a name="SqlWidgetParameterList" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlWidgetParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.get"></a>

```csharp
private SqlWidgetParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlWidgetParameterOutputReference <a name="SqlWidgetParameterOutputReference" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlWidgetParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetMapTo">ResetMapTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMapTo` <a name="ResetMapTo" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetMapTo"></a>

```csharp
private void ResetMapTo()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapToInput">MapToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapTo">MapTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MapToInput`<sup>Optional</sup> <a name="MapToInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapToInput"></a>

```csharp
public string MapToInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `MapTo`<sup>Required</sup> <a name="MapTo" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapTo"></a>

```csharp
public string MapTo { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SqlWidgetPositionOutputReference <a name="SqlWidgetPositionOutputReference" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new SqlWidgetPositionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetAutoHeight">ResetAutoHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosX">ResetPosX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosY">ResetPosY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoHeight` <a name="ResetAutoHeight" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetAutoHeight"></a>

```csharp
private void ResetAutoHeight()
```

##### `ResetPosX` <a name="ResetPosX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosX"></a>

```csharp
private void ResetPosX()
```

##### `ResetPosY` <a name="ResetPosY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosY"></a>

```csharp
private void ResetPosY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeightInput">AutoHeightInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posXInput">PosXInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posYInput">PosYInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeXInput">SizeXInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeYInput">SizeYInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeight">AutoHeight</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posX">PosX</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posY">PosY</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeX">SizeX</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeY">SizeY</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AutoHeightInput`<sup>Optional</sup> <a name="AutoHeightInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeightInput"></a>

```csharp
public object AutoHeightInput { get; }
```

- *Type:* object

---

##### `PosXInput`<sup>Optional</sup> <a name="PosXInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posXInput"></a>

```csharp
public double PosXInput { get; }
```

- *Type:* double

---

##### `PosYInput`<sup>Optional</sup> <a name="PosYInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posYInput"></a>

```csharp
public double PosYInput { get; }
```

- *Type:* double

---

##### `SizeXInput`<sup>Optional</sup> <a name="SizeXInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeXInput"></a>

```csharp
public double SizeXInput { get; }
```

- *Type:* double

---

##### `SizeYInput`<sup>Optional</sup> <a name="SizeYInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeYInput"></a>

```csharp
public double SizeYInput { get; }
```

- *Type:* double

---

##### `AutoHeight`<sup>Required</sup> <a name="AutoHeight" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeight"></a>

```csharp
public object AutoHeight { get; }
```

- *Type:* object

---

##### `PosX`<sup>Required</sup> <a name="PosX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posX"></a>

```csharp
public double PosX { get; }
```

- *Type:* double

---

##### `PosY`<sup>Required</sup> <a name="PosY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posY"></a>

```csharp
public double PosY { get; }
```

- *Type:* double

---

##### `SizeX`<sup>Required</sup> <a name="SizeX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeX"></a>

```csharp
public double SizeX { get; }
```

- *Type:* double

---

##### `SizeY`<sup>Required</sup> <a name="SizeY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeY"></a>

```csharp
public double SizeY { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.internalValue"></a>

```csharp
public SqlWidgetPosition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---



