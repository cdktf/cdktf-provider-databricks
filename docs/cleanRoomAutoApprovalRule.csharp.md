# `cleanRoomAutoApprovalRule` Submodule <a name="`cleanRoomAutoApprovalRule` Submodule" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanRoomAutoApprovalRule <a name="CleanRoomAutoApprovalRule" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_auto_approval_rule databricks_clean_room_auto_approval_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAutoApprovalRule(Construct Scope, string Id, CleanRoomAutoApprovalRuleConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig">CleanRoomAutoApprovalRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig">CleanRoomAutoApprovalRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetAuthorCollaboratorAlias">ResetAuthorCollaboratorAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetAuthorScope">ResetAuthorScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetCleanRoomName">ResetCleanRoomName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetRunnerCollaboratorAlias">ResetRunnerCollaboratorAlias</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAuthorCollaboratorAlias` <a name="ResetAuthorCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetAuthorCollaboratorAlias"></a>

```csharp
private void ResetAuthorCollaboratorAlias()
```

##### `ResetAuthorScope` <a name="ResetAuthorScope" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetAuthorScope"></a>

```csharp
private void ResetAuthorScope()
```

##### `ResetCleanRoomName` <a name="ResetCleanRoomName" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetCleanRoomName"></a>

```csharp
private void ResetCleanRoomName()
```

##### `ResetRunnerCollaboratorAlias` <a name="ResetRunnerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.resetRunnerCollaboratorAlias"></a>

```csharp
private void ResetRunnerCollaboratorAlias()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CleanRoomAutoApprovalRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CleanRoomAutoApprovalRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CleanRoomAutoApprovalRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CleanRoomAutoApprovalRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

CleanRoomAutoApprovalRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CleanRoomAutoApprovalRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CleanRoomAutoApprovalRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CleanRoomAutoApprovalRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_auto_approval_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CleanRoomAutoApprovalRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.createdAt">CreatedAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.ruleId">RuleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.ruleOwnerCollaboratorAlias">RuleOwnerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorCollaboratorAliasInput">AuthorCollaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorScopeInput">AuthorScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.cleanRoomNameInput">CleanRoomNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.runnerCollaboratorAliasInput">RunnerCollaboratorAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorCollaboratorAlias">AuthorCollaboratorAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorScope">AuthorScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.cleanRoomName">CleanRoomName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.runnerCollaboratorAlias">RunnerCollaboratorAlias</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.createdAt"></a>

```csharp
public double CreatedAt { get; }
```

- *Type:* double

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.ruleId"></a>

```csharp
public string RuleId { get; }
```

- *Type:* string

---

##### `RuleOwnerCollaboratorAlias`<sup>Required</sup> <a name="RuleOwnerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.ruleOwnerCollaboratorAlias"></a>

```csharp
public string RuleOwnerCollaboratorAlias { get; }
```

- *Type:* string

---

##### `AuthorCollaboratorAliasInput`<sup>Optional</sup> <a name="AuthorCollaboratorAliasInput" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorCollaboratorAliasInput"></a>

```csharp
public string AuthorCollaboratorAliasInput { get; }
```

- *Type:* string

---

##### `AuthorScopeInput`<sup>Optional</sup> <a name="AuthorScopeInput" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorScopeInput"></a>

```csharp
public string AuthorScopeInput { get; }
```

- *Type:* string

---

##### `CleanRoomNameInput`<sup>Optional</sup> <a name="CleanRoomNameInput" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.cleanRoomNameInput"></a>

```csharp
public string CleanRoomNameInput { get; }
```

- *Type:* string

---

##### `RunnerCollaboratorAliasInput`<sup>Optional</sup> <a name="RunnerCollaboratorAliasInput" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.runnerCollaboratorAliasInput"></a>

```csharp
public string RunnerCollaboratorAliasInput { get; }
```

- *Type:* string

---

##### `AuthorCollaboratorAlias`<sup>Required</sup> <a name="AuthorCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorCollaboratorAlias"></a>

```csharp
public string AuthorCollaboratorAlias { get; }
```

- *Type:* string

---

##### `AuthorScope`<sup>Required</sup> <a name="AuthorScope" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.authorScope"></a>

```csharp
public string AuthorScope { get; }
```

- *Type:* string

---

##### `CleanRoomName`<sup>Required</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.cleanRoomName"></a>

```csharp
public string CleanRoomName { get; }
```

- *Type:* string

---

##### `RunnerCollaboratorAlias`<sup>Required</sup> <a name="RunnerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.runnerCollaboratorAlias"></a>

```csharp
public string RunnerCollaboratorAlias { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanRoomAutoApprovalRuleConfig <a name="CleanRoomAutoApprovalRuleConfig" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new CleanRoomAutoApprovalRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string AuthorCollaboratorAlias = null,
    string AuthorScope = null,
    string CleanRoomName = null,
    string RunnerCollaboratorAlias = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.authorCollaboratorAlias">AuthorCollaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_auto_approval_rule#author_collaborator_alias CleanRoomAutoApprovalRule#author_collaborator_alias}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.authorScope">AuthorScope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_auto_approval_rule#author_scope CleanRoomAutoApprovalRule#author_scope}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.cleanRoomName">CleanRoomName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_auto_approval_rule#clean_room_name CleanRoomAutoApprovalRule#clean_room_name}. |
| <code><a href="#@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.runnerCollaboratorAlias">RunnerCollaboratorAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_auto_approval_rule#runner_collaborator_alias CleanRoomAutoApprovalRule#runner_collaborator_alias}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AuthorCollaboratorAlias`<sup>Optional</sup> <a name="AuthorCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.authorCollaboratorAlias"></a>

```csharp
public string AuthorCollaboratorAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_auto_approval_rule#author_collaborator_alias CleanRoomAutoApprovalRule#author_collaborator_alias}.

---

##### `AuthorScope`<sup>Optional</sup> <a name="AuthorScope" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.authorScope"></a>

```csharp
public string AuthorScope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_auto_approval_rule#author_scope CleanRoomAutoApprovalRule#author_scope}.

---

##### `CleanRoomName`<sup>Optional</sup> <a name="CleanRoomName" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.cleanRoomName"></a>

```csharp
public string CleanRoomName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_auto_approval_rule#clean_room_name CleanRoomAutoApprovalRule#clean_room_name}.

---

##### `RunnerCollaboratorAlias`<sup>Optional</sup> <a name="RunnerCollaboratorAlias" id="@cdktf/provider-databricks.cleanRoomAutoApprovalRule.CleanRoomAutoApprovalRuleConfig.property.runnerCollaboratorAlias"></a>

```csharp
public string RunnerCollaboratorAlias { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.86.0/docs/resources/clean_room_auto_approval_rule#runner_collaborator_alias CleanRoomAutoApprovalRule#runner_collaborator_alias}.

---



