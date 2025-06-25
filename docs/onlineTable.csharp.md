# `onlineTable` Submodule <a name="`onlineTable` Submodule" id="@cdktf/provider-databricks.onlineTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OnlineTable <a name="OnlineTable" id="@cdktf/provider-databricks.onlineTable.OnlineTable"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table databricks_online_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTable(Construct Scope, string Id, OnlineTableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig">OnlineTableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.onlineTable.OnlineTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig">OnlineTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec">PutSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetSpec">ResetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.onlineTable.OnlineTable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.onlineTable.OnlineTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.onlineTable.OnlineTable.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSpec` <a name="PutSpec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec"></a>

```csharp
private void PutSpec(OnlineTableSpec Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putTimeouts"></a>

```csharp
private void PutTimeouts(OnlineTableTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.onlineTable.OnlineTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetSpec"></a>

```csharp
private void ResetSpec()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OnlineTable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

OnlineTable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

OnlineTable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

OnlineTable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.onlineTable.OnlineTable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

OnlineTable.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OnlineTable resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OnlineTable to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OnlineTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OnlineTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference">OnlineTableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.status">Status</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList">OnlineTableStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.tableServingUrl">TableServingUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference">OnlineTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.unityCatalogProvisioningState">UnityCatalogProvisioningState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.specInput">SpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.spec"></a>

```csharp
public OnlineTableSpecOutputReference Spec { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference">OnlineTableSpecOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.status"></a>

```csharp
public OnlineTableStatusList Status { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList">OnlineTableStatusList</a>

---

##### `TableServingUrl`<sup>Required</sup> <a name="TableServingUrl" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.tableServingUrl"></a>

```csharp
public string TableServingUrl { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeouts"></a>

```csharp
public OnlineTableTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference">OnlineTableTimeoutsOutputReference</a>

---

##### `UnityCatalogProvisioningState`<sup>Required</sup> <a name="UnityCatalogProvisioningState" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.unityCatalogProvisioningState"></a>

```csharp
public string UnityCatalogProvisioningState { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.specInput"></a>

```csharp
public OnlineTableSpec SpecInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.onlineTable.OnlineTable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OnlineTableConfig <a name="OnlineTableConfig" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    OnlineTableSpec Spec = null,
    OnlineTableTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#name OnlineTable#name}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#id OnlineTable#id}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.spec">Spec</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#name OnlineTable#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#id OnlineTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.spec"></a>

```csharp
public OnlineTableSpec Spec { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#spec OnlineTable#spec}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTableConfig.property.timeouts"></a>

```csharp
public OnlineTableTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts">OnlineTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#timeouts OnlineTable#timeouts}

---

### OnlineTableSpec <a name="OnlineTableSpec" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableSpec {
    object PerformFullCopy = null,
    string[] PrimaryKeyColumns = null,
    OnlineTableSpecRunContinuously RunContinuously = null,
    OnlineTableSpecRunTriggered RunTriggered = null,
    string SourceTableFullName = null,
    string TimeseriesKey = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.performFullCopy">PerformFullCopy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#perform_full_copy OnlineTable#perform_full_copy}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#primary_key_columns OnlineTable#primary_key_columns}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runContinuously">RunContinuously</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a></code> | run_continuously block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runTriggered">RunTriggered</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a></code> | run_triggered block. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.sourceTableFullName">SourceTableFullName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#source_table_full_name OnlineTable#source_table_full_name}. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.timeseriesKey">TimeseriesKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#timeseries_key OnlineTable#timeseries_key}. |

---

##### `PerformFullCopy`<sup>Optional</sup> <a name="PerformFullCopy" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.performFullCopy"></a>

```csharp
public object PerformFullCopy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#perform_full_copy OnlineTable#perform_full_copy}.

---

##### `PrimaryKeyColumns`<sup>Optional</sup> <a name="PrimaryKeyColumns" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.primaryKeyColumns"></a>

```csharp
public string[] PrimaryKeyColumns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#primary_key_columns OnlineTable#primary_key_columns}.

---

##### `RunContinuously`<sup>Optional</sup> <a name="RunContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runContinuously"></a>

```csharp
public OnlineTableSpecRunContinuously RunContinuously { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

run_continuously block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#run_continuously OnlineTable#run_continuously}

---

##### `RunTriggered`<sup>Optional</sup> <a name="RunTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.runTriggered"></a>

```csharp
public OnlineTableSpecRunTriggered RunTriggered { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

run_triggered block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#run_triggered OnlineTable#run_triggered}

---

##### `SourceTableFullName`<sup>Optional</sup> <a name="SourceTableFullName" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.sourceTableFullName"></a>

```csharp
public string SourceTableFullName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#source_table_full_name OnlineTable#source_table_full_name}.

---

##### `TimeseriesKey`<sup>Optional</sup> <a name="TimeseriesKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpec.property.timeseriesKey"></a>

```csharp
public string TimeseriesKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#timeseries_key OnlineTable#timeseries_key}.

---

### OnlineTableSpecRunContinuously <a name="OnlineTableSpecRunContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableSpecRunContinuously {

};
```


### OnlineTableSpecRunTriggered <a name="OnlineTableSpecRunTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableSpecRunTriggered {

};
```


### OnlineTableStatus <a name="OnlineTableStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatus {

};
```


### OnlineTableStatusContinuousUpdateStatus <a name="OnlineTableStatusContinuousUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusContinuousUpdateStatus {

};
```


### OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress <a name="OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress {

};
```


### OnlineTableStatusFailedStatus <a name="OnlineTableStatusFailedStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusFailedStatus {

};
```


### OnlineTableStatusProvisioningStatus <a name="OnlineTableStatusProvisioningStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusProvisioningStatus {

};
```


### OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress <a name="OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress {

};
```


### OnlineTableStatusTriggeredUpdateStatus <a name="OnlineTableStatusTriggeredUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusTriggeredUpdateStatus {

};
```


### OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress <a name="OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress {

};
```


### OnlineTableTimeouts <a name="OnlineTableTimeouts" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableTimeouts {
    string Create = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#create OnlineTable#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.84.0/docs/resources/online_table#create OnlineTable#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OnlineTableSpecOutputReference <a name="OnlineTableSpecOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableSpecOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunContinuously">PutRunContinuously</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunTriggered">PutRunTriggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPerformFullCopy">ResetPerformFullCopy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPrimaryKeyColumns">ResetPrimaryKeyColumns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunContinuously">ResetRunContinuously</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunTriggered">ResetRunTriggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetSourceTableFullName">ResetSourceTableFullName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetTimeseriesKey">ResetTimeseriesKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRunContinuously` <a name="PutRunContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunContinuously"></a>

```csharp
private void PutRunContinuously(OnlineTableSpecRunContinuously Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunContinuously.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

---

##### `PutRunTriggered` <a name="PutRunTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunTriggered"></a>

```csharp
private void PutRunTriggered(OnlineTableSpecRunTriggered Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.putRunTriggered.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

---

##### `ResetPerformFullCopy` <a name="ResetPerformFullCopy" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPerformFullCopy"></a>

```csharp
private void ResetPerformFullCopy()
```

##### `ResetPrimaryKeyColumns` <a name="ResetPrimaryKeyColumns" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetPrimaryKeyColumns"></a>

```csharp
private void ResetPrimaryKeyColumns()
```

##### `ResetRunContinuously` <a name="ResetRunContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunContinuously"></a>

```csharp
private void ResetRunContinuously()
```

##### `ResetRunTriggered` <a name="ResetRunTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetRunTriggered"></a>

```csharp
private void ResetRunTriggered()
```

##### `ResetSourceTableFullName` <a name="ResetSourceTableFullName" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetSourceTableFullName"></a>

```csharp
private void ResetSourceTableFullName()
```

##### `ResetTimeseriesKey` <a name="ResetTimeseriesKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.resetTimeseriesKey"></a>

```csharp
private void ResetTimeseriesKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.pipelineId">PipelineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuously">RunContinuously</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference">OnlineTableSpecRunContinuouslyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggered">RunTriggered</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference">OnlineTableSpecRunTriggeredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopyInput">PerformFullCopyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumnsInput">PrimaryKeyColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuouslyInput">RunContinuouslyInput</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggeredInput">RunTriggeredInput</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullNameInput">SourceTableFullNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKeyInput">TimeseriesKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopy">PerformFullCopy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumns">PrimaryKeyColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullName">SourceTableFullName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKey">TimeseriesKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.pipelineId"></a>

```csharp
public string PipelineId { get; }
```

- *Type:* string

---

##### `RunContinuously`<sup>Required</sup> <a name="RunContinuously" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuously"></a>

```csharp
public OnlineTableSpecRunContinuouslyOutputReference RunContinuously { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference">OnlineTableSpecRunContinuouslyOutputReference</a>

---

##### `RunTriggered`<sup>Required</sup> <a name="RunTriggered" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggered"></a>

```csharp
public OnlineTableSpecRunTriggeredOutputReference RunTriggered { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference">OnlineTableSpecRunTriggeredOutputReference</a>

---

##### `PerformFullCopyInput`<sup>Optional</sup> <a name="PerformFullCopyInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopyInput"></a>

```csharp
public object PerformFullCopyInput { get; }
```

- *Type:* object

---

##### `PrimaryKeyColumnsInput`<sup>Optional</sup> <a name="PrimaryKeyColumnsInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumnsInput"></a>

```csharp
public string[] PrimaryKeyColumnsInput { get; }
```

- *Type:* string[]

---

##### `RunContinuouslyInput`<sup>Optional</sup> <a name="RunContinuouslyInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runContinuouslyInput"></a>

```csharp
public OnlineTableSpecRunContinuously RunContinuouslyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

---

##### `RunTriggeredInput`<sup>Optional</sup> <a name="RunTriggeredInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.runTriggeredInput"></a>

```csharp
public OnlineTableSpecRunTriggered RunTriggeredInput { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

---

##### `SourceTableFullNameInput`<sup>Optional</sup> <a name="SourceTableFullNameInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullNameInput"></a>

```csharp
public string SourceTableFullNameInput { get; }
```

- *Type:* string

---

##### `TimeseriesKeyInput`<sup>Optional</sup> <a name="TimeseriesKeyInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKeyInput"></a>

```csharp
public string TimeseriesKeyInput { get; }
```

- *Type:* string

---

##### `PerformFullCopy`<sup>Required</sup> <a name="PerformFullCopy" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.performFullCopy"></a>

```csharp
public object PerformFullCopy { get; }
```

- *Type:* object

---

##### `PrimaryKeyColumns`<sup>Required</sup> <a name="PrimaryKeyColumns" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.primaryKeyColumns"></a>

```csharp
public string[] PrimaryKeyColumns { get; }
```

- *Type:* string[]

---

##### `SourceTableFullName`<sup>Required</sup> <a name="SourceTableFullName" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.sourceTableFullName"></a>

```csharp
public string SourceTableFullName { get; }
```

- *Type:* string

---

##### `TimeseriesKey`<sup>Required</sup> <a name="TimeseriesKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.timeseriesKey"></a>

```csharp
public string TimeseriesKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecOutputReference.property.internalValue"></a>

```csharp
public OnlineTableSpec InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpec">OnlineTableSpec</a>

---


### OnlineTableSpecRunContinuouslyOutputReference <a name="OnlineTableSpecRunContinuouslyOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableSpecRunContinuouslyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuouslyOutputReference.property.internalValue"></a>

```csharp
public OnlineTableSpecRunContinuously InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunContinuously">OnlineTableSpecRunContinuously</a>

---


### OnlineTableSpecRunTriggeredOutputReference <a name="OnlineTableSpecRunTriggeredOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableSpecRunTriggeredOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggeredOutputReference.property.internalValue"></a>

```csharp
public OnlineTableSpecRunTriggered InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableSpecRunTriggered">OnlineTableSpecRunTriggered</a>

---


### OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList <a name="OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.get"></a>

```csharp
private OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference <a name="OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```csharp
public OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgress</a>

---


### OnlineTableStatusContinuousUpdateStatusList <a name="OnlineTableStatusContinuousUpdateStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusContinuousUpdateStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.get"></a>

```csharp
private OnlineTableStatusContinuousUpdateStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OnlineTableStatusContinuousUpdateStatusOutputReference <a name="OnlineTableStatusContinuousUpdateStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusContinuousUpdateStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress">InitialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus">OnlineTableStatusContinuousUpdateStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialPipelineSyncProgress`<sup>Required</sup> <a name="InitialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.initialPipelineSyncProgress"></a>

```csharp
public OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList InitialPipelineSyncProgress { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList">OnlineTableStatusContinuousUpdateStatusInitialPipelineSyncProgressList</a>

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusOutputReference.property.internalValue"></a>

```csharp
public OnlineTableStatusContinuousUpdateStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatus">OnlineTableStatusContinuousUpdateStatus</a>

---


### OnlineTableStatusFailedStatusList <a name="OnlineTableStatusFailedStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusFailedStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.get"></a>

```csharp
private OnlineTableStatusFailedStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OnlineTableStatusFailedStatusOutputReference <a name="OnlineTableStatusFailedStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusFailedStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus">OnlineTableStatusFailedStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusOutputReference.property.internalValue"></a>

```csharp
public OnlineTableStatusFailedStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatus">OnlineTableStatusFailedStatus</a>

---


### OnlineTableStatusList <a name="OnlineTableStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.get"></a>

```csharp
private OnlineTableStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OnlineTableStatusOutputReference <a name="OnlineTableStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.continuousUpdateStatus">ContinuousUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList">OnlineTableStatusContinuousUpdateStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.detailedState">DetailedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.failedStatus">FailedStatus</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList">OnlineTableStatusFailedStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.provisioningStatus">ProvisioningStatus</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList">OnlineTableStatusProvisioningStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.triggeredUpdateStatus">TriggeredUpdateStatus</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList">OnlineTableStatusTriggeredUpdateStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatus">OnlineTableStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContinuousUpdateStatus`<sup>Required</sup> <a name="ContinuousUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.continuousUpdateStatus"></a>

```csharp
public OnlineTableStatusContinuousUpdateStatusList ContinuousUpdateStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusContinuousUpdateStatusList">OnlineTableStatusContinuousUpdateStatusList</a>

---

##### `DetailedState`<sup>Required</sup> <a name="DetailedState" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.detailedState"></a>

```csharp
public string DetailedState { get; }
```

- *Type:* string

---

##### `FailedStatus`<sup>Required</sup> <a name="FailedStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.failedStatus"></a>

```csharp
public OnlineTableStatusFailedStatusList FailedStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusFailedStatusList">OnlineTableStatusFailedStatusList</a>

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `ProvisioningStatus`<sup>Required</sup> <a name="ProvisioningStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.provisioningStatus"></a>

```csharp
public OnlineTableStatusProvisioningStatusList ProvisioningStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList">OnlineTableStatusProvisioningStatusList</a>

---

##### `TriggeredUpdateStatus`<sup>Required</sup> <a name="TriggeredUpdateStatus" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.triggeredUpdateStatus"></a>

```csharp
public OnlineTableStatusTriggeredUpdateStatusList TriggeredUpdateStatus { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList">OnlineTableStatusTriggeredUpdateStatusList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusOutputReference.property.internalValue"></a>

```csharp
public OnlineTableStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatus">OnlineTableStatus</a>

---


### OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList <a name="OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.get"></a>

```csharp
private OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference <a name="OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressOutputReference.property.internalValue"></a>

```csharp
public OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgress</a>

---


### OnlineTableStatusProvisioningStatusList <a name="OnlineTableStatusProvisioningStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusProvisioningStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.get"></a>

```csharp
private OnlineTableStatusProvisioningStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OnlineTableStatusProvisioningStatusOutputReference <a name="OnlineTableStatusProvisioningStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusProvisioningStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress">InitialPipelineSyncProgress</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus">OnlineTableStatusProvisioningStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialPipelineSyncProgress`<sup>Required</sup> <a name="InitialPipelineSyncProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.initialPipelineSyncProgress"></a>

```csharp
public OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList InitialPipelineSyncProgress { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList">OnlineTableStatusProvisioningStatusInitialPipelineSyncProgressList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatusOutputReference.property.internalValue"></a>

```csharp
public OnlineTableStatusProvisioningStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusProvisioningStatus">OnlineTableStatusProvisioningStatus</a>

---


### OnlineTableStatusTriggeredUpdateStatusList <a name="OnlineTableStatusTriggeredUpdateStatusList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusTriggeredUpdateStatusList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.get"></a>

```csharp
private OnlineTableStatusTriggeredUpdateStatusOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OnlineTableStatusTriggeredUpdateStatusOutputReference <a name="OnlineTableStatusTriggeredUpdateStatusOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusTriggeredUpdateStatusOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion">LastProcessedCommitVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress">TriggeredUpdateProgress</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus">OnlineTableStatusTriggeredUpdateStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LastProcessedCommitVersion`<sup>Required</sup> <a name="LastProcessedCommitVersion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.lastProcessedCommitVersion"></a>

```csharp
public double LastProcessedCommitVersion { get; }
```

- *Type:* double

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `TriggeredUpdateProgress`<sup>Required</sup> <a name="TriggeredUpdateProgress" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.triggeredUpdateProgress"></a>

```csharp
public OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList TriggeredUpdateProgress { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusOutputReference.property.internalValue"></a>

```csharp
public OnlineTableStatusTriggeredUpdateStatus InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatus">OnlineTableStatusTriggeredUpdateStatus</a>

---


### OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList <a name="OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.get"></a>

```csharp
private OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference <a name="OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds">EstimatedCompletionTimeSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing">LatestVersionCurrentlyProcessing</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount">SyncedRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion">SyncProgressCompletion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount">TotalRowCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EstimatedCompletionTimeSeconds`<sup>Required</sup> <a name="EstimatedCompletionTimeSeconds" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.estimatedCompletionTimeSeconds"></a>

```csharp
public double EstimatedCompletionTimeSeconds { get; }
```

- *Type:* double

---

##### `LatestVersionCurrentlyProcessing`<sup>Required</sup> <a name="LatestVersionCurrentlyProcessing" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.latestVersionCurrentlyProcessing"></a>

```csharp
public double LatestVersionCurrentlyProcessing { get; }
```

- *Type:* double

---

##### `SyncedRowCount`<sup>Required</sup> <a name="SyncedRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncedRowCount"></a>

```csharp
public double SyncedRowCount { get; }
```

- *Type:* double

---

##### `SyncProgressCompletion`<sup>Required</sup> <a name="SyncProgressCompletion" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.syncProgressCompletion"></a>

```csharp
public double SyncProgressCompletion { get; }
```

- *Type:* double

---

##### `TotalRowCount`<sup>Required</sup> <a name="TotalRowCount" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.totalRowCount"></a>

```csharp
public double TotalRowCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgressOutputReference.property.internalValue"></a>

```csharp
public OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.onlineTable.OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress">OnlineTableStatusTriggeredUpdateStatusTriggeredUpdateProgress</a>

---


### OnlineTableTimeoutsOutputReference <a name="OnlineTableTimeoutsOutputReference" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new OnlineTableTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.onlineTable.OnlineTableTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



