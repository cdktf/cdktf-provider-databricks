# `query` Submodule <a name="`query` Submodule" id="@cdktf/provider-databricks.query"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Query <a name="Query" id="@cdktf/provider-databricks.query.Query"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query databricks_query}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.Query.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new Query(Construct Scope, string Id, QueryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.query.Query.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryConfig">QueryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.query.Query.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryConfig">QueryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.query.Query.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.query.Query.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.query.Query.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.query.Query.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.query.Query.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetApplyAutoLimit">ResetApplyAutoLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetOwnerUserName">ResetOwnerUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetParentPath">ResetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetRunAsMode">ResetRunAsMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.Query.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.query.Query.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.query.Query.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.Query.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.query.Query.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.query.Query.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.query.Query.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.query.Query.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.query.Query.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.query.Query.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.query.Query.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.query.Query.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.Query.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.Query.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.Query.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.Query.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.Query.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.Query.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.Query.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.Query.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.Query.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.Query.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.Query.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.Query.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.Query.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.Query.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.Query.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.query.Query.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.query.Query.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.query.Query.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.query.Query.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.Query.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.Query.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.query.Query.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.query.Query.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.query.Query.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.query.Query.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.query.Query.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.query.Query.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.query.Query.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-databricks.query.Query.putParameter"></a>

```csharp
private void PutParameter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.Query.putParameter.parameter.value"></a>

- *Type:* object

---

##### `ResetApplyAutoLimit` <a name="ResetApplyAutoLimit" id="@cdktf/provider-databricks.query.Query.resetApplyAutoLimit"></a>

```csharp
private void ResetApplyAutoLimit()
```

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-databricks.query.Query.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.query.Query.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetOwnerUserName` <a name="ResetOwnerUserName" id="@cdktf/provider-databricks.query.Query.resetOwnerUserName"></a>

```csharp
private void ResetOwnerUserName()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-databricks.query.Query.resetParameter"></a>

```csharp
private void ResetParameter()
```

##### `ResetParentPath` <a name="ResetParentPath" id="@cdktf/provider-databricks.query.Query.resetParentPath"></a>

```csharp
private void ResetParentPath()
```

##### `ResetRunAsMode` <a name="ResetRunAsMode" id="@cdktf/provider-databricks.query.Query.resetRunAsMode"></a>

```csharp
private void ResetRunAsMode()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-databricks.query.Query.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-databricks.query.Query.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.query.Query.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Query resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.query.Query.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Query.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.query.Query.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.query.Query.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Query.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.query.Query.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.query.Query.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Query.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.query.Query.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.query.Query.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

Query.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a Query resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Query to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Query that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.query.Query.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the Query to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lastModifierUserName">LastModifierUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterList">QueryParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.applyAutoLimitInput">ApplyAutoLimitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.ownerUserNameInput">OwnerUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parameterInput">ParameterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parentPathInput">ParentPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.queryTextInput">QueryTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.runAsModeInput">RunAsModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.schemaInput">SchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.warehouseIdInput">WarehouseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.applyAutoLimit">ApplyAutoLimit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.ownerUserName">OwnerUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.parentPath">ParentPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.queryText">QueryText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.runAsMode">RunAsMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.warehouseId">WarehouseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.query.Query.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.query.Query.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.Query.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.query.Query.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.query.Query.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.query.Query.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.query.Query.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.query.Query.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.query.Query.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.query.Query.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.query.Query.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.query.Query.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.query.Query.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.query.Query.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.query.Query.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.query.Query.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastModifierUserName`<sup>Required</sup> <a name="LastModifierUserName" id="@cdktf/provider-databricks.query.Query.property.lastModifierUserName"></a>

```csharp
public string LastModifierUserName { get; }
```

- *Type:* string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-databricks.query.Query.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-databricks.query.Query.property.parameter"></a>

```csharp
public QueryParameterList Parameter { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterList">QueryParameterList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.query.Query.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ApplyAutoLimitInput`<sup>Optional</sup> <a name="ApplyAutoLimitInput" id="@cdktf/provider-databricks.query.Query.property.applyAutoLimitInput"></a>

```csharp
public object ApplyAutoLimitInput { get; }
```

- *Type:* object

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-databricks.query.Query.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.query.Query.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-databricks.query.Query.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `OwnerUserNameInput`<sup>Optional</sup> <a name="OwnerUserNameInput" id="@cdktf/provider-databricks.query.Query.property.ownerUserNameInput"></a>

```csharp
public string OwnerUserNameInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-databricks.query.Query.property.parameterInput"></a>

```csharp
public object ParameterInput { get; }
```

- *Type:* object

---

##### `ParentPathInput`<sup>Optional</sup> <a name="ParentPathInput" id="@cdktf/provider-databricks.query.Query.property.parentPathInput"></a>

```csharp
public string ParentPathInput { get; }
```

- *Type:* string

---

##### `QueryTextInput`<sup>Optional</sup> <a name="QueryTextInput" id="@cdktf/provider-databricks.query.Query.property.queryTextInput"></a>

```csharp
public string QueryTextInput { get; }
```

- *Type:* string

---

##### `RunAsModeInput`<sup>Optional</sup> <a name="RunAsModeInput" id="@cdktf/provider-databricks.query.Query.property.runAsModeInput"></a>

```csharp
public string RunAsModeInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-databricks.query.Query.property.schemaInput"></a>

```csharp
public string SchemaInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-databricks.query.Query.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `WarehouseIdInput`<sup>Optional</sup> <a name="WarehouseIdInput" id="@cdktf/provider-databricks.query.Query.property.warehouseIdInput"></a>

```csharp
public string WarehouseIdInput { get; }
```

- *Type:* string

---

##### `ApplyAutoLimit`<sup>Required</sup> <a name="ApplyAutoLimit" id="@cdktf/provider-databricks.query.Query.property.applyAutoLimit"></a>

```csharp
public object ApplyAutoLimit { get; }
```

- *Type:* object

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-databricks.query.Query.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.query.Query.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.query.Query.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `OwnerUserName`<sup>Required</sup> <a name="OwnerUserName" id="@cdktf/provider-databricks.query.Query.property.ownerUserName"></a>

```csharp
public string OwnerUserName { get; }
```

- *Type:* string

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktf/provider-databricks.query.Query.property.parentPath"></a>

```csharp
public string ParentPath { get; }
```

- *Type:* string

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="@cdktf/provider-databricks.query.Query.property.queryText"></a>

```csharp
public string QueryText { get; }
```

- *Type:* string

---

##### `RunAsMode`<sup>Required</sup> <a name="RunAsMode" id="@cdktf/provider-databricks.query.Query.property.runAsMode"></a>

```csharp
public string RunAsMode { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-databricks.query.Query.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-databricks.query.Query.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.query.Query.property.warehouseId"></a>

```csharp
public string WarehouseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.Query.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.query.Query.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QueryConfig <a name="QueryConfig" id="@cdktf/provider-databricks.query.QueryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string QueryText,
    string WarehouseId,
    object ApplyAutoLimit = null,
    string Catalog = null,
    string Description = null,
    string OwnerUserName = null,
    object Parameter = null,
    string ParentPath = null,
    string RunAsMode = null,
    string Schema = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#display_name Query#display_name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.queryText">QueryText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#query_text Query#query_text}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.warehouseId">WarehouseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#warehouse_id Query#warehouse_id}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.applyAutoLimit">ApplyAutoLimit</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.catalog">Catalog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#catalog Query#catalog}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#description Query#description}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.ownerUserName">OwnerUserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#owner_user_name Query#owner_user_name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.parameter">Parameter</a></code> | <code>object</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.parentPath">ParentPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#parent_path Query#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.runAsMode">RunAsMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#run_as_mode Query#run_as_mode}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.schema">Schema</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#schema Query#schema}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#tags Query#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.query.QueryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.query.QueryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.query.QueryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.query.QueryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.query.QueryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.query.QueryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.query.QueryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.query.QueryConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#display_name Query#display_name}.

---

##### `QueryText`<sup>Required</sup> <a name="QueryText" id="@cdktf/provider-databricks.query.QueryConfig.property.queryText"></a>

```csharp
public string QueryText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#query_text Query#query_text}.

---

##### `WarehouseId`<sup>Required</sup> <a name="WarehouseId" id="@cdktf/provider-databricks.query.QueryConfig.property.warehouseId"></a>

```csharp
public string WarehouseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#warehouse_id Query#warehouse_id}.

---

##### `ApplyAutoLimit`<sup>Optional</sup> <a name="ApplyAutoLimit" id="@cdktf/provider-databricks.query.QueryConfig.property.applyAutoLimit"></a>

```csharp
public object ApplyAutoLimit { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#apply_auto_limit Query#apply_auto_limit}.

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-databricks.query.QueryConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#catalog Query#catalog}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.query.QueryConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#description Query#description}.

---

##### `OwnerUserName`<sup>Optional</sup> <a name="OwnerUserName" id="@cdktf/provider-databricks.query.QueryConfig.property.ownerUserName"></a>

```csharp
public string OwnerUserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#owner_user_name Query#owner_user_name}.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-databricks.query.QueryConfig.property.parameter"></a>

```csharp
public object Parameter { get; set; }
```

- *Type:* object

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#parameter Query#parameter}

---

##### `ParentPath`<sup>Optional</sup> <a name="ParentPath" id="@cdktf/provider-databricks.query.QueryConfig.property.parentPath"></a>

```csharp
public string ParentPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#parent_path Query#parent_path}.

---

##### `RunAsMode`<sup>Optional</sup> <a name="RunAsMode" id="@cdktf/provider-databricks.query.QueryConfig.property.runAsMode"></a>

```csharp
public string RunAsMode { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#run_as_mode Query#run_as_mode}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-databricks.query.QueryConfig.property.schema"></a>

```csharp
public string Schema { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#schema Query#schema}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-databricks.query.QueryConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#tags Query#tags}.

---

### QueryParameter <a name="QueryParameter" id="@cdktf/provider-databricks.query.QueryParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameter {
    string Name,
    QueryParameterDateRangeValue DateRangeValue = null,
    QueryParameterDateValue DateValue = null,
    QueryParameterEnumValue EnumValue = null,
    QueryParameterNumericValue NumericValue = null,
    QueryParameterQueryBackedValue QueryBackedValue = null,
    QueryParameterTextValue TextValue = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#name Query#name}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.dateRangeValue">DateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | date_range_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.dateValue">DateValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | date_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.enumValue">EnumValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | enum_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.numericValue">NumericValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | numeric_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.queryBackedValue">QueryBackedValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | query_backed_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.textValue">TextValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | text_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameter.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#title Query#title}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.query.QueryParameter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#name Query#name}.

---

##### `DateRangeValue`<sup>Optional</sup> <a name="DateRangeValue" id="@cdktf/provider-databricks.query.QueryParameter.property.dateRangeValue"></a>

```csharp
public QueryParameterDateRangeValue DateRangeValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

date_range_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#date_range_value Query#date_range_value}

---

##### `DateValue`<sup>Optional</sup> <a name="DateValue" id="@cdktf/provider-databricks.query.QueryParameter.property.dateValue"></a>

```csharp
public QueryParameterDateValue DateValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

date_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#date_value Query#date_value}

---

##### `EnumValue`<sup>Optional</sup> <a name="EnumValue" id="@cdktf/provider-databricks.query.QueryParameter.property.enumValue"></a>

```csharp
public QueryParameterEnumValue EnumValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

enum_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#enum_value Query#enum_value}

---

##### `NumericValue`<sup>Optional</sup> <a name="NumericValue" id="@cdktf/provider-databricks.query.QueryParameter.property.numericValue"></a>

```csharp
public QueryParameterNumericValue NumericValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

numeric_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#numeric_value Query#numeric_value}

---

##### `QueryBackedValue`<sup>Optional</sup> <a name="QueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameter.property.queryBackedValue"></a>

```csharp
public QueryParameterQueryBackedValue QueryBackedValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

query_backed_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#query_backed_value Query#query_backed_value}

---

##### `TextValue`<sup>Optional</sup> <a name="TextValue" id="@cdktf/provider-databricks.query.QueryParameter.property.textValue"></a>

```csharp
public QueryParameterTextValue TextValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

text_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#text_value Query#text_value}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-databricks.query.QueryParameter.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#title Query#title}.

---

### QueryParameterDateRangeValue <a name="QueryParameterDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterDateRangeValue {
    QueryParameterDateRangeValueDateRangeValue DateRangeValue = null,
    string DynamicDateRangeValue = null,
    string Precision = null,
    double StartDayOfWeek = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dateRangeValue">DateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | date_range_value block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dynamicDateRangeValue">DynamicDateRangeValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#dynamic_date_range_value Query#dynamic_date_range_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.precision">Precision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#precision Query#precision}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.startDayOfWeek">StartDayOfWeek</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#start_day_of_week Query#start_day_of_week}. |

---

##### `DateRangeValue`<sup>Optional</sup> <a name="DateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dateRangeValue"></a>

```csharp
public QueryParameterDateRangeValueDateRangeValue DateRangeValue { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

date_range_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#date_range_value Query#date_range_value}

---

##### `DynamicDateRangeValue`<sup>Optional</sup> <a name="DynamicDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.dynamicDateRangeValue"></a>

```csharp
public string DynamicDateRangeValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#dynamic_date_range_value Query#dynamic_date_range_value}.

---

##### `Precision`<sup>Optional</sup> <a name="Precision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.precision"></a>

```csharp
public string Precision { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#precision Query#precision}.

---

##### `StartDayOfWeek`<sup>Optional</sup> <a name="StartDayOfWeek" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValue.property.startDayOfWeek"></a>

```csharp
public double StartDayOfWeek { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#start_day_of_week Query#start_day_of_week}.

---

### QueryParameterDateRangeValueDateRangeValue <a name="QueryParameterDateRangeValueDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterDateRangeValueDateRangeValue {
    string End,
    string Start
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.end">End</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#end Query#end}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.start">Start</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#start Query#start}. |

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.end"></a>

```csharp
public string End { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#end Query#end}.

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue.property.start"></a>

```csharp
public string Start { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#start Query#start}.

---

### QueryParameterDateValue <a name="QueryParameterDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterDateValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterDateValue {
    string DateValue = null,
    string DynamicDateValue = null,
    string Precision = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.dateValue">DateValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#date_value Query#date_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.dynamicDateValue">DynamicDateValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#dynamic_date_value Query#dynamic_date_value}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue.property.precision">Precision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#precision Query#precision}. |

---

##### `DateValue`<sup>Optional</sup> <a name="DateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.dateValue"></a>

```csharp
public string DateValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#date_value Query#date_value}.

---

##### `DynamicDateValue`<sup>Optional</sup> <a name="DynamicDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.dynamicDateValue"></a>

```csharp
public string DynamicDateValue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#dynamic_date_value Query#dynamic_date_value}.

---

##### `Precision`<sup>Optional</sup> <a name="Precision" id="@cdktf/provider-databricks.query.QueryParameterDateValue.property.precision"></a>

```csharp
public string Precision { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#precision Query#precision}.

---

### QueryParameterEnumValue <a name="QueryParameterEnumValue" id="@cdktf/provider-databricks.query.QueryParameterEnumValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterEnumValue {
    string EnumOptions = null,
    QueryParameterEnumValueMultiValuesOptions MultiValuesOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.enumOptions">EnumOptions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#enum_options Query#enum_options}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.multiValuesOptions">MultiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | multi_values_options block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#values Query#values}. |

---

##### `EnumOptions`<sup>Optional</sup> <a name="EnumOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.enumOptions"></a>

```csharp
public string EnumOptions { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#enum_options Query#enum_options}.

---

##### `MultiValuesOptions`<sup>Optional</sup> <a name="MultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.multiValuesOptions"></a>

```csharp
public QueryParameterEnumValueMultiValuesOptions MultiValuesOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

multi_values_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#multi_values_options Query#multi_values_options}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-databricks.query.QueryParameterEnumValue.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#values Query#values}.

---

### QueryParameterEnumValueMultiValuesOptions <a name="QueryParameterEnumValueMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterEnumValueMultiValuesOptions {
    string Prefix = null,
    string Separator = null,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#prefix Query#prefix}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.separator">Separator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#separator Query#separator}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.suffix">Suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#suffix Query#suffix}. |

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#prefix Query#prefix}.

---

##### `Separator`<sup>Optional</sup> <a name="Separator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.separator"></a>

```csharp
public string Separator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#separator Query#separator}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#suffix Query#suffix}.

---

### QueryParameterNumericValue <a name="QueryParameterNumericValue" id="@cdktf/provider-databricks.query.QueryParameterNumericValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterNumericValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterNumericValue {
    double Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue.property.value">Value</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#value Query#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterNumericValue.property.value"></a>

```csharp
public double Value { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#value Query#value}.

---

### QueryParameterQueryBackedValue <a name="QueryParameterQueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterQueryBackedValue {
    string QueryId,
    QueryParameterQueryBackedValueMultiValuesOptions MultiValuesOptions = null,
    string[] Values = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.queryId">QueryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#query_id Query#query_id}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.multiValuesOptions">MultiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | multi_values_options block. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#values Query#values}. |

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.queryId"></a>

```csharp
public string QueryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#query_id Query#query_id}.

---

##### `MultiValuesOptions`<sup>Optional</sup> <a name="MultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.multiValuesOptions"></a>

```csharp
public QueryParameterQueryBackedValueMultiValuesOptions MultiValuesOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

multi_values_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#multi_values_options Query#multi_values_options}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValue.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#values Query#values}.

---

### QueryParameterQueryBackedValueMultiValuesOptions <a name="QueryParameterQueryBackedValueMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterQueryBackedValueMultiValuesOptions {
    string Prefix = null,
    string Separator = null,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.prefix">Prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#prefix Query#prefix}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.separator">Separator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#separator Query#separator}. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.suffix">Suffix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#suffix Query#suffix}. |

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#prefix Query#prefix}.

---

##### `Separator`<sup>Optional</sup> <a name="Separator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.separator"></a>

```csharp
public string Separator { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#separator Query#separator}.

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#suffix Query#suffix}.

---

### QueryParameterTextValue <a name="QueryParameterTextValue" id="@cdktf/provider-databricks.query.QueryParameterTextValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.query.QueryParameterTextValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterTextValue {
    string Value
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#value Query#value}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterTextValue.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.88.0/docs/resources/query#value Query#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### QueryParameterDateRangeValueDateRangeValueOutputReference <a name="QueryParameterDateRangeValueDateRangeValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterDateRangeValueDateRangeValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.endInput">EndInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.startInput">StartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.end">End</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.start">Start</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndInput`<sup>Optional</sup> <a name="EndInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.endInput"></a>

```csharp
public string EndInput { get; }
```

- *Type:* string

---

##### `StartInput`<sup>Optional</sup> <a name="StartInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.startInput"></a>

```csharp
public string StartInput { get; }
```

- *Type:* string

---

##### `End`<sup>Required</sup> <a name="End" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.end"></a>

```csharp
public string End { get; }
```

- *Type:* string

---

##### `Start`<sup>Required</sup> <a name="Start" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.start"></a>

```csharp
public string Start { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference.property.internalValue"></a>

```csharp
public QueryParameterDateRangeValueDateRangeValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---


### QueryParameterDateRangeValueOutputReference <a name="QueryParameterDateRangeValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterDateRangeValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue">PutDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDateRangeValue">ResetDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDynamicDateRangeValue">ResetDynamicDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetPrecision">ResetPrecision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetStartDayOfWeek">ResetStartDayOfWeek</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateRangeValue` <a name="PutDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue"></a>

```csharp
private void PutDateRangeValue(QueryParameterDateRangeValueDateRangeValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.putDateRangeValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---

##### `ResetDateRangeValue` <a name="ResetDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDateRangeValue"></a>

```csharp
private void ResetDateRangeValue()
```

##### `ResetDynamicDateRangeValue` <a name="ResetDynamicDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetDynamicDateRangeValue"></a>

```csharp
private void ResetDynamicDateRangeValue()
```

##### `ResetPrecision` <a name="ResetPrecision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetPrecision"></a>

```csharp
private void ResetPrecision()
```

##### `ResetStartDayOfWeek` <a name="ResetStartDayOfWeek" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.resetStartDayOfWeek"></a>

```csharp
private void ResetStartDayOfWeek()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValue">DateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference">QueryParameterDateRangeValueDateRangeValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValueInput">DateRangeValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValueInput">DynamicDateRangeValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precisionInput">PrecisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeekInput">StartDayOfWeekInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValue">DynamicDateRangeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precision">Precision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeek">StartDayOfWeek</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateRangeValue`<sup>Required</sup> <a name="DateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValue"></a>

```csharp
public QueryParameterDateRangeValueDateRangeValueOutputReference DateRangeValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValueOutputReference">QueryParameterDateRangeValueDateRangeValueOutputReference</a>

---

##### `DateRangeValueInput`<sup>Optional</sup> <a name="DateRangeValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dateRangeValueInput"></a>

```csharp
public QueryParameterDateRangeValueDateRangeValue DateRangeValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueDateRangeValue">QueryParameterDateRangeValueDateRangeValue</a>

---

##### `DynamicDateRangeValueInput`<sup>Optional</sup> <a name="DynamicDateRangeValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValueInput"></a>

```csharp
public string DynamicDateRangeValueInput { get; }
```

- *Type:* string

---

##### `PrecisionInput`<sup>Optional</sup> <a name="PrecisionInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precisionInput"></a>

```csharp
public string PrecisionInput { get; }
```

- *Type:* string

---

##### `StartDayOfWeekInput`<sup>Optional</sup> <a name="StartDayOfWeekInput" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeekInput"></a>

```csharp
public double StartDayOfWeekInput { get; }
```

- *Type:* double

---

##### `DynamicDateRangeValue`<sup>Required</sup> <a name="DynamicDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.dynamicDateRangeValue"></a>

```csharp
public string DynamicDateRangeValue { get; }
```

- *Type:* string

---

##### `Precision`<sup>Required</sup> <a name="Precision" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.precision"></a>

```csharp
public string Precision { get; }
```

- *Type:* string

---

##### `StartDayOfWeek`<sup>Required</sup> <a name="StartDayOfWeek" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.startDayOfWeek"></a>

```csharp
public double StartDayOfWeek { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference.property.internalValue"></a>

```csharp
public QueryParameterDateRangeValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---


### QueryParameterDateValueOutputReference <a name="QueryParameterDateValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterDateValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDateValue">ResetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDynamicDateValue">ResetDynamicDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetPrecision">ResetPrecision</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDateValue` <a name="ResetDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDateValue"></a>

```csharp
private void ResetDateValue()
```

##### `ResetDynamicDateValue` <a name="ResetDynamicDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetDynamicDateValue"></a>

```csharp
private void ResetDynamicDateValue()
```

##### `ResetPrecision` <a name="ResetPrecision" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.resetPrecision"></a>

```csharp
private void ResetPrecision()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValueInput">DateValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValueInput">DynamicDateValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precisionInput">PrecisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValue">DateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValue">DynamicDateValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precision">Precision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateValueInput`<sup>Optional</sup> <a name="DateValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValueInput"></a>

```csharp
public string DateValueInput { get; }
```

- *Type:* string

---

##### `DynamicDateValueInput`<sup>Optional</sup> <a name="DynamicDateValueInput" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValueInput"></a>

```csharp
public string DynamicDateValueInput { get; }
```

- *Type:* string

---

##### `PrecisionInput`<sup>Optional</sup> <a name="PrecisionInput" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precisionInput"></a>

```csharp
public string PrecisionInput { get; }
```

- *Type:* string

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dateValue"></a>

```csharp
public string DateValue { get; }
```

- *Type:* string

---

##### `DynamicDateValue`<sup>Required</sup> <a name="DynamicDateValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.dynamicDateValue"></a>

```csharp
public string DynamicDateValue { get; }
```

- *Type:* string

---

##### `Precision`<sup>Required</sup> <a name="Precision" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.precision"></a>

```csharp
public string Precision { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference.property.internalValue"></a>

```csharp
public QueryParameterDateValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---


### QueryParameterEnumValueMultiValuesOptionsOutputReference <a name="QueryParameterEnumValueMultiValuesOptionsOutputReference" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterEnumValueMultiValuesOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSeparator">ResetSeparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetSeparator` <a name="ResetSeparator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSeparator"></a>

```csharp
private void ResetSeparator()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separatorInput">SeparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separator">Separator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `SeparatorInput`<sup>Optional</sup> <a name="SeparatorInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separatorInput"></a>

```csharp
public string SeparatorInput { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.separator"></a>

```csharp
public string Separator { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference.property.internalValue"></a>

```csharp
public QueryParameterEnumValueMultiValuesOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---


### QueryParameterEnumValueOutputReference <a name="QueryParameterEnumValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterEnumValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions">PutMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetEnumOptions">ResetEnumOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetMultiValuesOptions">ResetMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiValuesOptions` <a name="PutMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions"></a>

```csharp
private void PutMultiValuesOptions(QueryParameterEnumValueMultiValuesOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.putMultiValuesOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---

##### `ResetEnumOptions` <a name="ResetEnumOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetEnumOptions"></a>

```csharp
private void ResetEnumOptions()
```

##### `ResetMultiValuesOptions` <a name="ResetMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetMultiValuesOptions"></a>

```csharp
private void ResetMultiValuesOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptions">MultiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference">QueryParameterEnumValueMultiValuesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptionsInput">EnumOptionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptionsInput">MultiValuesOptionsInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptions">EnumOptions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MultiValuesOptions`<sup>Required</sup> <a name="MultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptions"></a>

```csharp
public QueryParameterEnumValueMultiValuesOptionsOutputReference MultiValuesOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptionsOutputReference">QueryParameterEnumValueMultiValuesOptionsOutputReference</a>

---

##### `EnumOptionsInput`<sup>Optional</sup> <a name="EnumOptionsInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptionsInput"></a>

```csharp
public string EnumOptionsInput { get; }
```

- *Type:* string

---

##### `MultiValuesOptionsInput`<sup>Optional</sup> <a name="MultiValuesOptionsInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.multiValuesOptionsInput"></a>

```csharp
public QueryParameterEnumValueMultiValuesOptions MultiValuesOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueMultiValuesOptions">QueryParameterEnumValueMultiValuesOptions</a>

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `EnumOptions`<sup>Required</sup> <a name="EnumOptions" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.enumOptions"></a>

```csharp
public string EnumOptions { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference.property.internalValue"></a>

```csharp
public QueryParameterEnumValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---


### QueryParameterList <a name="QueryParameterList" id="@cdktf/provider-databricks.query.QueryParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.query.QueryParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.query.QueryParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.query.QueryParameterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.query.QueryParameterList.get"></a>

```csharp
private QueryParameterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.query.QueryParameterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QueryParameterNumericValueOutputReference <a name="QueryParameterNumericValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterNumericValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.valueInput">ValueInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.value">Value</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.valueInput"></a>

```csharp
public double ValueInput { get; }
```

- *Type:* double

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.value"></a>

```csharp
public double Value { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference.property.internalValue"></a>

```csharp
public QueryParameterNumericValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---


### QueryParameterOutputReference <a name="QueryParameterOutputReference" id="@cdktf/provider-databricks.query.QueryParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue">PutDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue">PutDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue">PutEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue">PutNumericValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue">PutQueryBackedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue">PutTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateRangeValue">ResetDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateValue">ResetDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetEnumValue">ResetEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetNumericValue">ResetNumericValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetQueryBackedValue">ResetQueryBackedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTextValue">ResetTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDateRangeValue` <a name="PutDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue"></a>

```csharp
private void PutDateRangeValue(QueryParameterDateRangeValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateRangeValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---

##### `PutDateValue` <a name="PutDateValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue"></a>

```csharp
private void PutDateValue(QueryParameterDateValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putDateValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---

##### `PutEnumValue` <a name="PutEnumValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue"></a>

```csharp
private void PutEnumValue(QueryParameterEnumValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putEnumValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---

##### `PutNumericValue` <a name="PutNumericValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue"></a>

```csharp
private void PutNumericValue(QueryParameterNumericValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putNumericValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---

##### `PutQueryBackedValue` <a name="PutQueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue"></a>

```csharp
private void PutQueryBackedValue(QueryParameterQueryBackedValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putQueryBackedValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---

##### `PutTextValue` <a name="PutTextValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue"></a>

```csharp
private void PutTextValue(QueryParameterTextValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.putTextValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---

##### `ResetDateRangeValue` <a name="ResetDateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateRangeValue"></a>

```csharp
private void ResetDateRangeValue()
```

##### `ResetDateValue` <a name="ResetDateValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetDateValue"></a>

```csharp
private void ResetDateValue()
```

##### `ResetEnumValue` <a name="ResetEnumValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetEnumValue"></a>

```csharp
private void ResetEnumValue()
```

##### `ResetNumericValue` <a name="ResetNumericValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetNumericValue"></a>

```csharp
private void ResetNumericValue()
```

##### `ResetQueryBackedValue` <a name="ResetQueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetQueryBackedValue"></a>

```csharp
private void ResetQueryBackedValue()
```

##### `ResetTextValue` <a name="ResetTextValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTextValue"></a>

```csharp
private void ResetTextValue()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.resetTitle"></a>

```csharp
private void ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValue">DateRangeValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference">QueryParameterDateRangeValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValue">DateValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference">QueryParameterDateValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValue">EnumValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference">QueryParameterEnumValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValue">NumericValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference">QueryParameterNumericValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValue">QueryBackedValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference">QueryParameterQueryBackedValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValue">TextValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference">QueryParameterTextValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValueInput">DateRangeValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValueInput">DateValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValueInput">EnumValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValueInput">NumericValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValueInput">QueryBackedValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValueInput">TextValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DateRangeValue`<sup>Required</sup> <a name="DateRangeValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValue"></a>

```csharp
public QueryParameterDateRangeValueOutputReference DateRangeValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValueOutputReference">QueryParameterDateRangeValueOutputReference</a>

---

##### `DateValue`<sup>Required</sup> <a name="DateValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValue"></a>

```csharp
public QueryParameterDateValueOutputReference DateValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValueOutputReference">QueryParameterDateValueOutputReference</a>

---

##### `EnumValue`<sup>Required</sup> <a name="EnumValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValue"></a>

```csharp
public QueryParameterEnumValueOutputReference EnumValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValueOutputReference">QueryParameterEnumValueOutputReference</a>

---

##### `NumericValue`<sup>Required</sup> <a name="NumericValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValue"></a>

```csharp
public QueryParameterNumericValueOutputReference NumericValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValueOutputReference">QueryParameterNumericValueOutputReference</a>

---

##### `QueryBackedValue`<sup>Required</sup> <a name="QueryBackedValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValue"></a>

```csharp
public QueryParameterQueryBackedValueOutputReference QueryBackedValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference">QueryParameterQueryBackedValueOutputReference</a>

---

##### `TextValue`<sup>Required</sup> <a name="TextValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValue"></a>

```csharp
public QueryParameterTextValueOutputReference TextValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference">QueryParameterTextValueOutputReference</a>

---

##### `DateRangeValueInput`<sup>Optional</sup> <a name="DateRangeValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateRangeValueInput"></a>

```csharp
public QueryParameterDateRangeValue DateRangeValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateRangeValue">QueryParameterDateRangeValue</a>

---

##### `DateValueInput`<sup>Optional</sup> <a name="DateValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.dateValueInput"></a>

```csharp
public QueryParameterDateValue DateValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterDateValue">QueryParameterDateValue</a>

---

##### `EnumValueInput`<sup>Optional</sup> <a name="EnumValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.enumValueInput"></a>

```csharp
public QueryParameterEnumValue EnumValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterEnumValue">QueryParameterEnumValue</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NumericValueInput`<sup>Optional</sup> <a name="NumericValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.numericValueInput"></a>

```csharp
public QueryParameterNumericValue NumericValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterNumericValue">QueryParameterNumericValue</a>

---

##### `QueryBackedValueInput`<sup>Optional</sup> <a name="QueryBackedValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.queryBackedValueInput"></a>

```csharp
public QueryParameterQueryBackedValue QueryBackedValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---

##### `TextValueInput`<sup>Optional</sup> <a name="TextValueInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.textValueInput"></a>

```csharp
public QueryParameterTextValue TextValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### QueryParameterQueryBackedValueMultiValuesOptionsOutputReference <a name="QueryParameterQueryBackedValueMultiValuesOptionsOutputReference" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterQueryBackedValueMultiValuesOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSeparator">ResetSeparator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetSeparator` <a name="ResetSeparator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSeparator"></a>

```csharp
private void ResetSeparator()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separatorInput">SeparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separator">Separator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `SeparatorInput`<sup>Optional</sup> <a name="SeparatorInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separatorInput"></a>

```csharp
public string SeparatorInput { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Separator`<sup>Required</sup> <a name="Separator" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.separator"></a>

```csharp
public string Separator { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference.property.internalValue"></a>

```csharp
public QueryParameterQueryBackedValueMultiValuesOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---


### QueryParameterQueryBackedValueOutputReference <a name="QueryParameterQueryBackedValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterQueryBackedValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions">PutMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetMultiValuesOptions">ResetMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMultiValuesOptions` <a name="PutMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions"></a>

```csharp
private void PutMultiValuesOptions(QueryParameterQueryBackedValueMultiValuesOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.putMultiValuesOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---

##### `ResetMultiValuesOptions` <a name="ResetMultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetMultiValuesOptions"></a>

```csharp
private void ResetMultiValuesOptions()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.resetValues"></a>

```csharp
private void ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptions">MultiValuesOptions</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference">QueryParameterQueryBackedValueMultiValuesOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptionsInput">MultiValuesOptionsInput</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryIdInput">QueryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryId">QueryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MultiValuesOptions`<sup>Required</sup> <a name="MultiValuesOptions" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptions"></a>

```csharp
public QueryParameterQueryBackedValueMultiValuesOptionsOutputReference MultiValuesOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptionsOutputReference">QueryParameterQueryBackedValueMultiValuesOptionsOutputReference</a>

---

##### `MultiValuesOptionsInput`<sup>Optional</sup> <a name="MultiValuesOptionsInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.multiValuesOptionsInput"></a>

```csharp
public QueryParameterQueryBackedValueMultiValuesOptions MultiValuesOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValueMultiValuesOptions">QueryParameterQueryBackedValueMultiValuesOptions</a>

---

##### `QueryIdInput`<sup>Optional</sup> <a name="QueryIdInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryIdInput"></a>

```csharp
public string QueryIdInput { get; }
```

- *Type:* string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.queryId"></a>

```csharp
public string QueryId { get; }
```

- *Type:* string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterQueryBackedValueOutputReference.property.internalValue"></a>

```csharp
public QueryParameterQueryBackedValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterQueryBackedValue">QueryParameterQueryBackedValue</a>

---


### QueryParameterTextValueOutputReference <a name="QueryParameterTextValueOutputReference" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new QueryParameterTextValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.query.QueryParameterTextValueOutputReference.property.internalValue"></a>

```csharp
public QueryParameterTextValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.query.QueryParameterTextValue">QueryParameterTextValue</a>

---



