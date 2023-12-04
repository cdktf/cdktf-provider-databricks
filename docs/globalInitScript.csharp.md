# `globalInitScript` Submodule <a name="`globalInitScript` Submodule" id="@cdktf/provider-databricks.globalInitScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlobalInitScript <a name="GlobalInitScript" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script databricks_global_init_script}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new GlobalInitScript(Construct Scope, string Id, GlobalInitScriptConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig">GlobalInitScriptConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig">GlobalInitScriptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetContentBase64">ResetContentBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetMd5">ResetMd5</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetSource">ResetSource</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.putTimeouts"></a>

```csharp
private void PutTimeouts(GlobalInitScriptTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>

---

##### `ResetContentBase64` <a name="ResetContentBase64" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetContentBase64"></a>

```csharp
private void ResetContentBase64()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMd5` <a name="ResetMd5" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetMd5"></a>

```csharp
private void ResetMd5()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetSource` <a name="ResetSource" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.resetSource"></a>

```csharp
private void ResetSource()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GlobalInitScript resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

GlobalInitScript.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

GlobalInitScript.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

GlobalInitScript.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

GlobalInitScript.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GlobalInitScript resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlobalInitScript to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlobalInitScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GlobalInitScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference">GlobalInitScriptTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64Input">ContentBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.md5Input">Md5Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.positionInput">PositionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64">ContentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.md5">Md5</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.position">Position</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.source">Source</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.timeouts"></a>

```csharp
public GlobalInitScriptTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference">GlobalInitScriptTimeoutsOutputReference</a>

---

##### `ContentBase64Input`<sup>Optional</sup> <a name="ContentBase64Input" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64Input"></a>

```csharp
public string ContentBase64Input { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `Md5Input`<sup>Optional</sup> <a name="Md5Input" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.md5Input"></a>

```csharp
public string Md5Input { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.positionInput"></a>

```csharp
public double PositionInput { get; }
```

- *Type:* double

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Md5`<sup>Required</sup> <a name="Md5" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.md5"></a>

```csharp
public string Md5 { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.position"></a>

```csharp
public double Position { get; }
```

- *Type:* double

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScript.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlobalInitScriptConfig <a name="GlobalInitScriptConfig" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new GlobalInitScriptConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string ContentBase64 = null,
    object Enabled = null,
    string Id = null,
    string Md5 = null,
    double Position = null,
    string Source = null,
    GlobalInitScriptTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#name GlobalInitScript#name}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.contentBase64">ContentBase64</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#content_base64 GlobalInitScript#content_base64}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#enabled GlobalInitScript#enabled}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#id GlobalInitScript#id}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.md5">Md5</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#md5 GlobalInitScript#md5}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.position">Position</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#position GlobalInitScript#position}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#source GlobalInitScript#source}. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#name GlobalInitScript#name}.

---

##### `ContentBase64`<sup>Optional</sup> <a name="ContentBase64" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#content_base64 GlobalInitScript#content_base64}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#enabled GlobalInitScript#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#id GlobalInitScript#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Md5`<sup>Optional</sup> <a name="Md5" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.md5"></a>

```csharp
public string Md5 { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#md5 GlobalInitScript#md5}.

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.position"></a>

```csharp
public double Position { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#position GlobalInitScript#position}.

---

##### `Source`<sup>Optional</sup> <a name="Source" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#source GlobalInitScript#source}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptConfig.property.timeouts"></a>

```csharp
public GlobalInitScriptTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts">GlobalInitScriptTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.30.0/docs/resources/global_init_script#timeouts GlobalInitScript#timeouts}

---

### GlobalInitScriptTimeouts <a name="GlobalInitScriptTimeouts" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new GlobalInitScriptTimeouts {

};
```


## Classes <a name="Classes" id="Classes"></a>

### GlobalInitScriptTimeoutsOutputReference <a name="GlobalInitScriptTimeoutsOutputReference" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new GlobalInitScriptTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.globalInitScript.GlobalInitScriptTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



