# `libraryPluginframework` Submodule <a name="`libraryPluginframework` Submodule" id="@cdktf/provider-databricks.libraryPluginframework"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LibraryPluginframework <a name="LibraryPluginframework" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework databricks_library_pluginframework}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryPluginframework(Construct Scope, string Id, LibraryPluginframeworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig">LibraryPluginframeworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig">LibraryPluginframeworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran">PutCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven">PutMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi">PutPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetCran">ResetCran</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetEgg">ResetEgg</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetJar">ResetJar</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetMaven">ResetMaven</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetPypi">ResetPypi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetRequirements">ResetRequirements</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetWhl">ResetWhl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCran` <a name="PutCran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran"></a>

```csharp
private void PutCran(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putCran.parameter.value"></a>

- *Type:* object

---

##### `PutMaven` <a name="PutMaven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven"></a>

```csharp
private void PutMaven(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putMaven.parameter.value"></a>

- *Type:* object

---

##### `PutPypi` <a name="PutPypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi"></a>

```csharp
private void PutPypi(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.putPypi.parameter.value"></a>

- *Type:* object

---

##### `ResetCran` <a name="ResetCran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetCran"></a>

```csharp
private void ResetCran()
```

##### `ResetEgg` <a name="ResetEgg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetEgg"></a>

```csharp
private void ResetEgg()
```

##### `ResetJar` <a name="ResetJar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetJar"></a>

```csharp
private void ResetJar()
```

##### `ResetMaven` <a name="ResetMaven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetMaven"></a>

```csharp
private void ResetMaven()
```

##### `ResetPypi` <a name="ResetPypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetPypi"></a>

```csharp
private void ResetPypi()
```

##### `ResetRequirements` <a name="ResetRequirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetRequirements"></a>

```csharp
private void ResetRequirements()
```

##### `ResetWhl` <a name="ResetWhl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.resetWhl"></a>

```csharp
private void ResetWhl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LibraryPluginframework resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

LibraryPluginframework.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

LibraryPluginframework.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

LibraryPluginframework.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

LibraryPluginframework.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LibraryPluginframework resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LibraryPluginframework to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LibraryPluginframework that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LibraryPluginframework to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cran">Cran</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList">LibraryPluginframeworkCranList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.maven">Maven</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList">LibraryPluginframeworkMavenList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypi">Pypi</a></code> | <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList">LibraryPluginframeworkPypiList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cranInput">CranInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.eggInput">EggInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jarInput">JarInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.mavenInput">MavenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypiInput">PypiInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirementsInput">RequirementsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whlInput">WhlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.egg">Egg</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jar">Jar</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirements">Requirements</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whl">Whl</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Cran`<sup>Required</sup> <a name="Cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cran"></a>

```csharp
public LibraryPluginframeworkCranList Cran { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList">LibraryPluginframeworkCranList</a>

---

##### `Maven`<sup>Required</sup> <a name="Maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.maven"></a>

```csharp
public LibraryPluginframeworkMavenList Maven { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList">LibraryPluginframeworkMavenList</a>

---

##### `Pypi`<sup>Required</sup> <a name="Pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypi"></a>

```csharp
public LibraryPluginframeworkPypiList Pypi { get; }
```

- *Type:* <a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList">LibraryPluginframeworkPypiList</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `CranInput`<sup>Optional</sup> <a name="CranInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.cranInput"></a>

```csharp
public object CranInput { get; }
```

- *Type:* object

---

##### `EggInput`<sup>Optional</sup> <a name="EggInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.eggInput"></a>

```csharp
public string EggInput { get; }
```

- *Type:* string

---

##### `JarInput`<sup>Optional</sup> <a name="JarInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jarInput"></a>

```csharp
public string JarInput { get; }
```

- *Type:* string

---

##### `MavenInput`<sup>Optional</sup> <a name="MavenInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.mavenInput"></a>

```csharp
public object MavenInput { get; }
```

- *Type:* object

---

##### `PypiInput`<sup>Optional</sup> <a name="PypiInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.pypiInput"></a>

```csharp
public object PypiInput { get; }
```

- *Type:* object

---

##### `RequirementsInput`<sup>Optional</sup> <a name="RequirementsInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirementsInput"></a>

```csharp
public string RequirementsInput { get; }
```

- *Type:* string

---

##### `WhlInput`<sup>Optional</sup> <a name="WhlInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whlInput"></a>

```csharp
public string WhlInput { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Egg`<sup>Required</sup> <a name="Egg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.egg"></a>

```csharp
public string Egg { get; }
```

- *Type:* string

---

##### `Jar`<sup>Required</sup> <a name="Jar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.jar"></a>

```csharp
public string Jar { get; }
```

- *Type:* string

---

##### `Requirements`<sup>Required</sup> <a name="Requirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.requirements"></a>

```csharp
public string Requirements { get; }
```

- *Type:* string

---

##### `Whl`<sup>Required</sup> <a name="Whl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.whl"></a>

```csharp
public string Whl { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframework.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LibraryPluginframeworkConfig <a name="LibraryPluginframeworkConfig" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryPluginframeworkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    object Cran = null,
    string Egg = null,
    string Jar = null,
    object Maven = null,
    object Pypi = null,
    string Requirements = null,
    string Whl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.cran">Cran</a></code> | <code>object</code> | cran block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.egg">Egg</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.jar">Jar</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.maven">Maven</a></code> | <code>object</code> | maven block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.pypi">Pypi</a></code> | <code>object</code> | pypi block. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.requirements">Requirements</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.whl">Whl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#cluster_id LibraryPluginframework#cluster_id}.

---

##### `Cran`<sup>Optional</sup> <a name="Cran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.cran"></a>

```csharp
public object Cran { get; set; }
```

- *Type:* object

cran block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#cran LibraryPluginframework#cran}

---

##### `Egg`<sup>Optional</sup> <a name="Egg" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.egg"></a>

```csharp
public string Egg { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#egg LibraryPluginframework#egg}.

---

##### `Jar`<sup>Optional</sup> <a name="Jar" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.jar"></a>

```csharp
public string Jar { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#jar LibraryPluginframework#jar}.

---

##### `Maven`<sup>Optional</sup> <a name="Maven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.maven"></a>

```csharp
public object Maven { get; set; }
```

- *Type:* object

maven block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#maven LibraryPluginframework#maven}

---

##### `Pypi`<sup>Optional</sup> <a name="Pypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.pypi"></a>

```csharp
public object Pypi { get; set; }
```

- *Type:* object

pypi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#pypi LibraryPluginframework#pypi}

---

##### `Requirements`<sup>Optional</sup> <a name="Requirements" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.requirements"></a>

```csharp
public string Requirements { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#requirements LibraryPluginframework#requirements}.

---

##### `Whl`<sup>Optional</sup> <a name="Whl" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkConfig.property.whl"></a>

```csharp
public string Whl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#whl LibraryPluginframework#whl}.

---

### LibraryPluginframeworkCran <a name="LibraryPluginframeworkCran" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryPluginframeworkCran {
    string Package,
    string Repo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.package">Package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.repo">Repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.package"></a>

```csharp
public string Package { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCran.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

### LibraryPluginframeworkMaven <a name="LibraryPluginframeworkMaven" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryPluginframeworkMaven {
    string Coordinates,
    string[] Exclusions = null,
    string Repo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.coordinates">Coordinates</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#coordinates LibraryPluginframework#coordinates}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.exclusions">Exclusions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#exclusions LibraryPluginframework#exclusions}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.repo">Repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.coordinates"></a>

```csharp
public string Coordinates { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#coordinates LibraryPluginframework#coordinates}.

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.exclusions"></a>

```csharp
public string[] Exclusions { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#exclusions LibraryPluginframework#exclusions}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMaven.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

### LibraryPluginframeworkPypi <a name="LibraryPluginframeworkPypi" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryPluginframeworkPypi {
    string Package,
    string Repo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.package">Package</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.repo">Repo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}. |

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.package"></a>

```csharp
public string Package { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#package LibraryPluginframework#package}.

---

##### `Repo`<sup>Optional</sup> <a name="Repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypi.property.repo"></a>

```csharp
public string Repo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/library_pluginframework#repo LibraryPluginframework#repo}.

---

## Classes <a name="Classes" id="Classes"></a>

### LibraryPluginframeworkCranList <a name="LibraryPluginframeworkCranList" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryPluginframeworkCranList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.get"></a>

```csharp
private LibraryPluginframeworkCranOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LibraryPluginframeworkCranOutputReference <a name="LibraryPluginframeworkCranOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryPluginframeworkCranOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.resetRepo"></a>

```csharp
private void ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.packageInput">PackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.package">Package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.packageInput"></a>

```csharp
public string PackageInput { get; }
```

- *Type:* string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.package"></a>

```csharp
public string Package { get; }
```

- *Type:* string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkCranOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LibraryPluginframeworkMavenList <a name="LibraryPluginframeworkMavenList" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryPluginframeworkMavenList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.get"></a>

```csharp
private LibraryPluginframeworkMavenOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LibraryPluginframeworkMavenOutputReference <a name="LibraryPluginframeworkMavenOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryPluginframeworkMavenOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusions` <a name="ResetExclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetExclusions"></a>

```csharp
private void ResetExclusions()
```

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.resetRepo"></a>

```csharp
private void ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinates">Coordinates</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusions">Exclusions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinatesInput"></a>

```csharp
public string CoordinatesInput { get; }
```

- *Type:* string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusionsInput"></a>

```csharp
public string[] ExclusionsInput { get; }
```

- *Type:* string[]

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.coordinates"></a>

```csharp
public string Coordinates { get; }
```

- *Type:* string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.exclusions"></a>

```csharp
public string[] Exclusions { get; }
```

- *Type:* string[]

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkMavenOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LibraryPluginframeworkPypiList <a name="LibraryPluginframeworkPypiList" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryPluginframeworkPypiList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.get"></a>

```csharp
private LibraryPluginframeworkPypiOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### LibraryPluginframeworkPypiOutputReference <a name="LibraryPluginframeworkPypiOutputReference" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Databricks;

new LibraryPluginframeworkPypiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resetRepo">ResetRepo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepo` <a name="ResetRepo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.resetRepo"></a>

```csharp
private void ResetRepo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.packageInput">PackageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repoInput">RepoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.package">Package</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repo">Repo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PackageInput`<sup>Optional</sup> <a name="PackageInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.packageInput"></a>

```csharp
public string PackageInput { get; }
```

- *Type:* string

---

##### `RepoInput`<sup>Optional</sup> <a name="RepoInput" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repoInput"></a>

```csharp
public string RepoInput { get; }
```

- *Type:* string

---

##### `Package`<sup>Required</sup> <a name="Package" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.package"></a>

```csharp
public string Package { get; }
```

- *Type:* string

---

##### `Repo`<sup>Required</sup> <a name="Repo" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.repo"></a>

```csharp
public string Repo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.libraryPluginframework.LibraryPluginframeworkPypiOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



